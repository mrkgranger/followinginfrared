basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (mbit_Robot.Avoid_Sensor(mbit_Robot.enAvoidState.OBSTACLE)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 200)
    } else {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    }
})
