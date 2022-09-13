let x_move2 = 0
let x_move = 0
basic.forever(function () {
    x_move2 = randint(0, 4)
    for (let index = 0; index <= 3; index++) {
        led.plot(x_move2, index + 1)
        basic.pause(150)
        led.unplot(x_move2, index + 1)
    }
})
basic.forever(function () {
    x_move = randint(0, 4)
    for (let index = 0; index <= 4; index++) {
        led.plot(x_move, index)
        basic.pause(150)
        led.unplot(x_move, index)
    }
})
