/* * PURE - Sublime Coming Soon Template
*
* This is a premium product available exclusively at this address http://themeforest.net/user/madeon08/portfolio
*
* The demo files are minified/crypted for copyright reasons, you will find them, expanded, commented and coded accurately in your download pack.
*
* Thanks for your support!
*
* */
$(window).load(function(){"use strict";setTimeout(function(){$("#loading").addClass("vanish"),$(".open-anim").each(function(t){!function(e){setTimeout(function(){$(e).removeClass("opacity-0").addClass("animated-middle fadeInUp")},150*t+150)}(this)})},1e3),setTimeout(function(){$("#loading").remove(),$("#open-newsletter").removeClass("opacity-0").addClass("animated-middle jello")},1400)}),$(document).ready(function(){"use strict";function t(){$(window).width()<1025?($("#multi-div").multiscroll.destroy(),$("a#button-more , a#indicator-scroll").on("click",function(){event.preventDefault();var t="#"+this.getAttribute("data-target");return $("html, body, #multi-div").animate({scrollTop:$(t).offset().top},500),!1})):$("#multi-div").multiscroll.build()}$("#open-newsletter , .close-newsletter").on("click",function(){return $(".ms-section , #info").toggleClass("newsletter-opened"),!1}),$(document).click(function(t){"info"===t.target.id||$("#info").find(t.target).length||$(".ms-section , #info").removeClass("newsletter-opened")}),$("#notifyMe").notifyMe(),$("#multi-div").multiscroll({loopTop:!0,loopBottom:!0,navigation:!0,navigationTooltips:["Home","About","Services","Portfolio","Contact"]}),t(),$(window).resize(function(){t()}),$(".gallery-link").each(function(){$(this).append('<div class="photo"></div>').children(".photo").css({"background-image":"url("+$(this).attr("data-image")+")"})})});