Image Loader
============

Not the prettiest name but this plugin aims to solve the following problems when it comes to loading iamges via javascript

* Loads a 'desired' image into a container or a 'default' image if it isn't found
* provides HTML for displaying a 'preload' overlay whilst the image downloads
* Hides images' ugly state whilst downloading

How To Use
----------

var $imgContainer = $('.imgContainer'),
    desiredImg = 'http://www.desired.img.com/img.png',
    defaultImg = 'http://www.default.img.com/img.jpg';

//pass in two variables to the image loader
//1) desired image
//2) default image

$imgContainer.imgLoader( desiredImg, defaultImg );