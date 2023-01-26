$(document).ready(function(){

/* Show/Hide */
  $("button[class='showhide']").click(function(){
    $("#answer").toggleClass("hidden");
	$(this).text($(this).text() == 'Show Answer' ? 'Hide Answer' : 'Show Answer');

  //change aria expanded attribute
	$(this).attr('aria-expanded', function (i, attr) {
    	return attr == 'true' ? 'false' : 'true';
  	}); 
  });

  //change aria expanded attribute
  $("a[aria-expanded='false']").click(function(){
	$(this).attr('aria-expanded', function (i, attr) {
    	return attr == 'true' ? 'false' : 'true';
  	}); 
  });


// quiz
  $("button[class='choice']").click(function(){
        var answer = $(this).parent().find("input:checked").val();
		  if (answer == undefined) {
			alert("Make a selection.");
		  } else {
			alert (answer);
		  }
    });
});


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("burger");
  if (x.className === "topnav") {
    x.className += " responsive";
	y.className = "fa fa-times fa-lg"
  } else {
    x.className = "topnav";
	y.className = "fa fa-bars"
  }
}

/* vocab */
function defs(answer) {
  var defs = document.getElementsByClassName("vanswer");
  defs[answer].classList.toggle("hidden");
}

// CHANGE: Keyboard handler for buttons in table. Spacebar should also activate button. Enter is handled via onclick event.
function defs2(answer, ev) {
  var defs = document.getElementsByClassName("vanswer");
  switch(ev.which) {
	case 32: {	// spacebar
		defs[answer].classList.toggle("hidden");
		var myid = defs[answer].getAttribute('id');
		var a = $('#' + myid + '').parent().prev().find('a');
		if (a.attr('aria-expanded') == 'false') {
			a.attr('aria-expanded', 'true');
		}
		else {
			a.attr('aria-expanded', 'false');
		}
		ev.stopPropagation();
		break;
	}
  }
}
