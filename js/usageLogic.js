// Intialiase

var dataSet = usageDataMm01;
var dataSetID = '#mm-data-01 ';
var counter = 0;

// Set base markup for usage row
var markupDate = "<div class='usageDate-wrapper'><div class='date-no'></div><div class='date-wkday'></div></div>";
var markupUsageBar = "<div class='usageBar-wrapper'><div class='usage-bar'></div><div class='usage-dash'></div></div>";
var markupUsageData = "<div class='usageDetails-wrapper'><div class='usageDetails-text'><div class='usage-val-primary'></div><div class='usage-val-secondary'></div></div><div class='usage-val-more'></div></div>";


// Insert usage markup
function writeUsageMarkup () {
	$.each( dataSet.MnDate, function( i, val ) {
		$( dataSetID + "#mm-item-" + i ).html(markupDate + markupUsageBar + markupUsageData);
	});
}


// Set usage values
function setValues () {
	$( dataSetID + ".mm-header" ).html(dataSet.Month);
	$.each( dataSet.MnDate, function( i, val ) {
		$( dataSetID + "#mm-item-" + i + " .date-no" ).html( dataSet.MnDate[i]);
	});
	$.each( dataSet.MnDate, function( i, val ) {
		$( dataSetID + "#mm-item-" + i + " .date-wkday" ).html( dataSet.MnWkDay[i]);
	});
	$.each( dataSet.MnUsagePer, function( i, val ) {
		barWidth = dataSet.MnUsagePer[i];
		dashWidth = 100 - dataSet.MnUsagePer[i];
		$( dataSetID + "#mm-item-" + i + " .usage-bar" ).css({"width": barWidth + "%"});
		$( dataSetID + "#mm-item-" + i + " .usage-dash" ).css({"width": dashWidth + "%"});
	});
	$.each( dataSet.MnUsageD, function( i, val ) {
		dollarVal = dataSet.MnUsageD[i].toFixed(2);
		$( dataSetID + "#mm-item-" + i + " .usage-val-primary" ).html("$" + dollarVal);
	});
	$.each( dataSet.MnUsageKwh, function( i, val ) {
		kwhVal = dataSet.MnUsageKwh[i].toFixed(2);
		$( dataSetID + "#mm-item-" + i + " .usage-val-secondary" ).html(kwhVal + " kWh");
	});
}


writeUsageMarkup();
setValues();

// Set usage values for month 2
var dataSet = usageDataMm02;
var dataSetID = '#mm-data-02 ';
writeUsageMarkup();
setValues();





// Set usage values for days
var dataSet = usageDataFeb20;
var dataSetID = '#dy-data-01 ';


// Set markup for day
var markupDate = "<div class='usageDate-wrapper'><div class='day-time'></div></div>";
function writeUsageMarkupDy () {
	$.each( dataSet.DyHourId, function( i, val ) {
		$( dataSetID + "#mm-item-" + i ).html(markupDate + markupUsageBar + markupUsageData);
	});
}



function setValuesDy () {
	console.log(dataSet.DyWkDay);
	$( dataSetID + ".mm-header" ).html(dataSet.DyWkDay + " " + dataSet.DyDate + " " + dataSet.DyMonth);
	
	$.each( dataSet.DyHourId, function( i, val ) {
		$( dataSetID + "#mm-item-" + i + " .date-time" ).html("yes");
		console.log(dataSet.DyTime[i]);
	});
	
}

writeUsageMarkupDy();
setValuesDy();


// Show usage details at centre of screen
$(function(){
    $(window).scroll(function(){    	
		var scrollTop = $(document).scrollTop() + ($(window).height() / 2);
		var positions = [];

		$('.mm-item').each(function(){
			$(this).removeClass("active");
            positions.push({position:$(this).position().top, element: $(this)});
        });
        
        var getClosest = closest(positions,scrollTop);
        console.log(getClosest);
        getClosest.addClass("active");
		
		});
    
		function closest(array, number) {
        var num = 0;
        for (var i = array.length - 1; i >= 0; i--) {
            if(Math.abs(number - array[i].position) < Math.abs(number - array[num].position)){
                num = i;
            }
        }
		return array[num].element;
    }
    
});

// Show usage details at centre of screen
$(".mm-item").click(function() {
	$(".month-usage")
		.animate({ opacity: 0, width: "70%",left: "-=150px", }, 800 )
  		.queue(function() {
	  		$(this).hide();
  		})
  		;

});
  
	

	
    
	

