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
   
function outputHttpResponse(statusCode, statusMessage, headers, body) {
    console.log(`HTTP/1.1 ${statusCode} ${statusMessage}`);
    console.log(`Date: ${new Date}`);
    for (let item of headers) {
        console.log(`${item[0]}: ${item[1]}`);
    }
    console.log('');
    console.log(body);
}
   
function processHttpRequest($method, $uri, $headers, $body) {
   let statusCode = '200';
   let statusMessage = 'OK';   
   if ($method == 'GET') {
       let arrSum = $uri.split('sum');
       if (arrSum.length > 1) {
           let arrNums = arrSum[1].split('?nums=');
           if (arrNums.length > 1) {
               $body = arrNums[1].split(',').reduce((a, b) => a + b);
           } else {
               statusCode = '400';
               statusMessage = 'Bad Request';
               $body = 'bad Request';
           }
           
       } else {
           statusCode = '404';
           statusMessage = 'Not Found';
           $body = 'not found';
       }
       
   } else {
        statusCode = '400';
        statusMessage = 'Bad Request';
        $body = 'bad Request';
   }
   $headers.push(['Content-Length', '' + $body.length]);

   outputHttpResponse(statusCode, statusMessage, $headers, $body);
}
   
function parseTcpStringAsHttpRequest($string) {
    let arr = $string.split('\n');
    let header = [];
    for (let item of arr) {        
        let arr2 = item.split(': ');        
        if (arr2.length > 1) {
            let resHed = [arr2[0], arr2[1]];            
            header.push(resHed);
        }
    }
    let body = $string.split('\n\n')[1] || '';    
    return {
        method: arr[0].split(' ')[0], 
        uri: arr[0].split(' ')[1], 
        headers:  header, 
        body: body
    }; 
}

http = parseTcpStringAsHttpRequest(contents);
processHttpRequest(http.method, http.uri, http.headers, http.body);