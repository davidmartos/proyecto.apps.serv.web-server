(function ($) {
    $(function () {
        $('.sidenav').sidenav();
        $('.parallax').parallax();
/*
        $("#main-content").load("index");

        $("#home").click(function () {
            $("#main-content").load("index.html");
        })

        $("#libros").click(function () {
            $("#main-content").load("listado-libros.html");
        })

        $("#prestamos").click(function () {
            $("#main-content").load("listado-prestamos.html");
        })

        $("#home-mob").click(function () {
            $("#main-content").load("home.html");
        })

        $("#libros-mob").click(function () {
            $("#main-content").load("listado-libros.html");
        })

        $("#prestamos-mob").click(function () {
            $("#main-content").load("listado-prestamos.html");
        })
*/
        //INCREASE / DECREASE FONT
        $("#increase").click(function () {
            var currentSize = $('html').css('font-size');
            var currentSize2 = parseFloat(currentSize) * 1.1;
            $('html').not("increase").css('font-size', currentSize2);
            return false;
        });
        $("#decrease").click(function () {
            var currentSize = $('html').css('font-size');
            var currentSize2 = parseFloat(currentSize) * 0.9;
            $('html').not("#decrease").css('font-size', currentSize2);
            return false;
        });

        //SWITCH THEME COLOR EVENT
        $(".switch").find("input[type=checkbox]").on("change", function () {
            var pink = '#E4004F';
            var grey = '#38414A';
            var status = $(this).prop('checked');
            if (status) {
                $('nav').removeClass('white');
                $('nav').css('background-color', grey);

                $('nav ul a, nav').css('color', '#ffffff');
                $('h1, h2, h3, h4, h5, h6').css('color', grey);
                $('.sidenav-trigger').css('color', grey);
                $('footer.page-footer').css('background-color', grey);
                $('.btn-floating, .modal-footer a').css('background-color', grey);
                $(".btn-floating, .modal-footer a").hover(function () {
                    $(this).css("background-color", pink);
                }, function () {
                    $(this).css("background-color", grey);
                });
                $('#logo-container img').attr('src', '/img/logo_ui1_blanco.png');
            } else {
                $('nav').addClass('white');
                $('nav ul a, nav').css('color', pink);
                $('h1, h2, h3, h4, h5, h6, a').css('color', pink);
                $('.sidenav-trigger').css('color', pink);
                $('footer.page-footer').css('background-color', pink);
                $('.btn, .btn-floating, .modal-footer a').css('background-color', pink);
                $(".btn, .btn-floating, .modal-footer a").hover(function () {
                    $(this).css("background-color", grey);
                }, function () {
                    $(this).css("background-color", pink);
                });
                $('#logo-container img').attr('src', '/img/logo_ui1.png');
            }
        });
        function realizarLogin(){
            var email = $("#email").val();
            console.log(email);
        }
    }); // end of document ready
})(jQuery); // end of jQuery name space
