/**** start overview of included js files *****/

/* list of files for rank:60late */
/* Array
(
    [0] => lang/en/language.js
    [1] => lib/captcha/captchalib.js
    [2] => temp/public/min_main_cdb60ae53326e9d293a6c267cfcd5f9c.js
)
 */

/* rank:60late - minify:ok. lang/en/language.js */

/* rank:60late - minify:ok. lib/captcha/captchalib.js */

/* rank:60late - minify:ok. temp/public/min_main_cdb60ae53326e9d293a6c267cfcd5f9c.js */

/**** end overview of included js files *****/
;
/* rank:60late - minify:ok. lang/en/language.js */
lang={};
/* rank:60late - minify:ok. lib/captcha/captchalib.js */
function generateCaptcha(){jQuery('#captchaImg').attr('src','img/spinner.gif').show();jQuery('body').css('cursor','progress');jQuery.ajax({url:'antibot.php',dataType:'json',success:function(data){jQuery('#captchaImg').attr('src',data.captchaImgPath);jQuery('#captchaId').attr('value',data.captchaId);jQuery('body').css('cursor','auto')}});$("#antibotcode").focus();return!1};
/* rank:60late - minify:ok. temp/public/min_main_cdb60ae53326e9d293a6c267cfcd5f9c.js */
lang={};function generateCaptcha(){jQuery('#captchaImg').attr('src','img/spinner.gif').show();jQuery('body').css('cursor','progress');jQuery.ajax({url:'antibot.php',dataType:'json',success:function(data){jQuery('#captchaImg').attr('src',data.captchaImgPath);jQuery('#captchaId').attr('value',data.captchaId);jQuery('body').css('cursor','auto')}});$("#antibotcode").focus();return!1};
/*! lozad.js - v1.7.0 - 2018-11-08
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2018 Apoorv Saxena; Licensed MIT */
(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):(global.lozad=factory())}(this,(function(){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};var isIE=typeof document!=='undefined'&&document.documentMode;var defaultConfig={rootMargin:'0px',threshold:0,load:function load(element){if(element.nodeName.toLowerCase()==='picture'){var img=document.createElement('img');if(isIE&&element.getAttribute('data-iesrc')){img.src=element.getAttribute('data-iesrc')}
if(element.getAttribute('data-alt')){img.alt=element.getAttribute('data-alt')}
element.appendChild(img)}
if(element.getAttribute('data-src')){element.src=element.getAttribute('data-src')}
if(element.getAttribute('data-srcset')){element.setAttribute('srcset',element.getAttribute('data-srcset'))}
if(element.getAttribute('data-background-image')){element.style.backgroundImage='url(\''+element.getAttribute('data-background-image')+'\')'}
if(element.getAttribute('data-toggle-class')){element.classList.toggle(element.getAttribute('data-toggle-class'))}},loaded:function loaded(){}};function markAsLoaded(element){element.setAttribute('data-loaded',!0)}
var isLoaded=function isLoaded(element){return element.getAttribute('data-loaded')==='true'};var onIntersection=function onIntersection(load,loaded){return function(entries,observer){entries.forEach(function(entry){if(entry.intersectionRatio>0||entry.isIntersecting){observer.unobserve(entry.target);if(!isLoaded(entry.target)){load(entry.target);markAsLoaded(entry.target);loaded(entry.target)}}})}};var getElements=function getElements(selector){var root=arguments.length>1&&arguments[1]!==undefined?arguments[1]:document;if(selector instanceof Element){return[selector]}
if(selector instanceof NodeList){return selector}
return root.querySelectorAll(selector)};function lozad(){var selector=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'.lozad';var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var _defaultConfig$option=_extends({},defaultConfig,options),root=_defaultConfig$option.root,rootMargin=_defaultConfig$option.rootMargin,threshold=_defaultConfig$option.threshold,load=_defaultConfig$option.load,loaded=_defaultConfig$option.loaded;var observer=void 0;if(window.IntersectionObserver){observer=new IntersectionObserver(onIntersection(load,loaded),{root:root,rootMargin:rootMargin,threshold:threshold})}
return{observe:function observe(){var elements=getElements(selector,root);for(var i=0;i<elements.length;i++){if(isLoaded(elements[i])){continue}
if(observer){observer.observe(elements[i]);continue}
load(elements[i]);markAsLoaded(elements[i]);loaded(elements[i])}},triggerLoad:function triggerLoad(element){if(isLoaded(element)){return}
load(element);markAsLoaded(element);loaded(element)},observer:observer}}
return lozad})))