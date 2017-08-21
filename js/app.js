(function() {
	//Exchange Rates Page module
	var app = angular.module('currencyApp', []);

	//api for symbols and rates
	var api_key = "VWnVzzZ2btJt9AebwTtvHaUhJ7kHSDr8";
	var symbolsURL = "https://forex.1forge.com/1.0.2/symbols?api_key=" + api_key;
	var pairURL = "https://forex.1forge.com/1.0.2/quotes?pairs=";

	//controller for making filtered list
	app.controller('OptionController', function($scope){

		//gets information
		$.getJSON(symbolsURL, function(data) {
			$scope.$apply(function(){
				$scope.listOptions = data;
				$scope.listOptions.sort();
			});
		}).error(function(e) {
			alert("Could not request symbolsURL");
		});
	});

    $(document).ready(function() {
   		// converts list into select2 style list
		$("#convert-list").select2({});
	});

    //main conversion controller
    app.controller('ConversionController', function($scope){
    	//most of this just sets things to corresponding values
    	$scope.fromType = "IN";
    	$scope.toType = "OUT";
    	$scope.amt = "Amount";
    	$scope.fromCurrencyType = "FromCurrencyType";
    	$scope.newCurrencyType = "NewCurrencyType";
    	this.convertFunction = function() {
    		var selType = "" + $(".select2-selection__rendered").html();
    		var fromType = selType.slice(0,3);
    		$scope.fromType = fromType;
    		var toType = selType.slice(3,6);
    		$scope.toType = toType;

    		var amt = $(".convert-amount").val();
    		$scope.amt = amt;
    		$scope.fromCurrencyType = fromType;
    		$scope.newCurrencyType = toType;

    		//does the remaining conversion and changes values
    		var currencyRate;
    		curPairURL = pairURL + selType + "&api_key=" + api_key;
    		$.getJSON(curPairURL, function(data) {
    			$(".cr").html(data[0].price);
    			currencyRate = data[0].price;
    			$(".finalAmt").html((amt * currencyRate) + " - " + toType);
    		}).error(function(e) {
		 		alert("Could not request symbolsURL");
		 	});
    	}
    });
})();