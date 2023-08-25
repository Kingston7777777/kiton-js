"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Math_Formula_Class {
    static add(...numbers) {
        let total = 0;
        for (let num of numbers) {
            total += num;
        }
        return total;
    }
    static minus(x, y) {
        return x - y;
    }
    static div(x, y) {
        return x / y;
    }
    static multiplication(x, y) {
        return x * y;
    }
    static rememderOfDiv(x, y) {
        return x % y;
    }
    static percentage(x, y) {
        return (x / y) * 100;
    }
    static toCelsius(temp) {
        return (temp - 32) * (5 / 9);
    }
    static toFahrenheit(temp) {
        return temp * 9 / 5 + 32;
    }
    static raiseTo2(x) {
        return x * x;
    }
    static cube(x) {
        return x * x * x;
    }
    static getCircumference(radius) {
        return 2 * Math_Formula_Class.PI * radius;
    }
    static getArea(radius) {
        return Math_Formula_Class.PI * radius * radius;
    }
    static highestValueNumber(x, y) {
        if (x > y) {
            return x;
        }
        else if (y > x) {
            return y;
        }
        else {
            return;
        }
    }
    static lowestValueNumber(x, y) {
        if (x < y) {
            return x;
        }
        else if (y < x) {
            return y;
        }
        else {
            return;
        }
    }
}
Math_Formula_Class.PI = 3.14159;
exports.default = Math_Formula_Class;
//# sourceMappingURL=Math_Formula_Class.class.js.map