const randomColor = require("randomcolor");
let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();

console.log(color1, " ", color2, " ", color3);

// ## 02. 진보된 모듈시스템 ES 모듈시스템

// 원래 자바스크립트의 모듈 시스템은 `Node.js`가 제공하는 `CommonJS`를 사용하였으나, `import`라는 키워드를 대표로 하는 ES 모듈 시스템이 도입된 이후로 많은 프로젝트에서 해당 모듈시스템을 사용하고 있습니다.

// 그러나 모든 패키지가 ES모듈 시스템을 지원하지는 않으므로, `CommonJS`모듈 시스템을 사용할 줄 아는것은 큰 도움이 됩니다. 이번 챕터에서는 두 모듈시스템간의 차이를 이해하고 ES모듈 시스템을 사용해보도록 하겠습니다.
