'use strict';

var arrWords = ['Кот', 'Собака', 'Жираф'];
function searchArrayWord(word, arr1) {
    for (var i = 0; i < arr1.length; i++) {
        if (word === arr1[i]) 
        { return true}
    }return false};
console.log(searchArrayWord('Собака', arrWords));


var arr = [1, 2, 3, 7, 6, 9];
var c = 0;
for (var i = 0; i < arr.length; i++){
    var sum = c + arr[i];
    c = sum;
    var n = sum / arr.length;}
console.log(n);

var arr2 = [1, 3, 5, 6, 7, 9];
var numb = [];
for (var i = 1; i <= arr2.length; i++){
    numb.push(arr2[arr2.length - i]); }
console.log(numb);

var obj = {html:'HTML', css: 'CSS', js: 'ECMA'};
var keys = [];
     for ( var key in obj){
         keys.push(key);
     }
     console.log(keys);
   
var obj1 = {
    'name': '',
    'phone': '',
    'address': '',
    'allSum': 830,
    'allWeight': 2700,
    'product' : {
        1: {
            'nameProduct': 'Чашка',
            'price' : 100,
            'weight': 200,
        },
        2: {
            'nameProduct': 'Ложка',
            'price' : 30,
            'weight': 100,
        },
        3:{
            'nameProduct': 'Чайник',
            'price' : 550,
            'weight': 2000,        
        },
        4:{
            'nameProduct': 'Кружка',
            'price' : 150,
            'weight': 400,
        }
    },
};
console.log(obj1);