//Model
function Calculator() {
    this.inputOne = 0;
    this.inputTwo = 0;
    this.result = 0;
}

Calculator.prototype.add = function() {
    this.result = this.inputOne + this.inputTwo;
};

Calculator.prototype.subtract = function() {
    this.result = this.inputOne - this.inputTwo;
};

Calculator.prototype.multiply = function() {
    this.result = this.inputOne * this.inputTwo;
};

Calculator.prototype.divide = function() {
    if (this.inputTwo !== 0) {
        this.result = this.inputOne / this.inputTwo;
    } else {
        this.result = 'Division by 0 is not allowed.';
    }
};

//View
angular
    .module('calculator', [])
    .controller('calcController1', function($scope) {
        $scope.calculator = new Calculator();
    })
    .controller('calcController2', function($scope) {
        $scope.advancedCalculator = new Calculator();
        $scope.operator = '';
        $scope.calculate = function() {
            if ($scope.operator == 'add') {
                $scope.advancedCalculator.add()
            } else if ($scope.operator == 'subtract') {
                $scope.advancedCalculator.subtract()
            } else if ($scope.operator == 'multiply') {
                $scope.advancedCalculator.multiply()
            } else if ($scope.operator == 'divide') {
                $scope.advancedCalculator.divide()
            }
        }

    });
