$(document).ready(function() {
    $("#rooms").change(function() {
        if ($('#rooms').val() == "2 комнаты") {
            $("#nowshow1").show();
            $("#ll2").text("Взрослые комната 2");
        } else {
            $("#nowshow1").hide();
            $("#ll1").text("Взрослые");
            $("#ll2").text("Взрослые");
        }


        if ($('#rooms').val() == "3 комнаты") {
            $("#nowshow2").show();
            $("#ql1").text("Взрослые комната 2");
            $("#ql2").text("Взрослые комната 3");
        } else {
            $("#nowshow2").hide();
            $("#ll1").text("Взрослые");
            $("#ql1").text("Взрослые");
            $("#ql2").text("Взрослые");
        }
    });
});




$(document).ready(function() {
    $("#childs1").change(function() {
        if ($(this).val() == "2") {
            $("#childsar").show();
            $(".select-one2").addClass("wds502");
            $(".hide-one2").addClass("show-all");
        } else {
            $("#childsar").hide();
            $(".select-one2").removeClass("wds502");
            $(".hide-one2").removeClass("show-all");
        }
    });
    $("#childs1").change(function() {
        if ($(this).val() == "1") {
            $(".select-one").addClass("wds50");
            $(".hide-one").show();

        } else {
            $(".select-one").removeClass("wds50");
            $(".hide-one").hide();
        }
    });
});


$(document).ready(function() {
    $("#childs2").change(function() {
        if ($(this).val() == "1") {
            $(".sell2").addClass("wds50a");
            $(".hidd2").addClass("show-all2a");
        } else {
            $(".sell2").removeClass("wds50a");
            $(".hidd2").removeClass("show-all2a");
        }
    });


    $("#childs2").change(function() {
        if ($(this).val() == "2") {
            $(".sell").addClass("wds50b");
            $(".hidd").addClass("show-all2b");
            $("#childsar2").addClass("show-all2b");
        } else {
            $(".sell").removeClass("wds50b");
            $(".hidd").removeClass("show-all2b");
            $("#childsar2").removeClass("show-all2b");
        }
    });

});




$(document).ready(function() {
    $("#schilds2").change(function() {
        if ($(this).val() == "1") {
            $(".sellc").addClass("wds50c");
            $(".hiddc").addClass("show-all2c");

        } else {
            $(".sellc").removeClass("wds50c");
            $(".hiddc").removeClass("show-all2c");

        }
    });


    $("#schilds2").change(function() {
        if ($(this).val() == "2") {
            $(".sell2c").addClass("wds50d");
            $(".hidd2c").addClass("show-all2d");
            $("#schildsar2").addClass("show-all2d");
        } else {
            $(".sell2c").removeClass("wds50d");
            $(".hidd2c").removeClass("show-all2d");
            $("#schildsar2").removeClass("show-all2d");
        }
    });
});


$(document).ready(function() {
    $("#schilds3").change(function() {
        if ($(this).val() == "1") {
            $(".selle").addClass("wds50e");
            $(".hidde").addClass("show-all2e");

        } else {
            $(".selle").removeClass("wds50e");
            $(".hidde").removeClass("show-all2e");

        }
    });

    $("#schilds3").change(function() {
        if ($(this).val() == "2") {
            $(".sell2e").addClass("wds50f");
            $(".hidd2e").addClass("show-all2f");
            $("#schildsar3").addClass("show-all2f");

        } else {
            $(".sell2e").removeClass("wds50f");
            $(".hidd2e").removeClass("show-all2f");
            $("#schildsar3").removeClass("show-all2f");

        }
    });
});


$(document).ready(function() {

    $('.autoplay').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

});


$('.autoplay2').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
});