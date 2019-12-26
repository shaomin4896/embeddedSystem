$(document).ready(() => {
    var led = firebase.database().ref('blueLight');
    $('#light').on("change", () => {
        if ($('#light').is(":checked")) {
            led.set(1);
        } else {
            led.set(0);
        }
    });
    led.on('value', (r) => {
        if (r.val() == 1) {
            console.log('目前打開');
            $('#light').attr("checked","true");
        } else {
            console.log('目前關閉');
            $('#light').attr("checked",false);
        }
    });
});