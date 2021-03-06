# Node + React 기본



## 1. Node JS



### #1 소개

**보일러 플레이트란?**

어떤 웹 사이트를 만들 때 로그인/회원가입 기능은 들어간다.

그러한 자주 쓰이는 기능은 재사용할 수 있게 만들어 두고 최소한의 변경으로 빠르게 여러곳에서 재사용할 수 있게 하는 코드를 말한다.



### #2 Node.js 와 Express js 다운로드 하기

#### **Node.js 란?**

노드란 크롬 v8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다. Node.js는 이벤트 기반, 논 블로킹 I/O 모델을 사용해 가볍고 효율적입니다. Node.js의 패키지 생태계인 npm은 세계에서 가장 큰 소스 라이브러리 생태계이기도 합니다.

> 노드로 자바스크립트를 브라우저가 아닌 서버 사이드에서도 쓸 수 있게 되었음. 



#### **Express js**

노드 제이에스를 쉽게 이용할 수 있게 해주는 프레임워크라고 말할 수 있다.



#### 실습

노드 다운로드 후 

boiler-plate 파일 만들고 **npm 패키지 만들기 **-> package.json

> C:\nodejs\boiler-plate> npm init 



**index.js** 

- 백엔드 시작점



**express js 다운 받기**

Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.
**PS C:\nodejs\boiler-plate> npm install express --save**
npm notice created a lockfile as package-lock.json. You should commit 
this file.
npm WARN boiler-plate@1.0.0 No description
npm WARN boiler-plate@1.0.0 No repository field.                      this file.        

+ express@4.17.1
added 50 packages from 37 contributors and audited 50 packages in 23.96s
found 0 vulnerabilities 



**node_module**

- 다운 받은 dependencies들은 다 이 폴더에서 관리됨.



index.js에서 기본적인 express js 앱 만들기

http://expressjs.com/en/starter/hello-world.html



실행방법

> PS C:\nodejs\boiler-plate> npm run start



**[참고] Error : MongooseServerSelectionError 해결방법** 

> https://www.inflearn.com/questions/29435





### #3 몽고 DB 연결

1) 몽고 DB 사이트 가기 -> https://www.mongodb.com/

2) 회원가입하기

3) CLUSTER (클러스터) 만들기

4) 몽고DB 유저 생성 -> 아이디 비번 기억해야함 !

5) Mongoose 알아보기 -> 간단하게 몽고 DB를 편하게 쓸 수 있는 Object Modeling Tool이다.

6) Mongoose 다운로드 

> npm install mongoose --save



**NoSQL**

빅데이터를 다룰 때 RDBMS로만 트래픽을 감당하기 어려워져 이를 해결하기 위해 탄생한 것이 NoSQL입니다. 관계형 데이터 모델을 사용하지 않고 SQL을 사용하지 않는 그 이외의 모든 데이터베이스 시스템 또는 데이터 스토어를 일컬어 **NoSQL**이라고 합니다. 가장 큰 특징은 확장성과 기용성, 높은 성능, 그리고 다양한 데이터 형태를 수용할 수 있다는 것입니다. 

**NoSQL**은 무한에 가까운 확장성을 제공하는데, 이를 위해 NoSQL 데이터베이스는 단순한 키와 값의 쌍으로 이루어져 있습니다. 인덱스와 데이터는 분리되어 별도로 운영되며 고정된 스키마도 없습니다. RDBMS와는 다르게 테이블 스키마가 유동적이라 다양한 형태들의 데이터를 유연하게 처리할 수 있습니다. 



**mongoDB**

MongoDB는 C++로 작성된 오픈소스 문서지향적 크로스 플랫폼 데이터베이스다.

- Join이 없으므로 Join이 필요 없도록 데이터 구조화가 필요
- 다양한 종류의 쿼리문을 지원(필터링, 수집, 정렬, 정규표현식 등)
- 관리의 편의성
- 스키마 없는(Schemaless) 데이터베이스를 이용한 신속 개발. 필드를 추가하거나 제거하는 것이 매우 쉬워짐
- 쉬운 수평 확장성
- 인덱싱 제공



**RDMS와 비교**

| **MySQL 용어** | **mongoDB 용어/개념** |
| -------------- | --------------------- |
| database       | database              |
| table          | collection            |
| index          | index                 |
| row            | JSON document         |
| column         | JSON field            |
| join           | embedding and linking |
| primary key    | _id field             |
| group by       | aggregation           |



**mongoose**

Mongoose는 Node.js와 MongoDB를 위한 ODM(Object Data Mapping) 라이브러리입니다. ODM의 사용은 코드 구성이나 개발 편의성 측면에서 장점이 많습니다. 





### #4 MongoDB Model & Schema

**Model이란?**

Model은 Schema를 감싸주는 역할

**Schema란?**

하나하나 정보들을 지정해 줄 수 있는것?





### #5 Git 설치

- git 저장소를 만듬

  > git init

- git 상태 확인

  > git status

- git에 잘못 add했을 때 지움

  > git rm --cached [해당이름] -r

- git remote

  > git remote add origin [git 주소]

- git clone

  > git clone [git 주소]

- git push -u origin master

![image-20201028183037298](C:\Users\User\AppData\Roaming\Typora\typora-user-images\image-20201028183037298.png)





### #6 SSH를 이용해 GITHUB 연결

**SSH(Secure Shell)** 

SSH란 Secure Shell Protocol, 즉 네트워크 프로토콜 중 하나로 컴퓨터와 컴퓨터가 인터넷과 같은 Public Network를 통해 서로 통신을 할 때 보안적으로 안전하게 통신을 하기 위해 사용하는 프로토콜입니다. 대표적인 사용의 예는 다음과 같습니다.

1. 데이터 전송
2. 원격 제어

먼저 데이터 전송의 예로는 원격 저장소인 깃헙이 있을 수 있습니다. 소스 코드를 원격 저장소인 깃헙에 푸쉬할 때 여러분은 SSH를 활용해 파일을 전송하게 됩니다.

다음으로는 원격 제어입니다. 웹 개발 공부를 하시는 분이시라면 AWS와 같은 클라우드 서비스를 이용해보셨을 것입니다. 우리는 AWS의 인스턴스 서버에 접속하여 해당 머신에 명령을 내리기 위해서도 SSH를 통한 접속을 해야 합니다.



**Git**

소스코드를 관리하는 tool

**GIT HUB**

git을 사용하는서비스



SSH 설정방법 : https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent



1) SSH KEY를 만든다.

2) SSH Agent를 Background에 킨다.

3) SSH Private Key를 SSH-AGENT에 넣는다.

​	id_res    id_rea.pub

​	.pub <- 이런식으로 된게 SSH public key이다.

4) 생성된 SSH Public Key를 3rd Party(깃헙 등)에 준다.





### #7 BodyParser & PostMan & 회원가입 기능

client-server 통신할 때 Request with Body

Body데이터를 분석(parse)해서 req.body로 출력해주는것

-> Body-parser Dependency

> ​	npm install body-parser --save



Client에서 Request를 줘야 하는데 현제 Client가 없으니 POSTMAN을 이용해서 request를 보낸다.





### #8 Nodemon 설치

**NODE MON** 

소스를 변경할 때 그걸 감지해서 자동으로 서버를 재 시작해주는 tool



Node Mon 다운로드

> npm install nodemon --save-dev

-dev : development 모드, 로컬에서 할 때만 사용을 하겠다는 뜻



시작할 때 nodemon으로 시작 

-> script 하나 더 만들기





### #9 비밀 설정 정보 관리

환경변수 process.env.NODE_ENV

- Local 환경에서 : development
- Deploy(배포) 한 후 : production  // heroku





### #10 Bcryt로 비밀번호 암호화 하기

bcrypt 다운로드

> npm install bcrypt --save



**Bcrypt로 비밀번호 암호화 하는 순서**

1. Register Route로 가기
2. 유저 정보들(Account, Password 등등)을 데이터 베이스에 저장하기 전에가 암호화할 타이밍
3. bcrypt 사이트 보면서 진행  https://www.npmjs.com/package/bcrypt
4. saltRounds = 10 (10자리인 솔트를 만듬) -> salt 생성 -> salt를 이용해 비밀번호를 암호화 해야함
5. salt 를 이용하여 hash password(암호화된 비밀번호)를 만들기
6. 비밀번호 바꿀 때만 작동할 수 있게 조건을 걸어주기 





### #11 로그인 기능 with Bcrypt (1)

**login route 만들기**

1. 데이터 베이스에서 요청한 E-mail 찾기 

   -> User.findOpen()

2. 데이터 베이스에서 요청한 E-mail이 있다면 비밀번호가 같은지 확인 

   -> Bcrypt를 이용하여 plain password와 암호화된 (Hashed) 패스워드가 같은지 확인

3. 비밀번호까지 같다면 Token을 생성

   -> 토큰 생성을 위해서 JSONWEBTOKEN 라이브러리를 다운로드

   > npm install jsonwebtoken --save 





### #12 토큰 생성 with jsonwebtoken

로그인 기능 (2)



**토큰(Token)기반 인증에 대한 소개**

토큰(Token) 기반 인증은 모던 웹서비스에서 정말 많이 사용되고 있습니다. 여러분이 API 를 사용하는 웹서비스를 개발한다면, 토큰을 사용하여 유저들의 인증작업을 처리하는것이 가장 좋은 방법입니다.

토큰 기반 인증 시스템을 선택하는 이유

1. Stateless 서버
2. 모바일 어플리케이션에 적합
3. 인증정보를 다른 어플리케이션으로 전달
4. 보안



**쿠키, 세션, 토큰 비교**

| **장점**                | **단점**                                                     |                                                              |
| ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Cookie**              | 서버 공간 절약                                               | 보안 취약 쿠키 용량 제한 브라우저 공유 불가능 쿠키의 사이즈가 커질수록 네트워크 부하 |
| **Session**             | 쿠키보다 보안 향상 용량 제한 X 브라우저 의존도 낮음 네트워크 부하 낮음 | 서버 부하                                                    |
| **JWT(Json Web Token)** | 쿠키장점 + 세션장점 PC와 모바일 공유가능                     | 토큰 길이가 늘어날수록 네트워크 부하                         |



**JSON Web Token**

JSON Web Token (JWT) 은 웹표준 ([RFC 7519](https://tools.ietf.org/html/rfc7519)) 으로서 두 개체에서 JSON 객체를 사용하여 가볍고 자가수용적인 (self-contained) 방식으로 정보를 안전성 있게 전달해줍니다.

- 수많은 프로그래밍 언어에서 지원
- 자가 수용적 (self-contained)
- 쉽게 전달 될 수 있습니다.





### #13 Auth 기능 만들기

**auth route 만들기** 

why & what?

1. 페이지 이동 때마다 로그인되었는지 안되어있는지, 관리자 유저인지등을 체크

 	2. 글을 쓸 때나 지울 때 같은데 권한이 있는지 체크

how?

![image-20201029224154822](C:\Users\User\AppData\Roaming\Typora\typora-user-images\image-20201029224154822.png)

​	1.cookie에 저장된 Token을 Server에서 가져와서 복호화를 한다.

 	2. 복호화를 하면 User ID가 나오는데 그 user i를 이용하해서 데이터베이스 User Collection에서 유저를 찾은 후 쿠키에서 받아온 token이 유저도 갖고 있는지 확인
     - 쿠키가 일치하지 않을 때 : Authentication False !
     - 쿠키가 일치 할 때 : Authentication True ! 그리고 그 해당 하는 유저의 정보들을 선별해서 (아이디, 이미지, 등등)





### #14 로그아웃 기능

1. 로그아웃 Route 만들기
2. 로그아웃 하려는 유저를 데이터베이스에서 찾아서 그 유저의 토큰을 지워준다.





## 2. React JS

### #15 리액트란?

- 프레임워크라고 알고 있지만 **라이브러리**(Library)다

- Components : moduler과 비슷하게 컴포넌트로 이루어져 있어서 reusable이 뛰어남.
- Virtual DOM : 만약 10개의 리스트가있다. 그중에 한가지의 리스트만 업데이트됨. 그 바뀐 한가지 아이템만 DOM에서 바꿔준다 !
  1. JSX(우선HTML으로 알아두기)을 렌더링 한다. 그러면 Virtual DOM이 Update가 됨
  2. Virtual DOM이 이전 virtual DOM에서 찍어둔 Snapshot과 비교를 해서 바뀐 부분을 찾는다. 이과정을 "diffing"이라고 부름
  3. 그러면 그 바뀐 부분만 Real DOM에서 바꿔준다.



### #16 Create-React-App

create-react-app Command를 이용해 Babel과 Webpack을 자동으로 사용가능

-> Babel : 최신 자바스크립트 문법을 지원하지 않는 브라주저들을 위해서 최신 자바스크립트 문법을 구형브라우저에서도 돌 수 있게 변환시켜줌 

-> Webpack : 웹사이트를 만들 때 복잡하게 있는 모듈들을 웹팩을 이용해서 번들(묶어주는 것)을 시켜줌



- client 와 server로 나누어 clinet 폴더에서 react js 를 다룬다.

  1. config / middleware / models / index.js 는 server 폴더로 옮긴다.

  2. `cd client` 로 client 디렉토리에 들어와 `npx create-react-app .`으로 다운받음 

     > 원래는 npm install -g create-react-app 이렇게 했었다.





### #17 npm npx

NPM(Node package manager)

**npm 이란?**

	- 레지스트리(저장소) 역할을 함
	- package.json에서 확인 할 수 있다.



npm install globally ! [-g] 

**%AppData%/npm** on window 에 저장됨



**npx ?**

- npx가 npm registry에서 create-react-app을 찾아서(look up) **다운로드 없이** 실행시켜준다.
- disk space를 낭비하지 않을 수 있다.
- 항상 최신 버전을 사용할 수 있다.





### #18 구조 설명

App.js -> 

index.js -> 

index.html ->

- Webpack은 src 디렉토리만 관리해줌 (public 디렉토리는 관리 X) -> images는 되도록 src디렉토리에 넣어주어 관리해주는 것이 좋음



react 실행하는 법

`cd client`

`npm run start`





### #19 CRA to Our Boilerplate

Boiler Plate에 특성화된 구조

- _actions | _reducers : Redux 를 위한 폴더들
- components/views : Page들을 넣는다
- components/views/Sections : 해당 페이지에 관련된 css 파일이나, component들을 넣는다.



- App.js : Routing 관련 일을 처리한다.
- Config.js : 환경 변수같은 것들을 정하는 곳이다.
- hoc : Higher Order Component의 약자로 (여러가지 컴포넌트를 넣어두어 해당 유저가 해당 페이지에 들어갈 자격이 되는지를 선별해 해당 component에 가게 해주고 아니면 다른 페이지로 보내버림)
- utils : 여러 군데에서 쓰일 수 있는 것들을 모아두어 어디서든 쓸 수 있게 해줌



![image-20201116230728671](C:\Users\User\AppData\Roaming\Typora\typora-user-images\image-20201116230728671.png)



> es7 다운 받으면 rfce : functional compoent | rcc : class compoent





### #20 React Router Dom

https://reactrouter.com/web/example/basic

- reat router dom 설치

  `cd client`

  `npm install react-router-dom --save`





### #21 데이터 Flow & Axious

React JS 부분에서 Request를 보내면 되는데 그 때 사용 할게 AXIOUS

jQeury를 사용할 때 AJAX라고 보면됨.

`npm install axios --save` 로 다운 





### #22 CORS 이슈, Proxy 설정

Cors 정책 때문에 Cross-Origin Resource Sharing 보안을 위해

Proxy

https://create-react-app.dev/docs/proxying-api-requests-in-development

-> Configuring the Proxy Manually



client 부분에

` npm install http-proxy-middleware --save`



-> src/setupProxy.js



ant design

> 출처 : inflearn.com/course/따라하며-배우는-노드-리액트-기본/dashboard

