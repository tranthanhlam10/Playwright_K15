// Su ly bat dong bo trong JS

console.log("1.Chay toi nha thang teo");
console.log("2.Chay toi quan cafe");





// không thể truyền param vào phần hàm ở trường hợp này
setTimeout(callbackFunc, 3000);
function callbackFunc() {            
    console.log("2.Teo oi uong cafe khong");
}  


// callBack hell
const targetURL = "https://sdetpro,com";
sendRequest(targetURL, function(){
    processResponse(response, function(statusCode){
        validateResponse(statusCode);   
    });
});

// call back -> thằng nào kết thúc trước cũng được, nhưng mà tổng thời gian trả ra trong b3 thằng, nó phải bằng thời gian chạy đa luồng những thằng này

function sendRequest(url, callBack){
    console.log("1. Sending Request");
    setTimeout(function(){
        callBack({status: 200});
    }, 1000);    
}

function processResponse(response, callBack) {
    console.log("2. Processing Request");
    setTimeout(function(){
        callBack(response.status);
    }, 3000); 
}

function validateResponse(statusCode){
    console.log("3. Validating response");
    if (statusCode ===  200) {
        console.log("Passed");
    } else{
        console.log("Failed");
    }
}

