$(document).ready(function(){
  
    $('li').click(function(){
        $('#sideBar').toggleClass('sideBar-collapse');
    });
    $('#sidebarCollapse').click(function(){
        $('#sideBar').toggleClass('sideBar-collapse');
    });

    var home = document.getElementById('homeSection');
    var about = document.getElementById('aboutSection');
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    $('#Home').on('click', function () {
        $('#homeSection').toggleClass("contentHide");
        $('#masterContent').prepend(home);
        $(about).remove();
    });

    $('#About').on('click', function () {
        
        $('#aboutSection').toggleClass("contentHide");
        $('#masterContent').prepend(about);
        $(home).remove();
    });  

    //owl-carousel script
    // $("#owl-demo").owlCarousel({

    // autoPlay: 3000, 

    // items : 1,
    // itemsDesktop : [1199,1],
    // itemsDesktopSmall : [979,1],
    // itemsMobile : [786,1]

    // });     
    // AOS Script
    AOS.init({
        duration:1500
    }); 
    // Number Counter
    $('.counter').counterUp({
    delay: 10,
    time: 2000
    });
    
    //Message Sent
    $('#messageSent').click(function(){
        setTimeout(function(){
            $('#ModalBox').show();
        },1000);
        setTimeout(function(){
            $('#ModalBox').hide();
        },3000)          
    });
});