# 자료형과 형 변환

## 01. 자바스크립트의 자료형

2섹션 1강 Hello world에서 여러분께 이러한 말씀을 드린 적 있습니다

> 자바스크립트는 동적 타입 언어이므로, 변수는 타입에 관계없이 아무 값이나 담아도 된다.

그러나 위 이야기가 값이 타입을 가지지 않는다는 뜻은 아닙니다.

자바스크립트의 값은 항상 문자열이나 숫자형같은 특정한 자료형에 속합니다.

자바스크립트에는 여덟 가지의 기본 자료형이 존재하며, 변수는 자료형에 관계없이 모든 데이터일 수 있으며, 그렇기에 변수는 어떤 순간에는 문자열이 되고 어떤 순간에는 배열이 될 수 있습니다.



### 1-1. 숫자형 number

숫자형 타입은 number type이라고 부르며, 정수 및 부동소숫점 숫자를 나타냅니다. 숫자형은 우리가 흔히 아는 연산들 사칙연산을 수행할 수 있습니다.

자바스크립트의 숫자형은 특별하게 아래 세가지 특수 값들이 포함됩니다.

> 1. Infinity : 양의 무한대
> 2. \-Infinity : 음의 무한대
> 3. NaN : 숫자가 아님

#### 1-1-1. Infinity & -Infinity

자바스크립트의 Infinity는 숫자형 타입으로 무한대를 의미합니다.

아래와 같은 연산들을 수행할 수 있습니다 (Math.pow 함수는 인자의 거듭제곱, Math.log함수는 인자의 log값을 취합니다)&#x20;

```javascript
console.log(Infinity);          /* Infinity */
console.log(Infinity + 1);      /* Infinity */
console.log(Math.pow(10,1000)); /* Infinity */
console.log(Math.log(0));       /* -Infinity */
console.log(1 / Infinity);      /* 0 */
console.log(1 / 0);             /* Infinity */
```

#### 1-1-2. NaN

NaN은 꽤 중요합니다.

숫자가 아님을 나타내는 이 값은 숫자 타입입니다. 숫자가 아님을 나타내는데 숫자 타입이죠 이 NaN은 계산 도중 에러가 발생했다는 것을 나타냅니다 즉 어떠한 식의 결과가 NaN이라면 해당식에 오류가 존재한다는 것 이죠

아래의 식은 NaN을 유발하는 여러가지 식 들입니다.

```javascript
console.log(parseInt("hi")); /* NaN */
console.log(0 * Infinity); /* NaN */
console.log("안녕" * 3); /* NaN */
```

우리는 NaN을 이용해서 의도한 방향으로 계산이 이루어졌는지 판독할 수 있습니다.

단 비교연산자를 이용해서 NaN을 비교해서는 안됩니다

아래 1번 라인을 보면 NaN과 NaN이 같은것임을 묻는 명령에 false라는 답을 내놓습니다 (여기서 === 연산은 자료형과 값이 모두 같은지 엄격하게 비교하는 비교 연산자 입니다 이에 대해 뒷 강의에서 다룹니다)

2번 라인에서 보이는 것 처럼 NaN은 비교 연산자가 아닌 isNaN()이라는 자바스크립트의 내장 함수를 통해 판독할 수 있습니다

```javascript
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true
```

### 1-2. 문자형 string

자바스크립트에서는  C언어처럼 글자형(char)은 존재하지 않습니다. 따옴표로 묶어 표기하는 문자열(string)만 존재합니다.

따옴표의 종류는 세 가지입니다

> 1. 큰 따옴표 (Double Quote) : "안녕하세요"
> 2. 작은 따옴표 (Single Quote) : '안녕하세요'
> 3. 역 따옴표 (Backtick) : \`안녕하세요\`

큰 따옴표와 작은 따옴표는 같은 의미입니다 이 둘은 차이가 없습니다.

역 따옴표는 변수나 표현식, 상수값을 문자열 내에 동적으로 넣을 수 있게 해줍니다

문자열에 변수나 표현식을 삽입할 수 있는 형식은 아래와 같습니다

```javascript
console.log(`여기는 고정적인 그냥 문자열 ${변수 or 표현식}`)
```



위 예제처럼 ${} 사이에 변수나 표현식을 삽입하면 문자열로 변환되는 것을 알 수 있습니다 아래의 코드를 작성해보면서 더 익숙해 져 보도록 하겠습니다.

```javascript
let name = "이정환";

// 변수를 문자열 중간에 삽입
console.log(`안녕, ${name}!`); // 안녕 이정환

// 표현식을 문자열 중간에 삽입
console.log(`덧셈을 해보자 ${1 + 2}`); // 덧셈을 해보자 3
```

### 1-3. 불린형 boolean

긍정 true나, 부정 false를 나타내는 타입입니다.

true나 false를 저장할 수 있으며, 참이나 거짓을 반환하는 연산의 결과값을 저장하기 위해서도 활용될 수 있습니다.

```javascript
let isJavascript = true; //  O : 지금은 자바스크립트를 하는 중입니다.
let isReact = false; // X : 지금은 아직 React를 하지 않습니다

let isGreater = 4 > 1;
console.log( isGreater ); // true (비교 결과: "yes")
```



### 1-4. null

대부분의 타 언어에서는 변수를 선언하고 초기화하지 않으면 아무런 값이 없다는 것을 알리기 위해 null을 사용하곤 합니다.

그러나 자바스크립트의 null은 이와는 다릅니다, 아무 것도 없음을 알리는 목적은 같으나 자바스크립트의 null은 그 자체로 값이며 타입입니다 쉽게 이야기하자면 직접 null을 할당하지 않으면 null값을 가지지 않는다는 것 입니다

> 특별히 이 값은 아무것도 가리키지 않음을 나타낼 때 null을 할당합니다

```javascript
let number = null
```

&#x20;

### 1-5. undefined

우리가 앞으로 가장 자주 보게 될 친구입니다.

undefined는 null과 같은 의미로 '할당되지 않은 상태'를 나타냅니다 다만 차이점은 변수를 선언하고 초기화 하지 않으면 그 변수는 undefined을 자동으로 할당 받습니다.

```javascript
let number
console.log(number) // undefined 출력
```



### 1-6. 객체

중괄호로 묶여 표시되는 이 객체는 자바스크립트에서 데이터와 함수를 같이 저장하는 집합 타입입니다.

이 객체에 대해서는 뒤의 객체 강의에서 자세히 다루도록 하겠습니다.



### 1-7. typeof 연산

자바스크립트는 동적 타입 언어이기 때문에, 가끔 이 변수가 어떤 타입을 가지고 있는지 알고 싶거나 알아야 할 때가 생깁니다. 이때 사용할 수 있는 연산자가 바로 typeof 연산입니다

typeof 연산자는 인수의 자료형을 반환하며, 아래의 두 가지 문법을 제공합니다.

아래의 두 문법은 결과는 동일합니다.

> 1. typeof arg
> 2. typeof (arg)

아래 예시를 통해 typeof를 사용해 보도록 하겠습니다.

```javascript
console.log(typeof 10) // number

console.log(typeof 'string') // string

console.log(typeof true) // boolean

console.log(typeof null) // object

console.log(typeof undefined) // undefined
```

## 02. 형 변환

### 2-1. 형 변환 이란?

