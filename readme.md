Image Loader
============

Not the prettiest name but this plugin aims to solve the following problems when it comes to loading images via javascript

* Loads a 'desired' image into a container or a 'default' image if it isn't found
* Provides HTML for displaying a 'preload' overlay whilst the image downloads and fades out once image has loaded
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

Styling your image pre-loader
-----------------------------

The image preloader is optional, however if you wish to use it you are provided with the following HTML structure:

    <div class="imgContainer">

        <div class="loadOverlay">
            <div class="loadOverlayContent">
                <div class="loadAnimate"></div>
            </div>
        </div>

    </div>

CSS
---

(obviously modify as suits you, this css is not added by the plugin, it's merely a reference)

    .loadOverlay {
        height: 200px;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

    .loadOverlayContent {
        padding-top: 83px;
    }

    .loadAnimate {
        background-image: url("spinny-loading-gif.gif");
        height: 32px;
        margin: 0 auto;
        width: 32px;
    }