$(document).ready(function() {
	var href = location.href.split('#');

	if (href[1]) {
	    var id = '#' + href[1],
	    	$this = $(id),
	    	top = $this.offset().top;

	    $this.next('.code').first().addClass('highlight');
	    $('body,html').animate({scrollTop: top}, 800);
	}

});