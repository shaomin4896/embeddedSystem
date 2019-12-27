$(document).ready(() => {
    var led = firebase.database().ref('blueLight');
    var servo = firebase.database().ref('servo');
    $('.light').on('click', () => {
        if ($('.light').is(":checked")) {
            led.set(1);
        } else {
            led.set(0);
        }
    });
    $('.servo').on('click',()=>{
        if ($('.servo').is(":checked")) {
            servo.set(1);
        } else {
            servo.set(0);
        }
    });
    led.on('value', (r) => {
        if (r.val() == 1) {
            $('.switch_blueLight').addClass('is-checked');
            $('#light_status').html('BlueLight_On');
        } else {
            $('.switch_blueLight').removeClass('is-checked');
            $('#light_status').html('BlueLight_Off');
        }
    });
    servo.on('value', (r) => {
        if (r.val() == 1) {
            $('.switch_servo').addClass('is-checked');
            $('#servo_status').html('SwitchServo_On');
        } else {
            $('.switch_servo').removeClass('is-checked');
            $('#servo_status').html('SwitchServo_Off');
        }
    });
});