/// <reference types="../@types/jquery"/>



/////////////////Navbar///////////////

$('.openNav').on('click', function(){
    $('nav').animate({width: 'show'}, 500)
 
    if($('body').outerWidth(true) < 450){
        $('.openNav').animate({left: '43%'}, 500)
    }else{
        $('.openNav').animate({left: '17%'}, 500)
    }
})

$('a[href^="#"]').on('click', function(e){

    let currentHref = e.target.getAttribute('href')

    let sectionOffset = $(currentHref).offset().top

    $('html,body').animate({scrollTop: sectionOffset}, 1000)
})

$('.close').on('click', function(){
    $('nav').animate({width:'toggle'}, 500)
    $('.openNav').animate({left: '1%'}, 500)
})



////////////Singers section///////////

$('.singer1').on('click',function(){

    if($('.singer-paragraph2').outerHeight(true) > 0 || $('.singer-paragraph3').outerHeight(true) > 0 || $('.singer-paragraph4').outerHeight(true) > 0){
        $('.singer-paragraph2').slideUp(400)
        $('.singer-paragraph3').slideUp(400)
        $('.singer-paragraph4').slideUp(400)
    }
    $('.singer-paragraph1').animate({height: 'toggle'}, 400)
    
})

$('.singer2').on('click',function(){

    if($('.singer-paragraph1').outerHeight(true) > 0 || $('.singer-paragraph3').outerHeight(true) > 0 || $('.singer-paragraph4').outerHeight(true) > 0){
        $('.singer-paragraph1').slideUp(400)
        $('.singer-paragraph3').slideUp(400)
        $('.singer-paragraph4').slideUp(400)
    }

    $('.singer-paragraph2').animate({height: 'toggle'}, 400)
    
    
})

$('.singer3').on('click',function(){

    if($('.singer-paragraph1').outerHeight(true) > 0 || $('.singer-paragraph2').outerHeight(true) > 0 || $('.singer-paragraph4').outerHeight(true) > 0){
        $('.singer-paragraph1').slideUp(400)
        $('.singer-paragraph2').slideUp(400)
        $('.singer-paragraph4').slideUp(400)
    }
    $('.singer-paragraph3').animate({height: 'toggle'}, 400)
    
})

$('.singer4').on('click',function(){

    if($('.singer-paragraph1').outerHeight(true) > 0 || $('.singer-paragraph2').outerHeight(true) > 0|| $('.singer-paragraph3').outerHeight(true) > 0){
        $('.singer-paragraph1').slideUp(400)
        $('.singer-paragraph2').slideUp(400)
        $('.singer-paragraph3').slideUp(400)
    }
    $('.singer-paragraph4').animate({height: 'toggle'}, 400)
    
})



/////////////Count Section/////////////

const day = 24 * 60 * 60 * 1000;
let noOfDays = 0;
let noOfHours = 0;
let noOfMins = 0;
let noOfSecs = 0;

setInterval(function(){

    let eventDate = new Date("2024-11-25");
    let currentDate = new Date();

    noOfDays = Math.round((eventDate - currentDate) / day);

    noOfHours = 24 -  currentDate.getHours();
    noOfMins = 60 - currentDate.getMinutes();
    noOfSecs = 60 - currentDate.getSeconds();

    $('#noOfDays').html(noOfDays + ' D')  
    $('#noOfHours').html(noOfHours + ' h')   
    $('#noOfMins').html(noOfMins + ' m')   
    $('#noOfSecs').html(noOfSecs + ' s')

}, 1000)



////////////Contact section///////////

let char = '';

$('textarea').on('input keypress', function(e){  
    let count = 100;

    char =  $('textarea').val()

    count = count - char.length 

    if(count < 0){
        $('.type-count').text('your available character finished');
          e.preventDefault();  //preventing user from typing after exceeding 100 characters
        
    }else{
        $('.type-count').text(count);
    }

})
