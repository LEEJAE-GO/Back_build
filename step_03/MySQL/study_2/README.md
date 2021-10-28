# What is SQL

+ Structured(표를 작성하여 정리) Query(요청과 질의) Language의 약자
+ HTML 만큼이나 언어과 쉽고 표준화된 언어로 데이터베이스 시스템에서 중요함.

# Table

+ 행(row,record;데이터자체)과 열(column;데이터구조)로 이루어진 표
+ `CREATE TABLE topic([c1] datatype[Length],`       : 데이터 타입은 입력할 데이터의 크기와 <br>
                    ` [c2] datatype[Length], ...);` : 근접한 사이즈의 타입을 사용하는 것이 좋음.<br>
                                                    테이블을 생성하는 법;개발하면서 쓸일이 많이 없음. 
+ ex) `id INT(11) NOT NULL AUTO_INCREMENT` : 첫번째 컬럼의 이름은 id 이며 INT구조에 값이 없으면 안되고 자동으로 증가함.
  + datatype 경우 상황에 맞는 타입을 지정해서 사용해주면 됨;`INT, CHAR, VARCHAR 등...`
+ `PRIMARY KEY`는 성능과 중복을 나타냄; 중복되는 값이 존재하지 않는 곳(식별자)을 선택한다 생각하면됨.
+ PASSWORD 에러가 떴을 경우 `SET PASSWORD = PASSWORD('new password')`를 이용하여 패스워드를 지정해주면 해결.

# What is CRUD

+ 데이터베이스가 가지고 있는 작업(본질);생성(create),읽기(read),수정(update),삭제(delete)
  + 생성과 읽기는 반드시 가지고 있음(주요,중요 작업). 없으면 데이터베이스가 의미가 없음.
  + CREATE문, INSERT문, SELECT문은 중요함;많이 사용
+ 생성문 : create..., `insert into topicname(column1,column2,...) values(column1_data, column2_data,...)`를 통하여 테이블에 데이터를 생성.
+ 읽기문 : select...
+ 수정문 : update... ; 테이블을 수정할 때 where문을 빠트리면 전부 바뀔 수 있으니 주의할 것.
+ 삭제문 : delete... ; 원하는 부분을 삭제할 때 where문을 통해 원하는 부분을 선택하여 삭제.

### 중복, 병합, 분리

+ 중복(반복)된 데이터 = 개선사항;
+ 중복(반복)되는 데이터가 많을 경우 테이블을 따로 구성(참조값;스프레드시트)하여 작성
  + 프로그래밍에서 같은 동작을 여러번 사용하는 것보다 함수화하여 사용하는 것과 비슷해보임.
+ 참조값이 생기면 불편한 점은 참조값이 있는 테이블을 열어 값이 무엇인지 확인해야함.(스프레드시트)
+ 중복된 결과물을 줄이고 참조값이 아닌 일반 값으로 보이도록 하면 문제 해결!(mysql에서는 가능함.)
  + SELECT 문을 활용하여 병합할 수 있음.

+ **테이블을 분리한다는 것은 식별자에 의해 관계가 맺어진 모든 테이블 간 일치하는 식별자의 데이터 수정을 쉽게 할 수 있음.**