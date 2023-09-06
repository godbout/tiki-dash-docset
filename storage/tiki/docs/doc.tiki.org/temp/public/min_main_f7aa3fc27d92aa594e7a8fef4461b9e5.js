/**** start overview of included js files *****/

/* list of files for rank:60late */
/* Array
(
    [0] => lang/en/language.js
    [1] => lib/captcha/captchalib.js
)
 */

/* rank:60late - minify:disabled - adding raw file. lang/en/language.js */

/* rank:60late - minify:disabled - adding raw file. lib/captcha/captchalib.js */

/**** end overview of included js files *****/
;
/* rank:60late - minify:disabled - adding raw file. lang/en/language.js */
/*
 * JavaScript translation definition
 * Example to help translation of some English strings in some js files
 *
 *
 */

lang = {
//    "Very Secure" : "Very Secure",
//    "Secure" : "Secure",
//    "Very Strong" : "Very Strong",
//    "Strong" : "Strong",
//    "Average" : "Average",
//    "Weak" : "Weak",
//    "Very Weak" : "Very Weak",
//    "Strength" : "Strength",
//    "Valid User Name" : "Valid User Name",
//    "Passwords match" : "Passwords match",
//    "Valid Email" : "Valid Email",
//    "Close" : "Close",
//    "Submit" : "Submit",
//    "Insert" : "Insert",
//    "Replace" : "Replace",
//    "Match" : "Match",
//    "Do not match" : "Do not match",
//    "Advanced options" : "Advanced options",
//    "Pick a file." : "Pick a file."
//    "Add Field" : "Add Field",
//    "Edit Field" : "Edit Field",
//    "Removing the field will result in data loss. Are you sure?" : "Removing the field will result in data loss. Are you sure?",
//    "Save" : "Save",
//    "Cancel" : "Cancel",
//  "Delete" : "Delete",
//    "Unassign module" : "Unassign module",
//    "Edit module" : "Edit module",
//    "Edit module:" : "Edit module:",
//    "Favorite" : "Favorite",
//    "What address are you looking for?" : "What address are you looking for?",
//    "Filter:" : "Filter:",
//    "Please enter a page name" : "Please enter a page name",
//    "Change Highlighter" : "Change Highlighter",
//    "Toggle Highlighter" : "Toggle Highlighter",
//    "Are you sure you want to unassign this module?" : "Are you sure you want to unassign this module?"
    // remember the IE does not support ending comma on last item
};
;
/* rank:60late - minify:disabled - adding raw file. lib/captcha/captchalib.js */
function generateCaptcha() {
    jQuery('#captchaImg').attr('src', 'img/spinner.gif').show();
    jQuery('body').css('cursor', 'progress');
    jQuery.ajax({
        url: 'antibot.php',
        dataType: 'json',
        success: function(data) {
            jQuery('#captchaImg').attr('src', data.captchaImgPath);
            jQuery('#captchaId').attr('value', data.captchaId);
            jQuery('body').css('cursor', 'auto');
        }
    });
    $("#antibotcode").focus();
    return false;
}
