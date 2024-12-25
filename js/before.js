var searchParams = new URLSearchParams(window.location.search)
var q = searchParams.get('q');
console.log(q);
document.getElementById("searchInput").value = q;
cards = document.getElementsByClassName("card-cell");

Array.from(cards).forEach((card) => {
	
	if(q == undefined || q == ""){	
		card.style.opacity = 1;
		
	}else{
		if(card.innerHTML.toLowerCase().search(q.toLowerCase()) == -1){
			card.remove();
		}
		else{
			card.style.opacity = 1;
		}
	}
});
