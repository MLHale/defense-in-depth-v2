radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        attack(0)
    } else if (receivedNumber == 1) {
        attack(1)
    } else if (receivedNumber == 2) {
        attack(2)
    } else if (receivedNumber == 3) {
        attack(3)
    } else if (receivedNumber == 4) {
        attack(4)
    } else {
        basic.showString("Err")
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        . . . # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        . . . # .
        . . . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    // Send a number 1-5 for layer 1
    radio.sendNumber(4)
})
input.onButtonPressed(Button.A, function () {
    basic.pause(100)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    // Send a number 1-5 for layer 1
    radio.sendNumber(0)
})
function attack (num: number) {
    if (num <= 2 && !(rule1)) {
        led.plot(num, 0)
        led.plot(num, 1)
        led.plot(num, 2)
        led.plot(num, 3)
        led.plot(num, 4)
    } else if (num >= 3 && !(rule2)) {
        led.plot(num, 0)
        led.plot(num, 1)
        led.plot(num, 2)
        led.plot(num, 3)
        led.plot(num, 4)
    } else if (num <= 2 && rule1) {
        led.plot(num, 0)
        led.plot(0, 1)
        led.plot(1, 1)
        led.plot(2, 1)
    } else {
        led.plot(num, 0)
        led.plot(num, 1)
        led.plot(num, 2)
        led.plot(3, 3)
        led.plot(4, 3)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (rule1 && rule2) {
        basic.showLeds(`
            . . . . .
            # # # . .
            . . . . .
            . . . # #
            . . . . .
            `)
    } else if (rule2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # #
            . . . . .
            `)
    } else if (rule1) {
        basic.showLeds(`
            . . . . .
            # # # . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "blocked") {
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.pause(100)
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    // Send a number 1-5 for layer 1
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    // Send a number 1-5 for layer 1
    radio.sendNumber(2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        . . . # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        . . . # .
        . . . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    // Send a number 1-5 for layer 1
    radio.sendNumber(3)
})
let rule2 = 0
let rule1 = 0
// Set this to be the same as your groupmate
radio.setGroup(1)
// Set this to be the same as your groupmate
radio.setFrequencyBand(1)
rule1 = 1
rule2 = 1
