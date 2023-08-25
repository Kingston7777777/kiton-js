export default class Math_Formula_Class{//Maths class 
    static PI: number = 3.14159
    static add(...numbers: number[]):number{//return a value when adding an infinite number
        let total: number = 0;
        for(let num of numbers){
            total += num;
        }
        return total;
    }
    static minus(x: number, y: number):number{//return a value when substracting x and y
        return x - y
    }
    static div(x:number, y:number):number{//return a value when dividing x and y
        return x / y;
    }
    static multiplication(x:number, y:number):number{//return a value when multiplying x and y
        return x * y;
    }
    static rememderOfDiv(x:number, y:number):number{//return a value when modulos x and y to get the rememder of a division
        return x % y;
    }
    static percentage(x:number, y:number):number{//return a value when dividing x and y and multiplying it by 100
        return (x / y) * 100;
    }
    static toCelsius(temp:number):number{//Convert to celsius
        return (temp - 32) * (5/9);
    }
    static toFahrenheit(temp:number):number{//Convert to fahrenheit
        return temp * 9 / 5 + 32;
    }
    static raiseTo2(x:number):number{//Mutiply a number twice by itself e.g x * x
        return x * x;
    }
    static cube(x:number):number{//Mutiply a number three times by itself e.g x * x * x
        return x * x * x;
    }
    static getCircumference(radius:number):number{//getCircumference of a circle
        return 2 * Math_Formula_Class.PI * radius;
    }
    static getArea(radius:number):number{//to getArea of a circle
        return Math_Formula_Class.PI * radius * radius;
    }
    static highestValueNumber(x:number, y:number):number | undefined{//To get the highest value between 2 numbers
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
    static lowestValueNumber(x:number, y:number):number | undefined{//To get the lowest value between 2 numbers
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