# How to Install MySQL

1. 검색창에 `mysql community edition download`를 검색하여 MySQL Community Server을 설치하거나
2. 검색창에 `bitnami wamp`를 검색하여 WAMP(window에서 apachi, mysql, php를 설치할 수 있는 패키지) 다운로드
  - `WAMP` 다운로드가 완료되면 실행하고 비밀번호 설정 후 cloud 내용의 check 해제(최신버전 설치 시 MySQL이 아닌 MariaDB가 설치됨)
3. 설치 후 `cmd` 창에서 mysql의 위치로 이동하여 `mysql -uroot -p`입력 후 설정한 비밀번호를 입력하여 실행  

* `mariaDB`는 `MySQL`의 엔진을 포크, `PerconaServer`의 엔진을 차용하여 사용하여 실행 프로그램들과 유틸리티는 모두 `MySQL`과 이름이 동일하기 때문에 일단 `mariaDB`로 진행함.

# MySQL Structure

+ 데이터를 저장하는 최종적인 장소는 표에 저장됨(엑셀과 같은 스프레드시트와 비슷한 성질을 가지고 있음).
+ 표(테이블)이 많아질수록 정리해야하는데 연관된 것들끼리 그룹핑하는 것을 데이터베이스라고 함.
  + 데이터베이스보다는 스키마라고 부름(MySQL 자체를 데이터베이스라고 부르기 때문에 헷갈림)
+ 스키마가 모인 그룹을 데이터베이스 서버라고 부름. (데이터베이스 서버 > 스키마 > 표)

# Login 

+ `mysql -u(...) -p` u는 유저를 뜻하며 u다음에 유저의 네임을 적으면 됨.
  + `root` : 기본유저(관리자); 모든 권한을 사용할 수 있음.
+ 비밀번호를 잊었을 때,

# create DataBase(schema)

+ `CREATE DATABASE [database name];` : 데이터베이스 이름을 정해주고 실행 시 데이터베이스 생성.
+ `SHOW DATABASES;` `SHOW SCHEMAS;` : 데이터베이스가 잘 생성되었는지 확인.
+ `USE [database name]` : 사용할 데이터베이스를 지정.
+ `DROP DATABASE [database name];` : 만들어진 데이터베이스를 지정하여 삭제.