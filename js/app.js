(function() {
	var app = angular.module('currencyApp', []);

	var api_key = "VWnVzzZ2btJt9AebwTtvHaUhJ7kHSDr8";
	var url = "https://forex.1forge.com/1.0.2/symbols?api_key=" + api_key;

	app.controller('OptionController', function($scope){

		// $.getJSON(url, function(data) {
		// 	$scope.$apply(function(){
		// 		$scope.listOptions = data;
		// 		$scope.listOptions.sort();
		// 	});
		// }).error(function(e) {
		// 	alert("Could not request url");
		// });
		// console.log(self.listOptions);
		$scope.listOptions = ["USDEUR", "2", "3"];
	});

    $(document).ready(function() {
   		// converts list into select2 style list
		$("#convert-list").select2({});
	});

    app.controller('ConversionController', function(){
    	this.convertFunction = function() {
    		var amt = $(".convert-amount").val();
    		var selType = "" + $(".select2-selection__rendered").html();
    		var fromType = selType.slice(0,3);
    		var toType = selType.slice(3,6);

    		$(".col-md-6 h2").html("Currency Conversion: " + fromType + " &#8594 " + toType);
    		console.log($(".col-md-6 h2").html());
    	}
    });
})();