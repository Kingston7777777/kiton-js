# kingsto-js

## command to install - npm i kingsto

## Description
My library kingstojs it contains math, array and cookie functions to use in frontend and backend  

## Features Added
1. TypeScript: I added typescript to this package.

2. Cookie class: Now you dont need to write the code to set cookies for your frontend javascript. They are now utils you can use to set, delete and get cookies. You can use it only for frontend for vanilla javascript, javascript
frameworks like react, angular, vue. 

## What they module contain
It contains math functions, array functions and a new feature cookies. 

## Usage:
### Step 1:
If you want to use it in your react js, Vuejs, vanilla js and typescript frontend do:
import * from "kingsto"
      or
import {Math_Formula_Class, Arrays, Cookies} from "kingsto"  // Note: What is imported are classes they are 3 classes in the module
     
     then
for nodejs and express
const kiton = require("kingsto");

## Note: I will show you the properties for each classes with which one is used for frontend or backend

### Math_Formula_Class

## Properties:
Note they are static functions so call it by Math_Formula_Class.propertyname

1. Math_Formula_Class.add()
   Usage:
   in typescript:

   ```typescript
   const x = 2
   const y = 3
   const z = 5
   const t = Test.Math_Formula_Class.add(x, y, z);//This add function returns the total sum 
                                                  //Note: You can add an infinite amount of variable
   console.log(t) // Output: 10
   ```
   
   in javascript:

 ```javascript
   const x = 2
   const y = 3
   const z = 5
   const t = Test.Math_Formula_Class.add(x, y, z);//This add function returns the total sum
                                                  //Note: You can add an infinite amount of variable
   console.log(t) // Output: 10
   ```
   
   2. Math_Formula_Class.minus()
Usage:
   in typescript:

   ```typescript
   const x: number = 10
   const y: number = 5
   const t: number = Test.Math_Formula_Class.minus(x, y);//This add function returns a value after it minus the 2 arguments 
                                                  //Note: Only 2 arguments 
   console.log(t) // Output: 5 
   ```

   in javascript:

   ```javascript
   const x = 2
   const y = 3
   const t = Test.Math_Formula_Class.minus(x, y);//This add function returns a value after it minus the 2 arguments 
                                                  //Note: Only 2 arguments 
   console.log(t) // Output: 10
   ```
*Written by Your Faviourite programmer Which is Me Kingsley* 
