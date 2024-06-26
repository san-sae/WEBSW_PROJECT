# 책 리뷰 작성 서비스

### 서비스 설명
이 서비스는 사용자가 독서를 마친 후, 특정 책에 대한 만족도, 읽은 기간 등을 기록하고 리뷰를 저장할 수 있는 웹 플랫폼입니다. 이 웹 애플리케이션은 독서 경험을 더욱 풍부하고 체계적으로 관리할 수 있도록 설계되었습니다.

### 개발 기간
2024.05.09 ~ 2024.06.18

### Contributor
- 최유림 : san-sae
- 민경원 : MinKW1
- 박선영 : Parksunyoung1

### 사전 요구사항
- Node.js (버전 14.x 이상)
- npm (버전 6.x 이상)

### 의존성
이 프로젝트는 다음과 같은 주요 의존성에 의존합니다:

- **React**: 사용자 인터페이스를 구축하기 위한 자바스크립트 라이브러리. (`^18.3.1`)
- **React DOM**: React의 DOM 및 서버 렌더러 진입점. (`^18.3.1`)
- **React Router DOM**: 리액트 애플리케이션을 위한 선언적 라우팅. (`^6.23.1`)
- **Axios**: 브라우저와 Node.js를 위한 프로미스 기반 HTTP 클라이언트. (`^1.7.2`)
- **Swiper**: 하드웨어 가속 전환이 가능한 최신 모바일 터치 슬라이더. (`^11.1.4`)
- **@testing-library/react**: 좋은 테스트 관행을 권장하는 간단하고 완전한 React DOM 테스트 유틸리티. (`^13.4.0`)
- **@testing-library/jest-dom**: DOM의 상태를 테스트하기 위한 커스텀 jest 매처. (`^5.17.0`)
- **@testing-library/user-event**: 사용자가 이벤트를 발생시키는 것과 동일한 방식으로 이벤트를 발생시킴. (`^13.5.0`)
- **Web Vitals**: 필수 웹 바이탈 메트릭을 측정하기 위한 작은 라이브러리. (`^2.1.4`)

완전한 의존성 목록은 리포지토리 내 react_project 디렉토리에 있는 `package.json` 파일을 참조하세요.


### 설치 및 실행 방법
- 웹 서비스
    1. 레포지토리 클론 및 웹 서비스 관련 의존성 설치 
        ```
        git clone https://github.com/san-sae/WEBSW_PROJECT.git
        cd WEBSW_PROJECT/react_project
        npm install
        ```
    1. 웹 서비스 실행
        ```
        npm start
        ```
- 서버(제출된 문의를 메일로 받고 싶은 경우, 새로운 터미널로 수행)
    1. 서버 관련 의존성 설치
        ```
        cd WEBSW_PROJECT/react_project/backend
        npm install axios
        npm install nodemailer
        ```
    1. 서버 시작
       ```
       node app.js
       ```

### 실행화면
- 회원가입 창  
  ![image](https://github.com/san-sae/WEBSW_PROJECT/assets/97453758/c2d2be6d-5d08-417b-9c67-dba8a5da611e)

- 로그인 창  
  ![image](https://github.com/san-sae/WEBSW_PROJECT/assets/97453758/e245a0cb-e00f-43d8-bb09-69e7805f20cf)
- 홈페이지  
  ![image](https://github.com/san-sae/WEBSW_PROJECT/assets/97453758/a5354300-bae9-497d-b851-d5cc395fde27)
- 도서 목록 페이지  
  ![image](https://github.com/san-sae/WEBSW_PROJECT/assets/97453758/044be3af-6f64-4090-be24-93ebd27b9f6c)
- 리뷰 작성 페이지  
  ![image](https://github.com/san-sae/WEBSW_PROJECT/assets/97453758/d03504e6-06da-4b81-9a2c-215f5a831dea)
- 독립서점 페이지  
  ![image](https://github.com/san-sae/WEBSW_PROJECT/assets/97453758/d3eb3628-c552-4d0c-a539-631cd2150c68)
- 문의 페이지  
  ![image](https://github.com/san-sae/WEBSW_PROJECT/assets/97453758/d88cc462-7e13-42bd-8c1b-27d89b4dd65a)




### License
```
MIT License

Copyright (c) 2024 cbnuBooklog

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```


