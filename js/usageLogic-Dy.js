// dy-data
//$(".day-usage").css({"display": "none"});
$(".day-usage").hide();

// Intialiase

var dataSet = usageDataFeb20;
var dataSetID = '#dy-data-01 ';
var counter = 0;
var kwhPrice = 0.5;

// Set base markup for usage row
var markupDate = "<div class='usageDate-wrapper'><div class='date-time'></div></div>";
var markupUsageBar = "<div class='usageBar-wrapper'><div class='usage-bar'></div><div class='usage-dash'></div></div>";
var markupUsageData = "<div class='usageDetails-wrapper'><div class='usageDetails-text'><div class='usage-val-primary'></div><div class='usage-val-secondary'></div></div><div class='usage-val-more'></div></div>";


// Insert usage markup
function writeUsageMarkup () {
	$.each( dataSet.DyTime, function( i, val ) {
		$( dataSetID + "#mm-item-" + i ).html(markupDate + markupUsageBar + markupUsageData);
	});
}


// Set usage values
function setValues () {
//	console.log(dataSet.DyWkDay);
	$( dataSetID + ".mm-header" ).html(dataSet.DyWkDay + " " + dataSet.DyDate + " " + dataSet.DyMonth);
	
	$.each( dataSet.DyTime, function( i, val ) {
		targetID = dataSetID + "#mm-item-" + i + " .date-time";
		//console.log("I want to target - " + target);
		$(targetID).html(dataSet.DyTime[i]);
	});
	
	$.each( dataSet.DyUsageKwh, function( i, val ) {
		
		// bar
		kwhHigh = dataSet.kwhHigh;
		barWidth = dataSet.DyUsageKwh[i] / kwhHigh * 100 ;
		dashWidth = 100 - barWidth;
		targetID = dataSetID + "#mm-item-" + i + " .usage-bar";
		$(targetID).css({"width": barWidth + "%"});
		
		// dash
		targetID = dataSetID + "#mm-item-" + i + " .usage-dash";
		$(targetID).css({"width": dashWidth + "%"});
		
		// calc and display dolar value
		dollarValCalc = dataSet.DyUsageKwh[i] * 0.25;
		dollarVal = dollarValCalc.toFixed(2);
		targetID = dataSetID + "#mm-item-" + i + " .usage-val-primary";
		$(targetID).html("$" + dollarVal);
		
		// Display kwh value
		kwhVal = dataSet.DyUsageKwh[i].toFixed(2);
		targetID = dataSetID + "#mm-item-" + i + " .usage-val-secondary";
		$(targetID).html(kwhVal + " kWh");
	});

	
}


	var dataSet = usageDataFeb20;
	var dataSetID = '#dy-data-01 ';
	writeUsageMarkup();
	setValues();

	var dataSet = usageDataFeb19;
	var dataSetID = '#dy-data-02 ';
	writeUsageMarkup();
	setValues();

	var dataSet = usageDataFeb18;
	var dataSetID = '#dy-data-03 ';
	writeUsageMarkup();
	setValues();

	var dataSet = usageDataFeb17;
	var dataSetID = '#dy-data-04 ';
	writeUsageMarkup();
	setValues();

	var dataSet = usageDataFeb16;
	var dataSetID = '#dy-data-05 ';
	writeUsageMarkup();
	setValues();
    
	var dataSet = usageDataFeb15;
	var dataSetID = '#dy-data-06 ';
	writeUsageMarkup();
	setValues()





// Show usage details at centre of screen
$(".month-usage .mm-item").click(function() {
	
	//$(".month-usage").addClass( "load-out" );
	//$(".day-usage").addClass( "load-in" );
	$(".day-usage").fadeIn();
	$(".month-usage").fadeOut();

 });


$(".day-usage .mm-item").click(function() {
	
	$(".day-usage").fadeOut();
	$(".month-usage").fadeIn();

});


// Day to hour scroll
$(".month-usage #mm-item-8").click(function() {
	$('html, body').animate({scrollTop: ($('#dy-data-01').offset().top)},0);
}); 
$(".month-usage #mm-item-9").click(function() {
	$('html, body').animate({scrollTop: ($('#dy-data-02').offset().top)},0);
});
$(".month-usage #mm-item-10").click(function() {
	$('html, body').animate({scrollTop: ($('#dy-data-03').offset().top)},0);
});
$(".month-usage #mm-item-11").click(function() {
	$('html, body').animate({scrollTop: ($('#dy-data-04').offset().top)},0);
});
$(".month-usage #mm-item-12").click(function() {
	$('html, body').animate({scrollTop: ($('#dy-data-05').offset().top)},0);
});
$(".month-usage #mm-item-13").click(function() {
	$('html, body').animate({scrollTop: ($('#dy-data-06').offset().top)},0);
});


// Hour to day scroll
$(".day-usage .mm-item").click(function() {
	$('html, body').animate({scrollTop: ($('#mm-data-01').offset().top)},0);
})
