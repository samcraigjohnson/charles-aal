Handlebars.registerHelper('info-box', function(name){
	var html = "<div class='col-sm-4'><div class='info-box'><h3>"+name+"</h3></div></div>";

	return new Handlebars.SafeString(html);
});



$(document).ready(function() {
	$('body').scrollspy({target: '#cdj-nav-collapse'});
	//$("#fixed-home").pin();
});