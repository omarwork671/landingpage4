$(document).ready(function() {
    var wow = new WOW({
        mobile: false
    });
    wow.init();

    $(function() {
        $("#emailform").validate();
    });
});

