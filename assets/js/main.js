(function ($) {

    "use strict";

    $(window).on('load', function () {

        /* Page Loader active
       ========================================================*/
        $('#preloader').fadeOut();

        // Sticky Nav
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.scrolling-navbar').addClass('top-nav-collapse');
            } else {
                $('.scrolling-navbar').removeClass('top-nav-collapse');
            }
        });

        /* slicknav mobile menu active  */
        $('.mobile-menu').slicknav({
            prependTo: '.navbar-header',
            parentTag: 'liner',
            allowParentLinks: true,
            duplicate: true,
            label: '',
            closedSymbol: '<i class="icon-arrow-right"></i>',
            openedSymbol: '<i class="icon-arrow-down"></i>',
        });

        /* ==========================================================================
        countdown timer
        ========================================================================== */
        jQuery('#clock').countdown('2020/09/01', function (event) {
            var $this = jQuery(this).html(event.strftime(''
                + '<div class="time-entry days"><span>%-D</span> Days</div> '
                + '<div class="time-entry hours"><span>%H</span> Hours</div> '
                + '<div class="time-entry minutes"><span>%M</span> Minutes</div> '
                + '<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
        });

        /* WOW Scroll Spy
        ========================================================*/
        var wow = new WOW({
            //disabled for mobile
            mobile: false
        });
        wow.init();

        // one page navigation
        $('.onepage-nev').onePageNav({
            currentClass: 'active'
        });

        /* Back Top Link active
        ========================================================*/
        var offset = 200;
        var duration = 500;
        $(window).scroll(function () {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(400);
            } else {
                $('.back-to-top').fadeOut(400);
            }
        });

        $('.back-to-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
            return false;
        });

    });

}(jQuery));

function submit() {

    var name = $("#name").val();
    var email = $("#email").val();
    var msg_subject = $("#subject").val();
    var message = $("#message").val();

    if (name.length < 5) {

        showalert(false, "name lenght < 5")
        $("#name").focus()
        return
    }

    if (validateEmail(email) == false) {
        $("#email").focus()
        showalert(false, "email incorrect")
        return
    }
    if (msg_subject.length < 5) {
        $("#subject").focus()
        showalert(false, "subject lenght < 5")
        return
    }


    if (message.length < 5) {
        $("#message").focus()

        showalert(false, "message content < 10")
        return
    }

    (function () {
        emailjs.init("user_I2wVlaAcPTDnDjREW2Fph");
    })()

    var templateParams = {
        from_name: name,
        from_email: email,
        subject: msg_subject,
        message_html: message
    };

    console.log(templateParams);

    emailjs.send('gmail', 'template_Xgu8916g', templateParams)
        .then(function (response) {
            showalert(true, "message sent successfully")
        }, function (error) {
            showalert(false, "erreur de reseau, contact admin@armane.net directly")

        });


}

function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField) == false)
        return false;

    return true;

}

function showalert(bool, msg) {

    var type = bool ? "alert-success" : "alert-warning";

    $("#alert").html(' <div class="alert ml-5 mr-5  ' + type + ' alert-dismissible">\n' +
        '                                        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n' +
        '                                          ' + msg + '</div>');

}