{
  init: function(elevators, floors) {
    const elevator = elevators[0];

    elevator.on("idle", function() {
      floors.forEach(function(floor, index) {
        elevator.goToFloor(index);
      });
    });
  },

  update: function(dt, elevators, floors) {
  }
}
