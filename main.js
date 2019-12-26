$(document).ready(() => {

    $('#light').on("change", () => {
        var led = firebase.database().ref('blueLight');
        if ($('#light').is(":checked")) {
            led.set(1);
        } else {
            led.set(0);
        }
    });
});