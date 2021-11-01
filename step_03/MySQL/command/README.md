# MySQL syntax

### MySQL 문법을 찾아볼 때 [] 사이에 있는 것은 생략가능함.

+ 기본 명령어
  1. `CREATE` : 생성
    - `create database {database name};`
    - `create table {table name}(`
    - `-> {column name} {datatype}(length) {null/not null} {other option},`
    - `...,`
    - `primary key(column name));`
  2. `SELECT` : 읽기
    - `select *(colum 전부를 불러옴) from {table name};`
    - `select * from {table name1} left join {table name2} on table name1.column=table name2.column;`
  3. `INSERT` : 데이터 생성(입력)
    - `insert into {table name}(column1,column2, ...) values(data1, data2, ...);`
  4. `SHOW`   : 읽기; `DESC {table name}`: 데이블에 대한 설명(조회)
    - `show databases;`
    - `show tables;`
    - `show {topic}
  5. `DELECT` : 삭제
  6. `UPDATE` : 수정(변경)
    - `update {table name} set {column name}="{change value}" where id="{value}"`

`mysql -u{name} -p{password};`
`CREATE DATABASE {database name};`
`SHOW DATABASES or SHOW SCHEMAS;`
`SHOW TABLES;`
`CREATE TABLE {table name}(colum1 datatype(length) NULL(Y/N) AnotherOption, ...)`
`DESC topic;`
`INSERT INTO topic () VALUES()`
`SELECT * FROM topic;`
`SELECT {projection} FROM topic`