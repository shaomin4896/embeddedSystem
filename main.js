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
        door.set(0);
    });
    $('.reset').on('click', () => {
        $('.pwd').hide();
        $('.re').show();
    });
    var tmp_tem = 0, tmp_hum = 0;

    dht.on('value', (r) => {
        dhtJson = r.val();
        $('.tem').html(`${dhtJson.dht_tem}°C`);
        $('.hum').html(`${dhtJson.dht_hum}.00%`);
        if (dhtJson.dht_tem > tmp_tem) {
            $('.tem').css({"background-color":"#F08080","transition":".5s"});
            setTimeout( function() {
                $('.tem').css({"background-color":"","transition":".5s"});
           }, 500);
        } else if (dhtJson.dht_tem < tmp_tem) {
            $('.tem').css({"background-color":"#90EE90","transition":".5s"});
            setTimeout( function() {
                $('.tem').css({"background-color":"","transition":".5s"});
           }, 500);
        }
        if (dhtJson.dht_hum > tmp_hum) {
            $('.hum').css({"background-color":"#F08080","transition":".5s"});
            setTimeout( function() {
                $('.hum').css({"background-color":"","transition":".5s"});
           }, 500);
        } else if (dhtJson.dht_hum < tmp_hum) {
            $('.hum').css({"background-color":"#90EE90","transition":".5s"});
            setTimeout( function() {
                $('.hum').css({"background-color":"","transition":".5s"});
           }, 500);
        }
        tmp_tem = dhtJson.dht_tem;
        tmp_hum = dhtJson.dht_hum;
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