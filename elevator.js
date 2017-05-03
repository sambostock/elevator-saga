{
  init: function(elevators, floors) {

    // Add properties to elevators
    elevators.forEach((elevator, index) => {
      elevator.idleFloor = Math.round(
        (index + 1) * (floors.length / (elevators.length + 1))
      );

      elevator.goingUp = function() {
        this.goingUpIndicator(true);
        this.goingDownIndicator(false);
      };

      elevator.goingDown = function() {
        this.goingUpIndicator(false);
        this.goingDownIndicator(true);
      };

      elevator.goingNowhere = function() {
        this.goingUpIndicator(false);
        this.goingDownIndicator(false);
      };

      elevator.goingAnywhere = function() {
        this.goingUpIndicator(true);
        this.goingDownIndicator(true);
      };

      elevator.setDirectionToFloor = function(floor, subsequentFloor) {
        const currentFloor = this.currentFloor();

        if (floor == null) {
          this.goingAnywhere();
        } else if (floor > currentFloor) {
          this.goingUp();
        } else if (floor < currentFloor) {
          this.goingDown();
        } else if (subsequentFloor != null) {
          this.setDirectionToFloor(subsequentFloor);
        } else {
          this.goingAnywhere();
        }
      };

      elevator.updateDirection = function() {
        const nextFloor = this.destinationQueue[0];
        const subsequentFloor = this.destinationQueue[1];
        this.setDirectionToFloor(nextFloor, subsequentFloor);
      };
    });

    elevators.forEach((elevator, elevatorNumber) => {
      elevator.on("idle", function() {
        const pressedFloors = elevator.getPressedFloors();

        if (pressedFloors.length > 0) {
          elevator.destinationQueue = pressedFloors;
          elevator.checkDestinationQueue();
        } else {
          elevator.goToFloor(elevator.idleFloor);
        }

        elevator.updateDirection();
      });

      elevator.on('stopped_at_floor', floorNumber => {
        if (elevator.destinationQueue.length == 0) {
          elevator.updateDirection();
        }
      });
    });

    floors.forEach(floor => {
      const floorNumber = floor.floorNum();

      floor.on('up_button_pressed down_button_pressed', () => {
        /*
         * Check if floor will already be visited by elevator
         *  Do nothing
         * Check if the floor will be visited by an elevator with no next destination
         *  Do nothing
         * Check if an elevator will pass by the floor in the right direction
         *  Insert into the destination queue of that elevator
         * Check if there are idle elevators
         *  Call the closest
         * Assign this floor to the elevator with shortest destination queue
         */

      });
    });
  },

  update: function(dt, elevators, floors) {
  }
}
