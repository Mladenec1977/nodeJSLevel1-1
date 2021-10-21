// этот файл надо будет дописать...

// не обращайте на эту функцию внимания 
// она нужна для того чтобы правильно читать входные данные
function readHttpLikeInput(){
    var fs = require("fs");
    var res = "";
    var buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);
    let was10 = 0;
    for(;;){ 
        try { fs.readSync(0 /*stdin fd*/, buffer, 0, 1); } catch (e) {break; /* windows */}
        if(buffer[0] === 10 || buffer[0] === 13) {
            if (was10 > 10) 
                break;
            was10++;
        } else 
           was10 = 0;
        res += new String(buffer);
    }

    return res;
}

let contents = readHttpLikeInput();

// вот эту функцию собственно надо написать
function parseTcpStringAsHttpRequest(string) {    
    let arr = string.split('\n');
    let header = [];
    for (let item of arr) {        
        let arr2 = item.split(': ');        
        if (arr2.length > 1) {
            let resHed = [arr2[0], arr2[1]];            
            header.push(resHed);
        }
    }
    let body = string.split('\n\n')[1] || '';
  return {
    method: arr[0].split(' ')[0], 
    uri: arr[0].split(' ')[1], 
    headers:  header, 
    body: body
  }; 
}

http = parseTcpStringAsHttpRequest(contents); 
console.log(JSON.stringify(http, undefined, 2));