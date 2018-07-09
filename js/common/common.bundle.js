!function r(u,l,a){function s(n,e){if(!l[n]){if(!u[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(c)return c(n,!0);var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}var i=l[n]={exports:{}};u[n][0].call(i.exports,function(e){return s(u[n][1][e]||e)},i,i.exports,r,u,l,a)}return l[n].exports}for(var c="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,n,t){"use strict";var o=function(){function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}}(),i=e("../modules/helpers/util"),r=e("../modules/loader/loader"),u=e("../modules/menu/menu"),l=e("../modules/plugins/plugin-nice-scroll"),a=e("../modules/plugins/plugin-owl-carousel"),s=e("../modules/plugins/plugin-scroll-reveal");window.util=new i.Util,window.loader=new r.Loader,window.loaded=!1;var c=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.Util=window.util,this.menu=new u.Menu,this.pluginNiceScroll=new l.PluginNiceScroll,this.pluginOwlCarousel=new a.PluginOwlCarousel,this.pluginScrollReveal=new s.PluginScrollReveal,this.autoload()}return o(e,[{key:"autoload",value:function(){this.Util.dipatchMessage("Started Common.")}}]),e}();$(window).on("load",function(){window.loaded=!0,window.common=new c})},{"../modules/helpers/util":2,"../modules/loader/loader":3,"../modules/menu/menu":4,"../modules/plugins/plugin-nice-scroll":5,"../modules/plugins/plugin-owl-carousel":6,"../modules/plugins/plugin-scroll-reveal":7}],2:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}}();t.Util=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"dipatchMessage",value:function(e){console.info("[LOG] "+e)}},{key:"dispatchError",value:function(e){console.error("[ERROR] "+e)}},{key:"isEmpty",value:function(e){return""==e||null==e||null==e}},{key:"fetch",value:function(n){function e(e){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(t){return new Promise(function(n,e){fetch(t).then(function(e){return e.json()}).then(function(e){n(e)})})})},{key:"$",value:function(e){if(!this.isEmpty(document.querySelector(e)))return document.querySelector(e)}}]),e}()},{}],3:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}}();t.Loader=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.configs={delay:500,recheck:500,velocity:"slow",element:"#loader"},this.Util=window.util,this.init()}return o(e,[{key:"init",value:function(){if(window.loaded)this.pageLoaded();else{var e=this;setTimeout(function(){e.Util.dipatchMessage("Still Loading..."),e.init()},this.configs.recheck)}}},{key:"pageLoaded",value:function(){this.Util.dipatchMessage("Okay, page is loaded!"),$(this.configs.element).delay(this.configs.delay).fadeOut(this.configs.velocity)}}]),e}()},{}],4:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}}();t.Menu=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.configs={senseSpeed:5,previusScroll:0,imediate:10,openMenu:!1},this.init()}return o(e,[{key:"init",value:function(){this.setDebounce(),this.setHamburguer(),this.setLinks()}},{key:"debounce",value:function(o,i,r){var u=void 0;return function(){var e=this,n=arguments,t=r&&!u;clearTimeout(u),u=setTimeout(function(){u=null,r||o.apply(e,n)},i),t&&o.apply(e,n)}}},{key:"setHamburguer",value:function(){$(".hamburguer").on("click",function(e){e.preventDefault(),$(this).toggleClass("active"),$(".menu-mobile").toggleClass("active"),setTimeout(function(){$(".menu-mobile").toggleClass("end")},500),$(".menu-translate").hasClass("active")&&$(".menu-translate").toggleClass("active")})}},{key:"setDebounce",value:function(){var e=this;$(document).scroll(e.debounce(function(){e.go()},e.configs.imediate))}},{key:"go",value:function(){var e=$(document).scrollTop(),n=1*$(window).height()/6;e-this.configs.senseSpeed>this.configs.previousScroll&&n<e?($("#header-menu").addClass("off"),$("#header-menu").removeClass("on"),$(".menu-mobile").hasClass("active")&&($(".hamburguer").toggleClass("active"),$(".menu-mobile").toggleClass("active"),setTimeout(function(){$(".menu-mobile").toggleClass("end")},500))):e+this.configs.senseSpeed<this.configs.previousScroll&&n<e&&($("#header-menu").addClass("on"),$("#header-menu").removeClass("off")),this.configs.previousScroll=e}},{key:"setLinks",value:function(){$(".go-menu").on("click",function(e){e.preventDefault(),$(".menu-mobile").hasClass("active")&&($(".hamburguer").toggleClass("active"),$(".menu-mobile").toggleClass("active"),setTimeout(function(){$(".menu-mobile").toggleClass("end")},500));var n=$(this),t=30;"#trabalhe-conosco"===n.attr("href")&&(t=0),$("html, body").stop().animate({scrollTop:$(n.attr("href")).offset().top-t},1e3,"easeOutQuart",function(){"#seja-um-franqueado"!==n.attr("href")&&($("#header-menu").addClass("off"),$("#header-menu").removeClass("on"))})})}}]),e}()},{}],5:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}}();t.PluginNiceScroll=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.configs={cursorwidth:"8px",zindex:1e3,scrollspeed:100,mousescrollstep:60,cursoropacitymax:.8,cursorcolor:"#F94615",horizrailenabled:!1,cursorborder:"none",cursorborderradius:"0px"},this.init()}return o(e,[{key:"init",value:function(){$("html").niceScroll(this.configs)}}]),e}()},{}],6:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}}();t.PluginOwlCarousel=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.configs={loop:!0,nav:!1,pagination:!0,items:1,dots:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,singleItem:!0,smartSpeed:700},this.elementsBinds={default:".carousel-default"},this.init()}return o(e,[{key:"init",value:function(){$(""+this.elementsBinds.default).owlCarousel(this.configs),$(""+this.elementsBinds.default).on("mouseout",function(){$(""+this.elementsBinds.default).trigger("stop.owl.autoplay"),$(""+this.elementsBinds.default).trigger("play.owl.autoplay",[3e3])})}}]),e}()},{}],7:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}}();t.PluginScrollReveal=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.configs={".sr-1":{duration:1200,origin:"left",reset:!0,delay:100,scale:.9},".sr-2":{duration:1200,origin:"top",reset:!0,delay:100,scale:.9},".s3-3":{duration:1200,origin:"bottom",reset:!0,delay:800,scale:.9},".sr-4":{duration:1200,origin:"right",reset:!0,delay:100,scale:.9}},this.init()}return o(e,[{key:"init",value:function(){for(var e in window.sr=ScrollReveal(),this.configs)sr.reveal(e,this.configs[e])}}]),e}()},{}]},{},[1]);