# 책 리뷰 작성 서비스

### 서비스 설명
이 서비스는 사용자가 독서를 마친 후, 특정 책에 대한 만족도, 읽은 기간 등을 기록하고 리뷰를 저장할 수 있는 웹 플랫폼입니다. 이 웹 애플리케이션은 독서 경험을 더욱 풍부하고 체계적으로 관리할 수 있도록 설계되었습니다.

- 정상 시나리오
    1. 회원가입 또는 로그인을 통해 웹 서비스에 접속한다.
    2. 홈 페이지에서 베스트셀러 순으로 나열된 책들을 볼 수 있다.
    3. 네비게이션바의 "책목록"을 클릭한다.
    4. 리뷰할 책에 해당하는 "리뷰하기"를 클릭한다.
    5. 별점, 난이도, 완독시간, 리뷰 내용을 작성한다.
    6. 리뷰 제출 버튼을 누른다.
- 예외 시나리오  
    1.1. 독립서점에 관한 내용이 보고 싶을 경우, 네비게이션바의 "독립서점"을 클릭한다.    
        1.1.1. 독립 출판사 사이트를 구경하고 싶은 경우, 해당 사이트 링크를 클릭한다.
    1.2. 사용자는 문의할 내용이 있는 경우, 네비게이션바의 "문의하기"를 클릭한다.    
        1.2.1. 이메일, 제목, 문의 내용을 입력한다.  
        1.2.2 제출 버튼을 클릭한다.  
        1.2.3. 운영자의 메일로 해당 내용이 전송된다.  
    6.1. 사용자가 별점 또는 난이도 또는 완독시간 또는 리뷰 내용에 대해 입력하지 않을 경우, 해당 입력폼에 빨간색 테두리로 표시한다.


### 개발 기간
2024. ~ 2024.06.18

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


### 설치 방법
1. 리포지토리를 클론합니다: 
    ```
    git clone https://github.com/san-sae/WEBSW_PROJECT.git
    cd WEBSW_PROJECT
    ```
1. 의존성을 설치합니다.
    ```
    npm install
    ```
### 실행 방법
1. 개발 서버를 시작합니다: 
    ```
    $ cd react_project
    $ npm start
    ```

### 실행화면


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


