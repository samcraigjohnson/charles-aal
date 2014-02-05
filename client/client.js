Handlebars.registerHelper('info-box', function(name){
	var html = "<div class='col-sm-4'><div class='info-box'><h3>"+name+"</h3></div></div>";

	return new Handlebars.SafeString(html);
});



$(document).ready(function() {
	$('body').scrollspy({target: '.navbar'});
	//$("#fixed-home").pin();

	$(".nav-words").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(this.hash).offset().top
	     }, 500, function(){
	       window.location.hash = hash;
	     });

	});
});
