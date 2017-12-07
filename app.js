var express = require("express");
var rq = require("request");
var app = express();

app.listen(3000,function(){
    console.log("3000 listening......");
});

function catchPage(url){
    return new Promise(function(resolve,reject){
        console.log(url+"正在爬取中......");
        rq(url,function(error, response, body){
            resolve(body);
        });
    });
}

var arr = ["http://news.baidu.com/","https://baijia.baidu.com/","http://news.baidu.com/guonei"];
var promArray = [];
arr.forEach(function(item){
    promArray.push(catchPage(item));
});

Promise.all(promArray).then(function(res){console.log(res)});