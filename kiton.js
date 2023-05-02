//My Framework(module) kiton js It contains many functions and classes for web development
//Mostly Math class with loads of math functions to use in your web project
const PI = 3.14159;
class MathFormulaFunction{//Maths class 
    static add(x, y){//return a value when adding x and y
        return Number(x) + Number(y);
    }
    static minus(x, y){//return a value when substracting x and y
        return Number(x) - Number(y);
    }
    static div(x, y){//return a value when dividing x and y
        return Number(x) / Number(y);
    }
    static multiplication(x, y){//return a value when multiplying x and y
        return Number(x) * Number(y);
    }
    static rememderOfDiv(x, y){//return a value when modulos x and y to get the rememder of a division
        return Number(x) % Number(y);
    }
    static percentage(x, y){//return a value when dividing x and y and multiplying it by 100
        return Number(x) / Number(y) * 100;
    }
    static toCelsius(temp){//Convert to celsius
        temp = Number(temp);
        return (temp - 32) * (5/9);
    }
    static toFahrenheit(temp){//Convert to fahrenheit
        temp = Number(temp);
        return temp * 9 / 5 + 32;
    }
    static raiseTo2(x){//Mutiply a number twice by itself e.g x * x
        x = Number(x);
        return x * x;
    }
    static cube(x){//Mutiply a number three times by itself e.g x * x * x
        x = Number(x);
        return x * x * x;
    }
    static getCircumference(radius){//getCircumference circle
        return 2 * PI * Number(radius);
    }
    static getArea(radius){//to getArea of a circle
        return PI * Number(radius) * Number(radius);
    }
    static highestValueNumber(x, y){//To get the highest value between 2 numbers
        x = Number(x);
        y = Number(y);
        if(x > y){
            return x;
        }
        else if(y > x){
            return y;
        }
        else{
            return;
        }
    }
    static lowestValueNumber(x, y){//To get the lowest value between 2 numbers
        x = Number(x);
        y = Number(y);
        if(x < y){
            return x;
        }
        else if(y < x){
            return y;
        }
        else{
            return;
        }
    }
}

class Arrays{//Arrays class
    static printElementOfArrayFS(array){//To print elements in an array from the beginning using for loop
        for(let i = 0; i < array.length; i+=1){
            console.log(array[i]);
        }
    }
    static printElementOfArrayFE(array){//To print elements in an array from the end using for loop
        for(let i = array.length - 1; i >= 0; i-=1){
            console.log(array[i]);
        }
    }
    static print2DArray(array){//print 2D array
        for(let i of array){
            for(let j of i){
                console.log(j);
            }
        }    
    }
    static reduceArrayToASingleElement(array){//reduce an array to a single element. REMEMBER a single array must be pass not 2D
        function check(total, element){
        return total + element;//Add up the element together
        }
        return array.reduce(check);
    }
    
    static descendSort(array){//sort an array of numbers descending order
        function d(x, y){
            return y - x;
        }
        return array.sort(d);
    }
    
    static ascendSort(array){//sort an array of numbers ascending order
        function d(x, y){
            return x - y;
        }
        return array.sort(d);
    }
    
}

module.exports = {MathFormulaFunction, Arrays};
