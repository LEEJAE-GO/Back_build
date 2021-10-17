var http = require("http"); //내장 모듈인 http 불러오기 http = Hyper Text Transfer Protocol TCP/IP 기반 프로토콜

var hostname = "localhost"; 
var port = 1331;

var server = http.createServer((req, res) => { //server 객체 생성하기 위한 함수
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html"); //setHeader(statusCode, object) 함수는 프로토콜의 header를 설정하는 부분
    res.end("Hello world"); //본문 작성
}); 

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); // 지정된 포트 또는 경로에 리스너를 생성