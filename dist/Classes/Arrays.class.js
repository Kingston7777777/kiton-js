"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Arrays {
    static printElementOfArrayFS(array) {
        for (let i = 0; i < array.length; i += 1) {
            console.log(array[i]);
        }
    }
    static printElementOfArrayFE(array) {
        for (let i = array.length - 1; i >= 0; i -= 1) {
            console.log(array[i]);
        }
    }
    static print2DArray(array) {
        for (let i of array) {
            for (let j of i) {
                console.log(j);
            }
        }
    }
    static reduceArrayToASingleElement(array) {
        function check(total, element) {
            return total + element;
        }
        return array.reduce(check);
    }
    static descendSort(array) {
        function d(x, y) {
            return y - x;
        }
        return array.sort(d);
    }
    static ascendSort(array) {
        function a(x, y) {
            return x - y;
        }
        return array.sort(a);
    }
}
exports.default = Arrays;
//# sourceMappingURL=Arrays.class.js.map