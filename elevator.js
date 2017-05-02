{
  init: function(elevators, floors) {
    const elevator = elevators[0];

    elevator.on("idle", function() {
      const pressedFloors = elevator.getPressedFloors();

      if (pressedFloors.length > 0) {
        const nextFloor = pressedFloors[0];
        elevator.goToFloor(nextFloor);
      } else {
        floors.forEach(function(floor, index) {
          elevator.goToFloor(index);
        });
      }
    });
  },

  update: function(dt, elevators, floors) {
  }
}
