# Node.js 란

+ Chrome V8 JavaScript 엔진으로 빌드 된 JavaScript 런타임.
+ **V8**은 웹 브라우저를 만드는 데 기반을 제공하는 open source JavaScript 엔진.
+ 노드는 **V8**과 **libuv 라이브러리(이벤트 기반, 논블로킹I/O모델 구현)**와 더불어 사용.
  + **이벤트 기반(Event-driven)**이란 이벤트가 발생할 떄 미리 지정해둔 작업을 수행하는 방식.
+ 노드는 싱글 스레드 기반으로 JavaScript 코드가 동시에 실행될 수 없음.
  + `Node.js`는 싱글 스레드, 이벤트 기반, 논블로킹 모델로 싱글 스레드가 혼자서 일을 처리하지만 논 블로킹 방식으로 이전 작업이 완료될 때까지 대기하지 않고 다음 작업을 수행.
  + 노드는 싱글 스레드이기 때문에 멀티 스레드 방식보다 적은 컴퓨터 자원을 사용함.

### JSON

+ **JavaScript Object Notation(JSON)**은 Javascript 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷
  + JavaScript 객체 문법을 따르는 문자 기반의 데이터 포맷
  + 웹에서 데이터를 전송할 때 일반적으로 사용함.
  + `package.json` : npm을 통해 설치된 패키지 목록을 관리하고 프로젝트의 정보 및 기타 실행 스크립트를 작성하는 파일
    + `package.json` 만드는 명령어 : `npm init`

### Node.js install

+ https://nodejs.org/ko/ Node.js 다운로드 페이지에서 LTS 버전으로 설치.
  + LTS(Long Term Support)로 다운받는 이유는 장기간 걸친 보안 업데이트로 높은 안정성을 갖고 있기 떄문이다.

+ 설치 완료 이후 컴퓨터 혹은 노트북을 재부팅하는 것이 좋다.

### Node.js Run

+ 터미널에서 `test.js`가 위치한 경로로 이동.
  + 경로이동 명령어 `cd`
+ `node test.js` 입력 + Enter
+ 브라우저에서 `test.js` 에 입력한 ip:port 로 이동
  + `localhost = 127.0.0.1`