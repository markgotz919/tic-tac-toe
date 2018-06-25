	const player = "X"


	//ONCE per page load only
	document.addEventListener("DOMContentLoaded", function () {
	  //equiv of $(document).ready() in jQuery
	  var boxes = document.querySelectorAll("main button");
	  for (let i = 0; i < boxes.length; i++) {
	    boxes[i].addEventListener("click", playerTurn);
	  }
	  document.querySelector("header button").addEventListener("click", newGame);
        })
        
        function playerTurn(){
                boxes.style.backgroundColor = "yellow"



        }


}
	
