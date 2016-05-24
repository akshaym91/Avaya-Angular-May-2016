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
    .run(function($rootScope) {
        window.rootScope = $rootScope;
        //console.log(arguments);
        $rootScope.calculator = new Calculator();
    });
