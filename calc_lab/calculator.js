const Calculator = function(){
    this.add = function(number1, number2){
        return number1 + number2;
    }
    this.subtract = function(number1, number2){
        return number1 - number2;
    }
    this.multiply = function(number1, number2){
        return number1 * number2;
    }
    this.divide = function(number1, number2){
        return number1/number2;
    }
    this.modulus = function(number) {
        return Math.abs(number);
    }
    this.even = function(){

    }
    this.odd = function(){

    }
}

// this.multiply = null;
// this.divide = null;
// this.even = null;
// this.ode= null;
// this.subtract = null;

module.exports = {Calculator};