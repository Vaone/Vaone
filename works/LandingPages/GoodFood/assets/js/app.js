$(function() {
    
     var header = $("#header"),
         scrollH = $("#header").innerHeight(),
         scrollOffset = $(window).scrollTop();  
    
    
    
    /* Fixed Header */
     checkScroll(scrollOffset);
    
    $(window).on("scroll", function() {
       scrollOffset = $(this).scrollTop();
        
       checkScroll(scrollOffset);
        
    });   
       
    function checkScroll(scrollOffset) {
        
        
       if( scrollOffset >= scrollH ) {
           header.addClass("fixed");
       } else {
           header.removeClass("fixed");
       }
           
    }
        
    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;
        
        
        $("html, body").animate({
           scrollTop: blockOffset            
        }, 500);
        
        $("nav").removeClass("active");
        $("#nav_toggle").removeClass("active");
    });
    
    
    /* menu nav toogle */
    $("#nav_toggle").on("click", function(event) {
    
        event.preventDefault();
        
        $(this).toggleClass("active");
        $("nav").toggleClass("active");
    
    });
    
    
});
/* Modal menu window  */
    var modal = document.getElementById("myModal");
    var allMenu = document.getElementById("allMenu");
    var modalImg = document.getElementById("img01");

  
    allMenu.onclick = function() {
    modal.style.display = "block"
    modalImg.src = "assets/images/allmenu2.jpg";
    };

    var clo = document.getElementsByClassName("close")[0];
        clo.onclick = function () {
        modal.style.display = "none";
    };

// входные параметры
var dateStart = new Date(2020, 7, 3),
    today = new Date(), 
    j = 0,
    dateStart = Date.parse(dateStart),
    today = Date.parse(today);
// просчитываем недели от даты старта
var week = 0;

for (j = dateStart; j <= today; j = j+7*24*60*60*1000) 
{        week += 1 ;
};

// вывести панель навигации для 2ой недели или 1ой
if (week % 2) {
        $('#menu__body1').css({display: 'flex'});
        $('#week1__nav').css({display: 'flex'});
        $('#week1').css({display: 'block'});
} else {
        $('#menu__body2').css({display: 'flex'});
        $('#week2__nav').css({display: 'flex'});
        $('#week2').css({display: 'block'});
};


var today = new Date();

//определяем день недели
function checkday() {
// какой день 1ой недели

if (today.getDay() == 1) 
    {
        $('#mon1').css({display: 'block'});
    } 

if(today.getDay() == 2)   {
        $('#tue1').css({display: 'block'});
    }
else if(today.getDay() == 3)   {
        $('#wed1').css({display: 'block'});
    }
else if(today.getDay() == 4)   {
    $('#thu1').css({display: 'block'});
    }
else if(today.getDay() == 5)   {
    $('#fri1').css({display: 'block'});
    }
else if (today.getDay() == 6)
    {$('#week-end').css({display: 'block'});} 
else if (today.getDay() == 0)
    {$('#week-end').css({display: 'block'});}; 

// какой день 2ой недели
if (today.getDay() == 1) 
    {
        $('#mon2').css({display: 'block'});
    } 

if(today.getDay() == 2)   {
        $('#tue2').css({display: 'block'});
    }
else if(today.getDay() == 3)   {
        $('#wed2').css({display: 'block'});
    }
else if(today.getDay() == 4)   {
    $('#thu2').css({display: 'block'});
    }
else if(today.getDay() == 5)   {
    $('#fri2').css({display: 'block'});
    }
else if (today.getDay() == 6)
    {$('#week-end').css({display: 'block'});} 
else if (today.getDay() == 0)
    {$('#week-end').css({display: 'block'});}   
};
checkday();

function hideall() {
    $('#mon1').css({display: 'none'});
    $('#tue1').css({display: 'none'});
    $('#wed1').css({display: 'none'});
    $('#thu1').css({display: 'none'});
    $('#fri1').css({display: 'none'});
    $('#mon2').css({display: 'none'});
    $('#tue2').css({display: 'none'});
    $('#wed2').css({display: 'none'});
    $('#thu2').css({display: 'none'});
    $('#fri2').css({display: 'none'});
    $('#week-end').css({display: 'none'});
};


$("#btn__mon1").click (function() {
    hideall();
    today = new Date(2020, 7, 3);
    checkday();
}); 
$("#btn__tue1").click (function() {
    hideall();
    today = new Date(2020, 7, 4);
    checkday();
}); 
$("#btn__wed1").click (function() {
    hideall();
    today = new Date(2020, 7, 5);
    checkday();
}); 
$("#btn__thu1").click (function() {
    hideall();
    today = new Date(2020, 7, 6);
    checkday();
}); 
$("#btn__fri1").click (function() {
    hideall();
    today = new Date(2020, 7, 7);
    checkday();
}); 

$("#btn__mon2").click (function() {
    hideall();
    today = new Date(2020, 7, 10);
    checkday();
}); 
$("#btn__tue2").click (function() {
    hideall();
    today = new Date(2020, 7, 11);
    checkday();
}); 
$("#btn__wed2").click (function() {
    hideall();
    today = new Date(2020, 7, 12);
    checkday();
}); 
$("#btn__thu2").click (function() {
    hideall();
    today = new Date(2020, 7, 13);
    checkday();
}); 
$("#btn__fri2").click (function() {
    hideall();
    today = new Date(2020, 7, 14);
    checkday();
}); 
