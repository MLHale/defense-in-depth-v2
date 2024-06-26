radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        network(0)
    } else if (receivedNumber == 1) {
        network(1)
    } else if (receivedNumber == 2) {
        network(2)
    } else if (receivedNumber == 3) {
        network(3)
    } else if (receivedNumber == 4) {
        network(4)
    } else {
        basic.showString("Err")
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        # # . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
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
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
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
function network (num: number) {
    if (num <= 2 && !(rule1)) {
        led.plot(num, 0)
        basic.pause(200)
        led.plot(num, 1)
        basic.pause(100)
        led.plot(num, 2)
        basic.pause(200)
        led.plot(num, 3)
        basic.pause(200)
        for (let index = 0; index < 10; index++) {
            led.toggle(num, 4)
            basic.pause(100)
        }
        led.plot(num, 4)
    } else if (num >= 3 && !(rule2)) {
        led.plot(3, 0)
        led.plot(4, 0)
        basic.pause(200)
        led.plot(3, 1)
        led.plot(4, 1)
        basic.pause(200)
        led.plot(3, 2)
        led.plot(4, 2)
        basic.pause(200)
        led.plot(3, 3)
        led.plot(4, 3)
        basic.pause(200)
        led.unplot(3, 4)
        led.unplot(4, 4)
        for (let index = 0; index < 10; index++) {
            led.toggle(3, 4)
            led.toggle(4, 4)
            basic.pause(100)
        }
        led.plot(3, 4)
        led.plot(4, 4)
    } else if (num <= 2 && rule1) {
        led.plot(num, 0)
        led.unplot(num, 1)
        for (let index = 0; index < 10; index++) {
            led.toggle(num, 1)
            basic.pause(100)
        }
        led.plot(num, 1)
        led.plot(0, 1)
        led.plot(1, 1)
        led.plot(2, 1)
    } else {
        led.plot(num, 0)
        led.plot(num + 1, 0)
        basic.pause(200)
        led.plot(num, 1)
        led.plot(num + 1, 1)
        basic.pause(200)
        led.plot(num, 2)
        led.plot(num + 1, 2)
        basic.pause(200)
        led.unplot(3, 3)
        led.unplot(4, 3)
        for (let index = 0; index < 10; index++) {
            led.toggle(3, 3)
            led.toggle(4, 3)
            basic.pause(100)
        }
        led.plot(3, 3)
        led.plot(4, 3)
    }
}
input.onGesture(Gesture.TiltLeft, function () {
    if (rule1) {
        rule1 = 0
    } else {
        rule1 = 1
    }
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
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # .
        # . . . #
        # . . . #
        # . . . #
        # # # # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        # # # # .
        # . . . #
        # . . . #
        # . . . #
        # # # # .
        `)
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
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        . . . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . # .
        . . . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . # .
        . . . # .
        . . . # .
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
    radio.sendNumber(1)
})
input.onGesture(Gesture.TiltRight, function () {
    if (rule2) {
        rule2 = 0
    } else {
        rule2 = 1
    }
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
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
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
let rule2 = 0
let rule1 = 0
// Set this to be the same as your groupmate
radio.setGroup(1)
// Set this to be the same as your groupmate
radio.setFrequencyBand(1)
rule1 = 0
rule2 = 0
