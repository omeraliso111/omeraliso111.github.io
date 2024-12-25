var searchParams = new URLSearchParams(window.location.search)
if (searchParams.has('q')){
	var q = searchParams.get('q');
	
	document.getElementById("searchInput").value = q;
	cards = document.getElementsByClassName("card-cell");
	Array.from(cards).forEach((card) => {
		if(card.innerHTML.toLowerCase().search(q.toLowerCase()) == -1){
			card.remove();
		}
		else{
			card.style.opacity = 1;
		}
	});
}