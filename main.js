$(document).ready(() => {

    $('#light').on("change",()=>{
        
        if ($('#light').is(":checked")) {
            
            $.get('http://192.168.0.18/on');
        }else{
            
            $.get('http://192.168.0.18/off');
        }
    });
});
