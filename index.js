//* question 1 assignment/*

function convertFahtoCelsius(f) {
    const variableType = typeof f;
     let result = " ";
    if(variableType==="string"|| variableType==="number"){
    /** converting fahrenheit to celsius(4 decimal place) **/
     celsius = ((f)- 32) / 1.8;
     result = celsius.toFixed(4)
     return Number(result)  ;
     }
   
      else if(variableType==="boolean"){
      result =JSON.stringify(f) +" is not a valid number but a boolean";
       return result;
     }
      if (Array.isArray(f)) {
       result=   `[${f}] is not a valid number but a/an array. `
       return result;
     }
   
    if (variableType === "object" ) { 
     result =JSON.stringify(f) + " is not a valid number but an object" ; 
     return result;
   }
   
    }
    
    
    console.log(convertFahtoCelsius([1,2,3]));
    console.log(convertFahtoCelsius(0));
   
   
   
    //* question 2 assignment*/
   
   function checkYuGiOh (n) {
     if (!Number(n)) {
      let content=JSON.stringify(n)
    return `invalid parameter: ${content}`; 
   }
   let result = [];
   
   const mappedResult = {
    2: "yu",
    3: "gi",
    5: "oh",
   };
   
   for (let i = 1; i <= n; i++) {
    let pushedResult = i;
   
    if (i % 2 === 0) {
      pushedResult = mappedResult[2];
    }
   
    if (i % 3 === 0) {
      pushedResult =
        typeof pushedResult === "number"
          ? mappedResult[3]
          : pushedResult + "-" + mappedResult[3];
    }
   
    if (i % 5 === 0) {
      pushedResult =
        typeof pushedResult === "number"
          ? mappedResult[5]
          : pushedResult + "-" + mappedResult[5];
    }
   
    result.push(pushedResult);
   }
   
   return result;
   };
   
   console.log(checkYuGiOh(5))
   console.log(checkYuGiOh(20))
   console.log(checkYuGiOh("fizzbuzz is meh"))