function changeuser() {


    document.getElementById('name').style.fontSize = "12px";
    document.getElementById('name').style.top = "-5px";
    document.getElementById('use').focus();

}
function changeuser1() {
    document.getElementById('name1').style.fontSize = "12px";
    document.getElementById('name1').style.top = "-5px";
    document.getElementById('use1').focus();
}
function changeemail() {
    document.getElementById('email1').style.fontSize = "12px";
    document.getElementById('email1').style.top = "-5px";
    document.getElementById('eml').focus();
}
function changepass() {

    document.getElementById('pass').style.fontSize = "12px";

    document.getElementById('pass').style.top = "-5px";
    document.getElementById('pswd').focus();
}
function changepass1() {
    document.getElementById('pass1').style.fontSize = "12px";
    document.getElementById('pass1').style.top = "-5px";
    document.getElementById('pswd1').focus();
}
function confirmpass() {
    document.getElementById('confirmpass').style.fontSize = "12px";
    document.getElementById('confirmpass').style.top = "-5px";
    document.getElementById('conpswd').focus();
}


$('body').ready(function () {
    $('.round').click(function () {

        $('.round').addClass('move');

        setTimeout(function () {
            $('.box').fadeOut(1000);


            $('.round').addClass('rr');
            $('.round').removeClass('move');
            $('.fa.fa-plus').fadeIn(2000, function () {
                $('.fa.fa-plus').addClass('plus');

            });



            $('.box1').fadeIn(100, function () {
                $(this).addClass('showlog');

            });


        }, 1000);

        setTimeout(function () {
            $('.round').removeClass('rr');
            $('.fa.fa-plus').removeClass('plus');
        }, 2000);


    });
    $('.fa.fa-times').click(function () {
        setTimeout(function () {
            $('.box1').removeClass('showlog');
            $('.box').fadeIn(500);
            setTimeout(function () {
                location.reload(true);

            }, 2000);


        }, 100);


    });
});
