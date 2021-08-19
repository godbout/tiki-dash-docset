/**** start overview of included js files *****/

/* list of files for rank:60late */
/* Array
(
    [0] => lang/en/language.js
    [1] => lib/captcha/captchalib.js
    [2] => lib/jquery_tiki/autoToc.js
    [3] => vendor/npm-asset/lozad/dist/lozad.js
)
 */

/* rank:60late - minify:ok. lang/en/language.js */

/* rank:60late - minify:ok. lib/captcha/captchalib.js */

/* rank:60late - minify:ok. lib/jquery_tiki/autoToc.js */

/* rank:60late - minify:ok. vendor/npm-asset/lozad/dist/lozad.js */

/**** end overview of included js files *****/
;
/* rank:60late - minify:ok. lang/en/language.js */
lang={};
/* rank:60late - minify:ok. lib/captcha/captchalib.js */
function generateCaptcha(){jQuery('#captchaImg').attr('src','img/spinner.gif').show();jQuery('body').css('cursor','progress');jQuery.ajax({url:'antibot.php',dataType:'json',success:function(data){jQuery('#captchaImg').attr('src',data.captchaImgPath);jQuery('#captchaId').attr('value',data.captchaId);jQuery('body').css('cursor','auto')}});$("#antibotcode").focus();return!1};
/* rank:60late - minify:ok. lib/jquery_tiki/autoToc.js */
$.genAutoToc=function(){var $page=$("body"),$top=$("#top"),$row;var $output=$output||"#autotoc";var toc="";var start=0;var toc_offset=parseInt(jqueryTiki.autoToc_offset);var toc_pos=jqueryTiki.autoToc_pos;var toc_mode=jqueryTiki.autoToc_inline;var toc_title="";var toc_levels=!1;if(typeof jqueryAutoToc!=="undefined"){toc_offset=parseInt(jqueryAutoToc.plugin_autoToc_offset);toc_pos=jqueryAutoToc.plugin_autoToc_pos;toc_mode=jqueryAutoToc.plugin_autoToc_mode;toc_title=jqueryAutoToc.plugin_autoToc_title!=='undefined'?"<h3>"+jqueryAutoToc.plugin_autoToc_title+"</h3>":"";if(jqueryAutoToc.plugin_autoToc_levels!=null&&jqueryAutoToc.plugin_autoToc_levels!=='undefined'){toc_levels=!0}}else{$('<style type="text/css">body{position:relative}#autotoc .nav>li>a{display:block;padding:4px 20px;font-size:13px;font-weight:500}#autotoc .nav>li>a:hover,#autotoc .nav>li>a:focus{padding-left:19px;text-decoration:none;background-color:transparent;border-left:1px solid #0075ff}#autotoc .nav-link.active,#autotoc .nav-link.active:hover,#autotoc .nav-link.active:focus{padding-left:30px;font-weight:700;background-color:transparent;border-left:2px solid #0075ff}#autotoc .nav-link+ul{display:none;padding-bottom:10px}#autotoc .nav .nav>li>a{padding-top:1px;padding-bottom:1px;padding-left:30px;font-size:12px;font-weight:400}#autotoc .nav .nav>li>a:hover,#autotoc .nav .nav>li>a:focus{padding-left:29px}#autotoc .nav .nav>li>.active,#autotoc .nav .nav>li>.active:hover,#autotoc .nav .nav>li>.active:focus{padding-left:28px;font-weight:500}#autotoc .nav-link.active+ul{display:block}@media screen and (max-width:991px){.hidden{display:none!important}}</style>').appendTo('head')}
if($top.length&&location.href.indexOf("tiki-print.php")==-1){var container=document.querySelector(container)||document.querySelector('#page-data');var children=container.children;if(countHeadings(children)>0){$row=$("<div class='row'/>");$container=$("<div class='container'/>");if(toc_pos==="left"||toc_pos==="top"){var $tocNav=$("<div id='all-toc' class='col-md-5 hidden'/>");var $page_data=$("#page-data").addClass("col-md-7 clearfix");$('<style type="text/css">#autotoc .nav > li{max-width: 350px;}</style>').appendTo('head')}else if(toc_pos==="right"){var $tocNav=$("<div id='all-toc' class='col-md-4 hidden'/>");var $page_data=$("#page-data").addClass("col-md-8 clearfix")}
var $nav=$("<nav id='autotoc'>");var processedId={};function processId(id){if(id in processedId){processedId[id]+=1;var newId=id+"_"+processedId[id]}else{processedId[id]=0;newId=id}
return newId}
if(toc_pos=='page'){toc=toc_title!=''?"<h3>"+toc_title+"</h3>":""}
for(var i=0;i<children.length;i++){var isHeading=children[i].nodeName.match(/^H\d+$/);if(isHeading){var level=children[i].nodeName.substr(1);var headerText=(children[i].textContent);var id=children[i].getAttribute("id");if(!id){id=processId(aText.replace(/\W/g,"_"))}else{id=id.replace(":","\\:").replace(".","\\.").replace("#","\\#")}
children[i].setAttribute("id",id);var url="#"+id;if(headerText){if(toc_levels){if(jqueryAutoToc.plugin_autoToc_levels.includes(level.toString())){if(level>start){if(toc_pos=='page'){toc+=(new Array(level-start+1)).join("<ul>")}else{toc+=(new Array(level-start+1)).join("<ul class='nav navbar-nav'>")}}else if(level<start){toc+=(new Array(start-level+1)).join('</li></ul>')}else{toc+=(new Array(start+1)).join('</li>')}
start=parseInt(level);if(toc_pos=='page'){toc+="<li><a href='"+url+"'>"+headerText+"</a>"}else{toc+="<li class><a class='nav-link' href='"+url+"'>"+headerText+"</a>"}}}else{if(level>start){if(toc_pos=='page'){toc+=(new Array(level-start+1)).join("<ul>")}else{toc+=(new Array(level-start+1)).join("<ul class='nav navbar-nav'>")}}else if(level<start){toc+=(new Array(start-level+1)).join('</li></ul>')}else{toc+=(new Array(start+1)).join('</li>')}
start=parseInt(level);if(toc_pos=='page'){toc+="<li><a href='"+url+"'>"+headerText+"</a>"}else{toc+="<li class><a class='nav-link' href='"+url+"'>"+headerText+"</a>"}}}}}
if(start){toc+=(new Array(start+1)).join('</ul>')}
if(toc_pos=='page'){$("#page-data").removeClass("col-md-8").addClass("col-md-12");document.querySelector($output).innerHTML+=toc}else{var fixed_height=0;if(!toc_mode){buildContent();$('<style type="text/css">.affix{top:'+toc_offset+'px;}</style>').appendTo('head');$(window).resize(function(){var page=document.getElementById("page-data");if(window.innerWidth<=991){if(page.hasAttribute('class')){page.setAttribute("class","col-md-12")}}else{if(toc_pos==="left"||toc_pos==="top"){page.setAttribute("class","col-md-7")}else{page.setAttribute("class","col-md-8")}}
affix()}).resize();controllSpy(toc_offset);function affix(){$(window).on('scroll',function(e){var scrollpos=$(window).scrollTop();var offsetpos=$('#page-data').height()-$('#autotoc > .nav').height();var top=$('#page-data').offset().top-(toc_offset+fixed_height);var bottom=$('#page-data').offset().top+$('#page-data').height()-$('#autotoc > .nav').height()-(toc_offset+fixed_height);if(scrollpos>top){if(scrollpos>bottom){$('#autotoc > .nav').removeClass('affix').addClass('affix-bottom').css('top',offsetpos+'px')}else{$('#autotoc > .nav').addClass('affix').removeClass('affix-bottom').css('top','')}}else{$('#autotoc > .nav').removeClass('affix')}
$('#autotoc .nav li a').each(function(){if($(this).hasClass('active')){$(this).parents('li').addClass('open')}else{$(this).parentsUntil('.navbar-nav .nav').removeClass('open')}})})}}else{buildContent();$('<style type="text/css">#all-toc{top:'+toc_offset+'px;}</style>').appendTo('head');$('#all-toc').height($('#page-data').height()-2000);controllSpy(toc_offset)}
function controllSpy(toc_offset){var fixed_height=0;$page.scrollspy({target:"#autotoc",offset:(toc_offset+fixed_height)})}
function buildContent(){$nav.prepend(toc);if(toc_pos==="left"||toc_pos==="top"){$("#page-data").removeClass("col-md-8").addClass("col-md-7");$("#all-toc").removeClass("col-md-4").addClass("col-md-5");$tocNav.prepend($nav);$page_data.prependTo($row);$tocNav.prependTo($row)}else{$tocNav.prepend($nav);$tocNav.prependTo($row);$page_data.prependTo($row)}
$row.prependTo($top)}}}}};function countHeadings(children){var count=0;for(var i=0;i<children.length;i++){var isHeading=children[i].nodeName.match(/^H\d+$/);if(isHeading){count++}}
return count}
$(document).ready(function(){$.genAutoToc();$('#autotoc a[href^="#"]').on('click',function(e){e.preventDefault();var target=this.hash;var $target=$(target);$('html, body').stop().animate({'scrollTop':$target.offset().top},900,'swing',function(){})})});
/* rank:60late - minify:ok. vendor/npm-asset/lozad/dist/lozad.js */
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