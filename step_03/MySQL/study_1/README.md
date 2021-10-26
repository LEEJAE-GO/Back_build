# How to Install MySQL

1. 검색창에 `mysql community edition download`를 검색하여 MySQL Community Server을 설치하거나
2. 검색창에 `bitnami wamp`를 검색하여 WAMP(window에서 apachi, mysql, php를 설치할 수 있는 패키지) 다운로드
  - `WAMP` 다운로드가 완료되면 실행하고 비밀번호 설정 후 cloud 내용의 check 해제(최신버전 설치 시 MySQL이 아닌 MariaDB가 설치됨)
3. 설치 후 `cmd` 창에서 mysql의 위치로 이동하여 `mysql -uroot -p`입력 후 설정한 비밀번호를 입력하여 실행  

* `mariaDB`는 `MySQL`의 엔진을 포크, `PerconaServer`의 엔진을 차용하여 사용하여 실행 프로그램들과 유틸리티는 모두 `MySQL`과 이름이 동일하기 때문에 일단 `mariaDB`로 진행함.

# MySQL Structure

+ 데이터를 저장하는 최종적인 장소는 표에 저장됨(엑셀과 같은 스프레드시트와 비슷한 성질을 가지고 있음).


