(function() {
	var app = angular.module('currencyApp', []);

	var api_key = "VWnVzzZ2btJt9AebwTtvHaUhJ7kHSDr8";
	var url = "https://forex.1forge.com/1.0.2/symbols?api_key=" + api_key;

	app.controller('OptionController', function($scope){
		alert("ran");
		// $.getJSON(url, function(data) {
		// 	$scope.$apply(function(){
		// 		$scope.listOptions = data;
		// 		$scope.listOptions.sort();
		// 	});
		// }).error(function(e) {
		// 	alert("Could not request url");
		// });
		// console.log(self.listOptions);
		// $scope.listOptions = ["1", "2", "3"];
	});

   $(document).ready(function() {
   		// converts list into select2 style list
		$("#convert-list").select2({});
	});

})();