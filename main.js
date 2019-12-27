$(document).ready(() => {
    var led = firebase.database().ref('blueLight');
    $('.light').on('click', () => {
        if ($('.light').is(":checked")) {
            led.set(1);
        } else {
            led.set(0);
        }
    });
    led.on('value', (r) => {
        if (r.val() == 1) {
            console.log('目前打開');
            $('.switch_blueLight').addClass('is-checked');
            $('#light_status').html('Light_On');
        } else {
            console.log('目前關閉');
            $('.switch_blueLight').removeClass('is-checked');
            $('#light_status').html('Light_Off');
        }
    });
});