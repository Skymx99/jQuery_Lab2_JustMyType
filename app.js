$(document).ready(function () {
    let toShow = true;
    $('#keyboard-upper-container').hide();
    $(document).keydown(function (keyEvent) {
        if (keyEvent.keyCode === 16) {
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
        }

    });

    $(document).keyup(function (keyEvent) {
        if (keyEvent.keyCode === 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        }

    });

    $(function(){
        $(document).on('keypress', function(e){
            $('target-letter').css('background-color', 'yellow ');
            console.log(e.which);
        });
    });

    
});







