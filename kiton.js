//My Framework(module) kiton js It contains many functions and classes for web development
export class MathFormulaFunction{//Maths class
    static PI = 3.14159; 
    static plus(x, y){//return 2 added values
        return x + y;
    }
    static minus(x, y){//return 2 minus values
        return x - y;
    }
    static div(x, y){//return 2 divided values
        return x / y;
    }
    static multiplication(x, y){//return 2 multiplied values
        return x * y;
    }
    static rememderOfDiv(x, y){//return 2 remender of division values
        return x % y;
    }
    static percentage(x, y){//return 2 remender of division values
        return x / y * 100 +"%";
    }
    static toCelsius(temp){//Convert to celsius
        temp = Number(temp);
        return (temp - 32) * (5/9) +"°C";
    }
    static toFahrenheit(temp){//Convert to fahrenheit
        temp = Number(temp);
        return temp * 9 / 5 + 32 +"°F";
    }
    static raiseTo2(x){//Mutiply a number by 2
        return x * 2;
    }
    static cube(x){//Mutiply a number by 3
        return x * 3;
    }
    static getCircumference(radius){
        return 2 * MathFormulaFunction.PI * radius;
    }
    static getArea(radius){
        return MathFormulaFunction.PI * radius * radius;
    }
}
export class Arrays{//Arrays class
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
    static print2DArray(array){//put the array that holds multiple array
        for(let twoList of array){
            for(let eachListInTwoD of twoList){
                console.log(eachListInTwoD);
            }
        }    
    }
    static reduceArrayToASingleElement(array){//reduce an array to a single element
        function check(total, element){
        return total + element;//The total is the first element + the rest of the elements in an array
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
export function printToConsole(x){//Function to print out an ouput on the console
    console.log(x);
}
export function open(address){//Function to open a window put an address and it will open a window
    window.open(address);
}
export function logic(x){//Function to check if something is true or false
    if(x){
        return true;
    }
    else{
        return false;
    }
}



