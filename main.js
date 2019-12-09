$(document).ready(() => {
    for (let index = 0; index < 5; index++) {
        var d1_switch_obj = `<label class="switch">
        <input type="checkbox" class="chk" id="device_1_${index}">
        <span class="slider round"></span>
        </label>`;
        var d2_switch_obj = `<label class="switch">
        <input type="checkbox" class="chk" id="device_2_${index}">
        <span class="slider round"></span>
        </label>`;
        $('.device_1').append(d1_switch_obj);
        $('.device_2').append(d2_switch_obj);
    }

});
