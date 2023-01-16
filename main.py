def on_button_pressed_a():
    serial.redirect(SerialPin.P8, SerialPin.P12, BaudRate.BAUD_RATE115200)
    serial.set_tx_buffer_size(32)
    serial.set_rx_buffer_size(32)
    basic.pause(100)
    serial.write_string("AT" + vCrLf)
    basic.pause(100)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_string("AT" + vCrLf)
input.on_button_pressed(Button.B, on_button_pressed_b)

vCrLf = ""
rowData: Buffer = None
vCrLf = "" + String.from_char_code(13) + String.from_char_code(10)

def on_forever():
    global rowData
    rowData = serial.read_buffer(0)
    # do something!!!
    if len(rowData) > 0:
        basic.show_string("" + str(rowData))
    basic.pause(100)
basic.forever(on_forever)
