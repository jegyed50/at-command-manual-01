input.onButtonPressed(Button.A, function () {
    serial.redirect(
    SerialPin.P8,
    SerialPin.P12,
    BaudRate.BaudRate115200
    )
    serial.setTxBufferSize(32)
    serial.setRxBufferSize(32)
    basic.pause(100)
    // AT communication test
    serial.writeString("AT" + vCrLf)
    basic.pause(100)
    // ECHO OFF
    serial.writeString("ATE0" + vCrLf)
    basic.pause(100)
    // WiFi Disconnect
    serial.writeString("AT+RST" + vCrLf)
    basic.pause(100)
    // WiFi Disconnect
    serial.writeString("AT+RST" + vCrLf)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("AT" + vCrLf)
})
let vCrLf = ""
serial.setRxBufferSize(32)
vCrLf = "" + String.fromCharCode(13) + String.fromCharCode(10)
basic.forever(function () {
    basic.showString(serial.readString())
})
