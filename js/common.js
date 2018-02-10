$(function() {
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };
    $("form").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                $(".btn_send").addClass("btn_send_send");
                $(".btn_send_send").text('Отправлено');
                $(".btn_send_send").prepend('<i class="fa fa-check" aria-hidden="true"></i>');
                $(".fa-check").css({
                    'display': 'inherit'
                })
                setTimeout(function() {
                    $(".btn_send_send").text('Отправить');
                    $(".btn_send").removeClass("btn_send_send");
                    th.trigger("reset");
                }, 2000);
            }, 300);
        });
        return false;
    });
    var menu_body = $(".top_line");
    var About_us = $("#About_us").offset().top;
    var write_to_us = $("#write_to_us").offset().top;
    $(window).scroll(function() {
        var top = $(this).scrollTop();
        if (top >= About_us - 50) {
            menu_body.css({
                'background-color': '#232323',
                'color': '#ddd',
            })
        }
        if (top <= About_us) {
            menu_body.css({
                'background-color': 'rgba(48,48,48,.5)',
            })
        }
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > $(this).height()) {
            $('.MoveUp').addClass('active');
        } else {
            $('.MoveUp').removeClass('active');
        }
    });
    $('.MoveUp').click(function() {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 'slow', 'swing');
    });

    $('#btn_call').click(function() {
        $('html, body').stop().animate({
            scrollTop: write_to_us+10
        }, 'slow', 'swing');
    });


//Valitation

	// var name = $("#name").value;
	// var adress = $("#adress").value;
	// var message = $("#message").value;

	// var pattern = /^[\s]+$/;
	// var pattern_number = /^[\d]+$/;

	// if (pattern.test(name)) {
	// 	alert("NULL");
	// }
    
});