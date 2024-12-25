
$(window).on('load', function () {
	function submit_search(){
		window.location.href  = window.location.href.split(".html")[0] + ".html?q=" + $("#searchInput").val();
	}
	
	$("#searchButton").click(function(){
		submit_search();
	});
	$('#searchInput').keypress(function(e) {
        if(e.which == 13) {
            submit_search();
        }
    });
	$('.card').click(function(){
		//var img_src = $(this).find("img").eq(0).attr("src");
		//img_src = img_src.replace("_small", "");
		//window.open(img_src, "_blank");
		console.log("here");
		$('#paintingModal').find(".modal-title").eq(0).text($(this).find(".card-title").eq(0).text());
		$('#paintingModal').find(".modal-text").eq(0).text($(this).find(".painting-description").eq(0).text());
		$('#paintingModal').find("img").eq(0).attr("src", $(this).find("img").attr("src"));
		$('#paintingModal').modal('show');
	});
});