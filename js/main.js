(function($) {

	"use strict";	

  


})(jQuery);






$(window).load(function () {
	//$("#test").remove();
	
	var searchParams = new URLSearchParams(window.location.search)
	if (searchParams.has('q')){
		var q = searchParams.get('q');
		$("#search-input").val(q);
		$(".post-masonry").each(function(){
			if($(this).text().toLowerCase().search(q.toLowerCase()) == -1){
				$(this).remove();
			}
		});
	}
	

    blogisotope = function () {
        var e, t = $(".blog-masonry").width(),
            n = Math.floor(t);
        if ($(".blog-masonry").hasClass("masonry-true") === true) {
            n = Math.floor(t * .3033);
            e = Math.floor(t * .04);
            if ($(window).width() < 1023) {
                if ($(window).width() < 768) {
                    n = Math.floor(t * 1)
                } else {
                    n = Math.floor(t * .48)
                }
            } else {
                n = Math.floor(t * .3033)
            }
        }
        return e
    };
    var r = $(".blog-masonry");
    bloggingisotope = function () {
        r.isotope({
            itemSelector: ".post-masonry",
            animationEngine: "jquery",
            masonry: {
                gutterWidth: blogisotope()
            }
        })
    };
    bloggingisotope();
    $(window).smartresize(bloggingisotope)
	
	function submit_search(){
		window.location.href  = "file:///C:/Users/admin/Desktop/desktop/projects/gallery/index.html?q=" + $("#search-input").val()
	}
	
	$("#search-button").click(function(){
		submit_search();
	});
	$('#search-input').keypress(function(e) {
        if(e.which == 13) {
            submit_search();
        }
    });

})