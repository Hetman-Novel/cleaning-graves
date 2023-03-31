if (window.innerWidth > 662) {
	var numToShow = 10; //сколько показывать элементов
}
if (window.innerWidth < 661) {
	var numToShow = 5; //сколько показывать элементов
}
$(document).ready(function () {
	var list = $(".cemeteries__items .cemeteries__item");
	//var numToShow = 6; //сколько показывать элементов
	var button = $("#btn-load-more-cemeteries");
	var numInList = list.length;
	list.hide();
	if (numInList > numToShow) {
		button.show();
	}
	list.slice(0, numToShow).show();
	button.click(function () {
		var showing = list.filter(':visible').length;
		list.slice(showing - 1, showing + numToShow).addClass('show').fadeIn();
		var nowShowing = list.filter(':visible').length;
		if (nowShowing >= numInList) {
			button.hide();
		}
	});
});