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