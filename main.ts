input.onButtonPressed(Button.A, function () {
    led.plot(2, 1)
    led.plot(2, 2)
    led.plot(1, 3)
    led.plot(2, 3)
    led.plot(3, 3)
    led.plot(0, 4)
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
    led.plot(4, 4)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(1, 3)
        led.plot(2, 3)
        led.plot(3, 3)
        led.plot(0, 4)
        led.plot(1, 4)
        led.plot(2, 4)
        led.plot(3, 4)
        led.plot(4, 4)
        basic.pause(500)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(1, 3)
        led.plot(3, 3)
        led.plot(0, 4)
        led.plot(4, 4)
        led.unplot(2, 3)
        led.unplot(1, 4)
        led.unplot(2, 4)
        led.unplot(3, 4)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    led.plot(2, 1)
    led.plot(2, 2)
    led.plot(1, 3)
    led.plot(3, 3)
    led.plot(0, 4)
    led.plot(4, 4)
    led.unplot(1, 4)
    led.unplot(2, 4)
    led.unplot(2, 3)
    led.unplot(3, 4)
})
