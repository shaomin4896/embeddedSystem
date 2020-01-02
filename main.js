$(document).ready(() => {
    var led = firebase.database().ref('blueLight');
    var dht = firebase.database().ref('dht');
    $('.light').on('click', () => {
        if ($('.light').is(":checked")) {
            led.set(1);
        } else {
            led.set(0);
        }
    });
    dht.on('value',(r)=>{
        dhtJson = r.val();
        $('.tem').html(`${dhtJson.dht_tem}°C`);
        $('.hum').html(`${dhtJson.dht_hum}.00%`);
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


});