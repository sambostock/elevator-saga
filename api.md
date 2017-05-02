# Documentation Summary

## Elevator

### Properties
```javascript
elevator.goToFloor(1)
elevator.goToFloor(1, true)        // Go to floor NOW
elevator.stop()
elevator.currentFloor()
elevator.goingUpIndicator()        // Get
elevator.goingUpIndicator(true)    // Set
elevator.goingDownIndicator()
elevator.goingDownIndicator(true)
elevator.maxPassengerCount()
elevator.loadFactor()              // 0: empty, 1: full
elevator.destinationDirection()    // 'up', 'down', 'stopped'
elevator.destinationQueue          // [], call checkDestinationQueue() if updated
elevator.checkDestinationQueue
elevator.getPressedFloors()        // []
```

### Events
```javascript
elevator.on('idle',                 fn)
elevator.on('floor_button_pressed', fn)
elevator.on('passing_floor',        fn)
elevator.on('stopped_at_floor',     fn)
```

## Floor

### Properties
```javascript
floor.floorNum()
```

### Events
```javascript
floor.on('up_button_pressed',   fn)
floor.on('down_button_pressed', fn)
```
