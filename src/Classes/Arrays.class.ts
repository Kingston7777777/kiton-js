export default class Arrays{//Arrays class
    static printElementOfArrayFS(array: (string | number | boolean)[]):void{//To print elements in an array from the beginning using for loop
        for(let i = 0; i < array.length; i+=1){
            console.log(array[i]);
        }
    }
    static printElementOfArrayFE(array: (string | number | boolean)[]):void{//To print elements in an array from the end using for loop
        for(let i = array.length - 1; i >= 0; i-=1){
            console.log(array[i]);
        }
    }
    static print2DArray(array: (string | number | boolean)[][]):void{//print 2D array
        for(let i of array){
            for(let j of i){
                console.log(j);
            }
        }
    }
    static reduceArrayToASingleElement(array: number[]):number{//reduce an array to a single element. REMEMBER it the array must only contain number
        function check(total:number, element:number):number{
        return total + element;//Add up the element together
        }
        return array.reduce(check);
    }
    
    static descendSort(array: (string | number | boolean)[]):any{//sort an array of numbers descending order
        function d(x:any, y:any):any{
            return y - x;
        }
        return array.sort(d);
    }
    
    static ascendSort(array: (string | number | boolean)[]):any{//sort an array of numbers ascending order
        function a(x:any, y:any):any{
            return x - y;
        }
        return array.sort(a);
    }
}