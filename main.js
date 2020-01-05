$(document).ready(() => {
    var led = firebase.database().ref('blueLight');
    var dht = firebase.database().ref('dht');
    var door = firebase.database().ref('door');

    $('.light').on('click', () => {
        if ($('.light').is(":checked")) {
            led.set(1);
        } else {
            led.set(0);
        }
    });
    $('.door').on('click', () => {
        $('.pwd').show();
    });
    $('.submit').on('click', () => {
        pwd = $('.pwdtext').val();
        var pwdref = firebase.database().ref('pwd');
        pwdref.once('value', (r) => {
            if (pwd == r.val()) {
                door.set(1);
            } else {
                door.set(0);
            }
        });
    });
    $('.close_submit').on('click', () => {
        pwd = $('.pwdtext').val();
        var pwdref = firebase.database().ref('pwd');
        pwdref.once('value', (r) => {
            if (pwd == r.val()) {
                door.set(0);
            }
        });
    });
    $('.reset').on('click', () => {
        $('.pwd').hide();
        $('.re').show();
    });
    dht.on('value', (r) => {
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