/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * @link https://premium.wpmudev.org/blog/back-to-top-button-wordpress/
 */

jQuery(document).ready(function($) {
    var targetClass = $("#main .row .omega");
    var newClass = "lift";

    if ($(".content-inner-pages")[0]) {
        targetClass.addClass(newClass);
    } else {
        targetClass.removeClass(newClass);
    }

});