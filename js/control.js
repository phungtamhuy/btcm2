// JavaScript Document
var typed = new Typed('.element', {
strings: ["Người thiết kế Wed."," Thiết kế App.", "Chỉnh sửa video","Thiết kế giao diện và trải nghiệm người dùng"],
typeSpeed:50,
backSpeed:50,
loop:true,
});

$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});

$('.counter').countUp();

  AOS.init();