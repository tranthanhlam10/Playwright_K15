


// Sử dụng then để lấy giá trị của 1 promise
const returnedValue = asyncFunc01('Param').then(function(sth){
    console.log(sth);
});
console.log(returnedValue);



function asyncFunc01(param1){
    console.log("Processing param" +param1);
    // hàm bất đồng bộ thành promise
    return new Promise(function(resolve, reject){
        setTimeout (function(){
            const returnValue = "asyncFunc01" + param1; 
                resolve (returnValue);
        }, 1000); 
    })
        
    
     
}

function asyncFunc02(param2){
    console.log("Processing param" +param1);
    // hàm bất đồng bộ thành promise
    return new Promise(function(resolve, reject){
        setTimeout (function(){
            const returnValue2 = "asyncFunc02" + param2; 
                resolve (returnValue2);
        }, 2000); 
    })
        
    
     
}

