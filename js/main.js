var app = angular.module('minmax', [
  'jcs-autoValidate'
]);

app.run(function (defaultErrorMessageResolver) {
        // passing a culture into getErrorMessages('fr-fr') will get the culture specific messages
        // otherwise the current default culture is returned.
        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
          errorMessages['tooYoung'] = 'You must be at least{0} years old!';
          errorMessages['badUsername'] = 'Username can only contain numbers, letters and _';
        });
    }
);

app.controller('MinMaxCtrl', function($scope){
  $scope.formModel = {};

  $scope.onSubmit = function(){
      console.log("Data has been Submitted...");
      console.log($scope.formModel);
  };
});
