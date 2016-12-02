//1
/*var json1=[];
var json2=['123'];
var json3=['a','b',2,[5],{name:'abs'},true];
*/
//2
/*var json4={};
var json5={'name':'ming'};*/
var student={
    "name":"ming",
    "age":12,
    "hobby":["旅游","音乐"],
    "parent":{
        "father":{
            "name":"张",
            "age":45
        },
        "mother":{
            "name":"李",
            "age":40
        }
    }
}
$.each(student,function(key,value){
    console.log(key);
    console.log(value);
}) //遍历