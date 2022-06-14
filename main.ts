input.onButtonPressed(Button.A, function () {
    Timer += 1
})
input.onButtonPressed(Button.AB, function () {
    Timer = 0
})
input.onButtonPressed(Button.B, function () {
    Countdown = true
})
let Countdown = false
let Timer = 0
Timer = 0
Countdown = false
basic.forever(function () {
    basic.showNumber(Timer)
    if (Countdown == true) {
        basic.pause(100)
        Timer += -1
        if (Timer <= 0) {
            Countdown = false
        }
    }
})
