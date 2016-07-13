CarApp = {};

CarApp.Car = Backbone.Model.extend({
	defaults: {
		year: null,
		makeName: null,
		modelName: null
	}
});

CarApp.CarInventory = Backbone.Collection.extend({});

CarApp.AddCarView = Backbone.View.extend({
	el: "#editInventory",
	initialize: function () {
		var view = this;
		if (this.collection)
			this.collection.on("add", function () {
				view.$el.find('input').val("");
			});
	},
	events: {
		"click .add": "selectedCar"
	},
	selectedCar: function (e) {
		if (this.$el.find('#make').val().length > 0 &&
			this.$el.find('#model').val().length > 0) {
			this.collection.add(new CarApp.Car({
				year: this.$el.find('#year').val(),
				makeName: this.$el.find('#make').val(),
				modelName: this.$el.find('#model').val()
			}));
		}
	}
});

CarApp.CarInventoryView = Backbone.View.extend({
	el: "#inventory",
	initialize: function () {
		var view = this;

		if (this.collection.models) {
			this.table = this.$el.find('#inventoryTable').DataTable({
				data: this.collection.models,
				dom: 'lrtip',
				language: {
					"emptyTable": "No cars currently in inventory",
					"zeroRecords": "No cars currently in inventory",
				},
				columns: [
					{
						title: "Id",
						data: "id"
					},
					{
						title: "Year",
						data: 'year'
					},
					{
						title: "Car Make",
						data: 'makeName'
					},
					{
						title: "Car Model",
						data: 'modelName'
					}
				],
				rowCallback: function (row, data) {
					$(row).on('click', function () {
						view.$el.find(".alert").remove();

						if ($(this).hasClass('selected')) {
							$(this).removeClass('selected');
						} else {
							$('tr.selected').removeClass('selected');
							$(this).addClass('selected');
						}
					});
				}
			});

			this.collection.on("update", function () {
				if (this.models.length > 0) {
					view.$el.find("#remove").removeClass("hide");
					view.table.clear();
					_.each(this.models, function (car, ind) {
						view.table.row.add({
							"id": ind,
							"year": car.get('year'),
							"makeName": car.get('makeName'),
							"modelName": car.get('modelName')
						});
					});

					view.table.draw();
				} else {
					if (!view.$el.find("#remove").hasClass("hide"))
						view.$el.find("#remove").addClass("hide");
				}
			});
		}
	},
	events: {
		"click #remove": "removeRow"
	},
	removeRow: function () {
		selectedIndex = $(".selected td:first").text();

		this.$el.find(".alert").remove();
		if (selectedIndex.length > 0) {
			this.collection.remove(this.collection.at(selectedIndex));
			this.table.row('.selected').remove().draw(false);
		} else {
			this.$el.find('#inventoryTable').before("<div class='row'><div class='alert alert-warning'><span class='glyphicon glyphicon-warning-sign'></span>You must select a row from the table to remove first</div></div>");

		}
	}
});

$(function () {
	var inventoryCollection = new CarApp.CarInventory();

	var entryView = new CarApp.AddCarView({
		collection: inventoryCollection
	});

	var inventoryView = new CarApp.CarInventoryView({
		collection: inventoryCollection
	});
});
