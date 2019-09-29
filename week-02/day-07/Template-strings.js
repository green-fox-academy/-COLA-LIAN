function long(timestamp, username, action){
    let str1 = "INFO - " + timestamp + " " + "\n" +username + " : " + action;

    // console.log(str1);
    return str1
}

function long2(timestamp, username, action){
    
    let str2 = `INFO - ${timestamp}\n${username} : ${action}`

    // console.log(str2);
    return str2
}

let Long =  new long('timestamp', 'username', 'action');

console.log(long('2019/09', ' Cola', 'Studying'));


let Long2 = new long2('timestamp', 'username', 'action');

console.log(long2('2019/09', 'Cathy', 'Studying'));