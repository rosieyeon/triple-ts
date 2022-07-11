<div align="center">

# Triple Frontend

  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> 
  <br/>
  <img src="https://user-images.githubusercontent.com/70363530/178282732-cc515705-8fce-41ac-b67b-30136f1921db.gif"/>
  <br/>

<span>직접 완성한 화면의 모습</span>

</div>

<br>

## 프로젝트 시작 방법

```bash
$ npm install
$ npm start
```

<br>

## 폴더 구조

```
.
└── triple-dev
    ├── public
    │   ├── favicon.ico
    │   ├── images
    │   │   ├── badge-apple.png
    │   │   ├── play-store.png
    │   │   └── triple.png
    │   ├── index.html
    │   └── robots.txt
    ├── src
    │   ├── App.css
    │   ├── App.tsx
    │   ├── components
    │   │   ├── awards
    │   │   │   ├── Awards.tsx
    │   │   │   └── AwardsItem.tsx
    │   │   ├── main
    │   │   │   └── MainImage.tsx
    │   │   └── statistics
    │   │       ├── Statistics.tsx
    │   │       └── StatisticsItem.tsx
    │   ├── hooks
    │   │   └── useCountup.tsx
    │   └── styles
    │       ├── globalStyle.ts
    │       └── theme.ts
		...
```

폴더는 위와 같은 형태로 나누어 과제를 진행했습니다.

<br>

### components

페이지를 이루는 세가지의 섹션(왼쪽 사진, 카운트업 되는 숫자로 보여지는 통계, 수상)으로 구분한 뒤 `components` 폴더 안에 각각의 폴더를 생성하여 파일을 만들어주었습니다.

React는 컴포넌트 단위의 개발이 최대 장점이라고 생각했기에 이 장점을 극대화 시켜주기 위해 `styled-components`를 이용하여 css를 적용시켰습니다. 따라서 자유롭게 css 커스텀 컴포넌트를 생성할 수 있었습니다.

<br>

### styles

세가지의 섹션에서 모두 동일한 애니메이션(opacity가 진해지며 떠오르는 움직임)이 적용되기 때문에, 한번에 적용하기 위해 `styles` 폴더 안에 `themes.ts` 안에 구현해주었습니다. 이후 애니메이션을 적용시킬 때에는 아래와 같은 명령어를 통해 간편하게 불러왔습니다.

```javascript
${({ theme }) => theme.defaultAnimation}
```

<br>

### hooks

숫자를 카운트업해주는 함수를 만들었습니다. `setInterval()`을 이용하여 1000/60초마다 숫자가 카운트되도록 제작했습니다. 원하는 숫자에 가까워질수록 카운트가 느려져야 했기 때문에 숫자의 증가폭을 점점 줄이는 방식으로 코드를 제작했습니다. 처음에 만든 함수는 아래와 같습니다.

```javascript
useEffect(() => {
  let currentNum = target;
  const countup = setInterval(() => {
    const countNum = Math.ceil(target - currentNum);

    if (currentNum < 0) {
      clearInterval(countup);
    }

    const stepNum = currentNum / 10;
    currentNum -= stepNum;
    setCount(countNum);
  }, frame);
}, []);
```

`stepNum`이 숫자의 증가폭입니다. 함수가 진행될수록 이 증가폭을 줄이고, 이를 `currentNum`에서 뺴준 뒤 `currentNum`을 원하는 숫자 `target`에서 계속해서 빼주는 방식이었습니다. 하지만 이 방법으로 진행하려고 하니, `setInterval` 함수가 끝나지 않고 계속 도는 에러가 발생했으며, 2000ms의 duration 조건은 만족시키기 너무 어렵다고 판단하여 수식을 조금 바꾸어보았습니다.

`target`에서 빼주는 방식이 아닌, `target`에 점점 증가하는 `percentage`를 곱해주는 방식입니다. `percentage`의 증가폭은 극적으로 줄어들어야 하므로 지수함수의 그래프를 이용하기로 했고 아래와 같은 방식으로 계산을 진행해주었습니다.

```javascript
const current = ++cnt / (duration / frame);
const percentage = 1 - Math.pow(2, -10 * current);
```

이렇게 진행한 결과, 2000ms의 duration 조건도 만족할 수 있었으며 점점 숫자가 느리게 증가하는 것도 확인할 수 있었습니다.

<br>

## 마무리하며

과제를 진행하면서, 조금이라도 효율적으로 컴포넌트를 나누기 위해 고민했으며 추후 유지 보수 단계에서 좀 더 시간을 단축할 수 있도록 하기 위해 노력했습니다.
