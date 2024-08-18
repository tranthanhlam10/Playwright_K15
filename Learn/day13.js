//Promise trong JS

const { error } = require("console");
const { randomUUID } = require("crypto");
const { resolve } = require("path");


const LIST_ALL_OBJECT = "https://api.restful-api.dev/objects";
const LIST_ALL_OBJECT_BY_ID = "https://api.restful-api.dev/objects?id=3&id=5&id=10";
const LIST_SINGLE_OBJECT = "https://api.restful-api.dev/objects?id=3&id=5&id=10";


const list_URL = [LIST_ALL_OBJECT,LIST_ALL_OBJECT_BY_ID, LIST_SINGLE_OBJECT];

function getFandomURL() {
    list_URL.forEach(item =>{
        console.log("URLs are going to be testing: " + item);  
    } )
    const maxNum = list_URL.length - 1;
    //console.log("" + maxNum);
    let randomIndex = Math.floor(Math.random() * (maxNum - 0 + 1)) + 0;
    
    return list_URL[randomIndex];  

}

function getData(URL){
    return new Promise (function(reject, resolve){
        fetch(URL).then(function(response){
            return response.json();
          
        }).then(data => resolve(data)).catch(error => reject(error));

    })
}


function getData2(URL){
    return new Promise (function(reject, resolve){
        fetch(URL).then(data => resolve(data)).catch(error => reject(error));

    })
}

// Hieu don gian 2 tk then va catch sau la cua tk Promise lon, con thang then dau tien minh xem nhu no la ham xu ly cua fetch


let URL = getFandomURL();
//console.log(URL);

getData2(URL).then(response => {
    console.log(response); // Xử lý dữ liệu từ API
  })
  .catch(error => {
    console.error('Fetch error:', error); // Xử lý lỗi nếu có
  });;   


