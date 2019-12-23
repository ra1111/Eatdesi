import React, { Component } from 'react';
import $ from "jquery"
import ReactGA from 'react-ga';
import Content from './Content'
import Menu from './Menu'
import './loader.js'
class App extends Component {
  componentDidMount()
{
  
    ReactGA.initialize('UA-154846912-1');
    ReactGA.pageview('/');

  var countDownDate = new Date("Feb 5, 2020 00:00:00").getTime();
        
        // Update the count down every 1 second
        var x = setInterval(function() {
        
          // Get today's date and time
          var now = new Date().getTime();
        
          // Find the distance between now and the count down date
          var distance = countDownDate - now;
        
          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        try{
          // Display the result in the element with id="demo"
          document.getElementById("next-box-countdown").innerHTML = days + "D " + hours + "H "
          + seconds + "S";
        
          // If the count down is finished, write some text
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("next-box-countdown").innerHTML = "EXPIRED";
          }
        }
        catch(e)
        {
          //console.log(e)
        }
        }, 1000);
  
    /* PRELOADER *******************************************************************************************************************************/
    setTimeout(function(){
      $('body').addClass('loaded');
    }, 3000);
	

 

    /* DETECT WHEN BOOTSTRAP CARD IS OPEN *******************************************************************************************************************************/
    $('.collapse').on('shown.bs.collapse', function () {
      $(this).prev().addClass('active-acc');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
      $(this).prev().removeClass('active-acc');
    });


 
    

    /* SMOOTH SCROLLING FOR SCROLLSPY *******************************************************************************************************************************/
    $("a").on('click', function(event) {
      $( "li.active" ).removeClass( "active" );
      $(this).parent().addClass('active');

   
     
      
    });

    /* IMAGE IN FRONT OF VIDEO ******************************************************************************************************************************/

    $('#player').on('click', '.videoWrapper', function() {

      let imageTrigger = $(this).find('div').last()
      imageTrigger.removeClass("hidden");

      let hiddenClassId=imageTrigger.attr('id');
      if(hiddenClassId==='video1')
      {
        autoPlayVideo(hiddenClassId, '95slHApFBSA','560','315'); //video code for the left video
      }
      else
      {
        autoPlayVideo(hiddenClassId, 'EnPzb4BXcZ4','560','315'); ////video code for the right video
      }
    });

    function autoPlayVideo(divVideoId, vcode, width, height){
     
      $('#' + divVideoId).html('<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
    }

    /* SHRINK NAVBAR ON SCROLL *******************************************************************************************************************************/
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
          $('nav').addClass('shrink');
        } else {
          $('nav').removeClass('shrink');
        }
      });

  /* JQUERY COUNTDOWN *******************************************************************************************************************************/





/* BACK TO TOP *******************************************************************************************************************************/
(function(){
  // Back to Top - by CodyHouse.co
  var backTop = document.getElementsByClassName('js-cd-top')[0],
  // browser window scroll (in pixels) after which the "back to top" link is shown
  offset = 300,
  //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  offsetOpacity = 1200,
  scrollDuration = 700
 let scrolling = false;
if( backTop ) {
  //update back to top visibility on scrolling
  window.addEventListener("scroll", function(event) {
    if( !scrolling ) {
      scrolling = true;
      (!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
    }
  });
  //smooth scroll to top
  backTop.addEventListener('click', function(event) {
    event.preventDefault();
    (!window.requestAnimationFrame) ? window.scrollTo(0, 0) : scrollTop(scrollDuration);
  });
}

function checkBackToTop() {
  var windowTop = window.scrollY || document.documentElement.scrollTop;
  ( windowTop > offset ) ? addClass(backTop, 'cd-top--show') : removeClass(backTop, 'cd-top--show', 'cd-top--fade-out');
  ( windowTop > offsetOpacity ) && addClass(backTop, 'cd-top--fade-out');
  scrolling = false;
}

function scrollTop(duration) {
    var start = window.scrollY || document.documentElement.scrollTop,
        currentTime = null;
        
    var animateScroll = function(timestamp){
      if (!currentTime) currentTime = timestamp;        
        var progress = timestamp - currentTime;
        var val = Math.max(Math.easeInOutQuad(progress, start, -start, duration), 0);
        window.scrollTo(0, val);
        if(progress < duration) {
            window.requestAnimationFrame(animateScroll);
        }
    };

    window.requestAnimationFrame(animateScroll);
}

Math.easeInOutQuad = function (t, b, c, d) {
   t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

//class manipulations - needed if classList is not supported
function hasClass(el, className) {
    if (el.classList) return el.classList.contains(className);
    else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}
function addClass(el, className) {
  var classList = className.split(' ');
   if (el.classList) el.classList.add(classList[0]);
   else if (!hasClass(el, classList[0])) el.className += " " + classList[0];
   if (classList.length > 1) addClass(el, classList.slice(1).join(' '));
}
function removeClass(el, className) {
  var classList = className.split(' ');
    if (el.classList) el.classList.remove(classList[0]);	
    else if(hasClass(el, classList[0])) {
      var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
      el.className=el.className.replace(reg, ' ');
    }
    if (classList.length > 1) removeClass(el, classList.slice(1).join(' '));
}
})




/* THE COUNTER FROM THE ABOUT US PAGE *******************************************************************************************************************************/

// eslint-disable-next-line no-unexpected-multiline
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}

,function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});




}
  render() {
    return (
      <div className="App">
      <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    {/* Bootstrap CSS */}
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
    {/* bxslider */}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css" />
    {/* google fonts */}
    <link href="https://fonts.googleapis.com/css?family=Dosis:200,500,700%7CRoboto:300,300i,400,400i,500,700,900" rel="stylesheet" />
    {/* fontawesome */}
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous" />
    {/* style.css */}
    <link rel="stylesheet" href="css/style.css" />
    {/* ANIMATE ON SCROLL*/}
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <title>Authentic Indian snacks &amp; candy|EatDesi</title>
    {/*[if lt IE 8]>
  <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]*/}
    {/* PRELOADER 
    <div id="loader-wrapper">
      <div id="loader" />
      <div className="loader-section section-left" />
      <div className="loader-section section-right" />
    </div>
    */}
    {/* HEADER with nav and slider */}
       <Menu/>
        <Content />
      </div>
    );
  }
}
 
export default App