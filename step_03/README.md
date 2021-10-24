# node.js MySQL install

## 일반 설치

+ 터미널에서 MySQL을 설치한 공간으로 이동 후 `npm install mysql` 명령어 실행
-------------

## Sequelize

+  Seqelize 란 `node.js`에서 `MySQL`을 쉽게 다룰 수 있도록 도와주는 라이브러리; ORM으로 분류
  + ORM(Object Relational Mapping)이란 객체와 관계형 데이터베이스의 데이터를 자동으로 연결해주는 것을 말함.
    - 객체지향은 클래스를 사용하고, 관계형은 테이블을 사용함.

+ `npm i sequelize mysql2` : squelize와 mysql2를 설치함.
+ `npm i -g sequelize-cli` : 모델 생성
+ `sequelize init` : sequelize의 초기 설정
-------------
* `MySQL`과 `MySQL2`의 차이점은 `promise`.
  - `MySQL`은 콜백 기반이기 떄문에 promise를 사용하지 못하고 `npm`에 있는 `promise-mysql`모듈을 따로 설치해서 사용해야함.
  - `promise`로 구현된 비동기 처리 함수는 콜백을 에측 가능한 패턴으로 사용하도록 도와줌.
  - 순차적이지 않은 비동기 함수의 실행순서를 제어할 수 있게 도와주고 콜백패턴에 비해 가독성이 좋고 결과물을 사용하기 편하게 도와줌.

+ `promise`의 세 가지 상태
  - https://ukcasso.tistory.com/64 참조

### Table

+ 데이터베이스에서 실제 데이터가 저장되는 부분이며 효율적으로 관리를 위해 필수적으로 생성함.
+ 테이블이라는 데이터베이스에 기본 키, 어트리뷰트(세로), 튜플(가로), 식별자 로 이루어져있음. 