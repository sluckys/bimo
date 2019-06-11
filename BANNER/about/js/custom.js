$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '11352287416',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '11352287416.1677ed0.f08baa2dd00b4a508ad68bebeaaa81fb',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});