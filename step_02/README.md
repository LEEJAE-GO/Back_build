# Node.js express


### What is express

+ **Node.js를 위한 빠르고 간편한 웹 프레임워크**


### express install

+ 디렉토리 생성 : `mkdir {디렉토리명}`
+ `npm init` : 패키지를 생성(초기화 과정)
+ `npm install express --save` : 디렉토리에 express를 설치한 후 종속 항목 목록(package.json 종속항목)에 저장
+ `npm install express` : 디렉토리에 임시로 설치하고 종속 항목 목록에 추가하지 않음.
또는
**(추천)**
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