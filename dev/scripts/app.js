$(document).ready(function () {
	// Something Magic here
	// Resize adjustment
    $(window).resize(function () {
        headerAdjustment();
    });

    headerAdjustment();
});

// Header Adjustment
function headerAdjustment() {
	var headerHeight = $(".theme-header").outerHeight(),
		finalHeight = headerHeight;
	$(".above-the-fold").css("padding-top", "" + finalHeight + "px");
}
