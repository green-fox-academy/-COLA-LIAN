'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

var todoText = " - Buy milk\n";
var str1 = "My todo:\n";
var str2 = " - Download games\n";
var str3 = " \t- Diablo";

todoText = str1 + todoText + str2 +""+str3;




console.log(todoText);