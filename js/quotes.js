const quotes = [
  {
    quote: "많이 생각하는 모든 것들은 문제가 된다.",
    author: "프레드리히 니체"
  },
  {
    quote: "공포를 느껴라, 그리고 그래도 도전하라.",
    author: "수잔 제퍼스"
  },
  {
    quote: "내가 상상할 수 있는 가장 슬픈 일은 사치에 익숙해지는 것이다.",
    author: "찰리 채플린"
  },
  {
    quote: "미래를 결정짓고 싶다면 과거를 공부하라.",
    author: "공자"
  },
  {
    quote: "약한 자는 절대 누군가를 용서할 수 없다. 용서는 강한 자의 특권이다.",
    author: "마하트마 간디"
  },
  {
    quote: "지나침은 모자람만 못하다.(과유불급)",
    author: "공자"
  },
  {
    quote:
      "이 세상의 유일한 악마는 우리 마음에서 날뛰고 있기에, 모든 전투를 마음 속에서 싸워야 한다.",
    author: "마하트마 간디"
  },
  {
    quote: "나약한 태도는 성격도 나약하게 만든다.",
    author: "알버트 아인슈타인"
  },
  {
    quote:
      "당신의 노력을 존중하라. 당신 자신을 존중하라. 자존감은 자제력을 낳는다. 이 둘을 모두 겸비하면, 진정한 힘을 갖게 된다.",
    author: "클린트 이스트우드"
  },
  {
    quote: "성공한 사람이 아니라 가치있는 사람이 되기 위해 힘쓰라.",
    author: "알버트 아인슈타인"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

// setInterval(seconds, 500);
