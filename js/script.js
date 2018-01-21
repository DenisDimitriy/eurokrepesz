$(document).ready(function () {

    //E-mail Ajax Send
    //$(".form").submit(function() { //Change
    //    var th = $(this);
    //    $.ajax({
    //        type: "POST",
    //        url: "mail.php", //Change
    //        data: th.serialize()
    //    }).done(function() {
    //        alert("Thank you!");
    //        setTimeout(function() {
    //            // Done Functions
    //            th.trigger("reset");
    //        }, 1000);
    //    });
    //    return false;
    //});

    //Ajax sendform
    $(".form").each(function () {
        $(this).validate({
            errorPlacement: function (error, element) {
                return true;
            },
            submitHandler: function (form) {
                var th = $(form);
                $.ajax({
                    type: "POST",
                    url: "mail.php", //Change
                    data: th.serialize()
                }).done(function () {
                    alert("???????! ??? ???????? ? ???? ????????.");
                    if( th.data("loadfile") ) {
                        location.href = th.data("loadfile");
                    }
                });
                return false;
            }
        });
    });

    //$(".form-load").each(function () {
    //    $(this).validate({
    //        errorPlacement: function (error, element) {
    //            return true;
    //        },
    //        submitHandler: function (form) {
    //            var th = $(form);
    //            $.ajax({
    //                type: "POST",
    //                url: "mail.php", //Change
    //                data: th.serialize()
    //            }).done(function () {
    //                if( th.data("loadfile") ) {
    //                    location.href = th.data("loadfile");
    //                }
    //            });
    //            return false;
    //        }
    //    });
    //});

});