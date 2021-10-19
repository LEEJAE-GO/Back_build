# Node.js express


### What is express

+ **Node.js를 위한 빠르고 간편한 웹 프레임워크**
+ express는 Node.js를 사용하여 서버 개발에서 서버 구성을 쉽게 할 수 있게 만든 클래스와 라이브러리의 집합체.
  + HTTP 통신 요청에 대한 핸들러 
    + (핸들러 : 특정 데이터 혹은 기능을 수행하기 위한 함수이다.)
  + 템플릿에 데이터를 넣어 response를 얻기위해 view의 렌더링 엔진과 결합
    + 템플릿 : 템플릿 설정과 규칙에 따라서 파일을 변경, 파일을 HTML 형식으로 변경시켜 출력하는 모듈

### express install

+ 디렉토리 생성 : `mkdir {디렉토리명}`
+ `npm init` : 패키지를 생성(초기화 과정)
+ `npm install express --save` : 디렉토리에 express를 설치한 후 종속 항목 목록(package.json 종속항목)에 저장
+ `npm install express` : 디렉토리에 임시로 설치하고 종속 항목 목록에 추가하지 않음.
<br/>또는
<br/>**(추천)**
1. `npm install -g express-generator` : 전역으로 사용할 수 있도록 설치
2. 터미널에 `express -h` or `express --version`으로 설치가 되었는지 확인
3. `express myapp` : `express [프로젝트명]` 형식으로 폴더 구조 생성
4. 생성된 폴더로 이동하여 `npm install` 명령어 실행


+ `npm install -g express-generator`를 이용할 때 다른 디스크에서 `express`를 사용할 경우 에러가 발생했을 때 해결법
  1. powershell을 관리자 권한으로 실행하여 사용.
  2. `git bash`를 이용하여 사용.
  3. VScode의 터미널을 `git bash`로 변경하여 사용.
    + VScode에서 터미널을 `git bash`로 변경하는 법
      - `settings.json` 에 `"terminal.integrated.shell.windows": "bit basb 경로\\bash.exe"` 입력 및 저장 후 재시작

### express Run

+ 터미널에 `DEBUG=myapp:* npm start` 혹은 `npm start` 명령어를 이용하여 test
+ `./bin/www` 명령어를 이용하여 test (이 명령어는 리눅스환경 또는 git bash에서만 적용된다.)

### express 구조
```bash
├─ bin
│   └─ www : 웹서버 설정;port번호,
│            클라이언트의 요청을 받고 응답을 처리해줄 객체를 서버로 생성, 서버 수신상태확인
├─ public : 정적인 파일들 위치
│   └─ stylesheets
│       └─ style.css
│
├─ routes
│   └─ index.js : 라우팅 처리; 라우팅: 최적의 경로로 데이터 통신
│   └─ user.js
│
├─ views : 템플릿 엔진 관련 view 파일
│   └─ error.jade
│   └─ index.jade
│   └─ layout.jade
│
├─ app.js : express 객체를 생성하고 메서드를 통해 환경설정
│           모듈 사용관련 설정(http요청, POST요청 데이터 접근)
│
└─ package-lock.json
│
└─ package.json : 프로젝트 정보를 정의한 객체 형태의 파일
```

### GET, POST 메서드

+ 클라이언트가 서버에게 웹페이지를 보여달라고 **요청**, 서버가 클라이언트의 요청에 대답하여 html문서의 내용을 표현하는 것을 **응답**이라함. 
+ GET, POST 두 방식 모두 서버에 요청을 하는 메서드.
+ URL의 "?"마크는 URL의 끝을 알리면서 데이터 표현의 시작점.
+ 데이터 중간 "&"마크는 2개 이상의 데이터를 보낼 때의 구분자.
+ GET 메서드는 URL에 데이터를 붙여서 보내고 POST 메서드는 BODY에 데이터를 넣어서 보냄.
  + GET 메서드는 데이터를 설명하는 Content-Type 헤더필드가 없어도 되지만 POST 메서드는 헤더필드 중 BODY의 데이터를 설명하는 Content-Type 헤더필드가 들어가고 어떤 데이터 타입인지 명시해야함.
    + Content-Type 예시
      1. application/x-www-form-urlencoded
      2. text/plain
      3. multipart/form-data
  + GET방식은 URL에 데이터가 표시 되어 별다른 작업 없이 볼 수 있지만 둘다 클라이언트 측에서 볼 수 있어 암호화는 필수.
  + GET방식의 요청은 한번 접근후, 다시 요청 시 빠르게 접근하기 위해 데이터를 저장시키기 때문에(캐싱) GET방식 속도가 빠르다.