/**** start overview of included js files *****/

/* list of files for rank:60late */
/* Array
(
    [0] => lang/en/language.js
    [1] => lib/captcha/captchalib.js
)
 */

/* rank:60late - minify:ok. lang/en/language.js */

/* rank:60late - minify:ok. lib/captcha/captchalib.js */

/**** end overview of included js files *****/
;
/* rank:60late - minify:ok. lang/en/language.js */
lang={};
/* rank:60late - minify:ok. lib/captcha/captchalib.js */
function generateCaptcha(){jQuery('#captchaImg').attr('src','img/spinner.gif').show();jQuery('body').css('cursor','progress');jQuery.ajax({url:'antibot.php',dataType:'json',success:function(data){jQuery('#captchaImg').attr('src',data.captchaImgPath);jQuery('#captchaId').attr('value',data.captchaId);jQuery('body').css('cursor','auto')}});$("#antibotcode").focus();return!1}