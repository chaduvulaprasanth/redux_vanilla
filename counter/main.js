let counter = document.querySelector(".counter");
let counterValue = document.querySelector(".counterValue");
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let reset = document.querySelector(".reset");
let btn5 = document.querySelector(".btn5");
let btn8 = document.querySelector(".btn8");
let btn10 = document.querySelector(".btn10");
let btn12 = document.querySelector(".btn12");
let btn14 = document.querySelector(".btn14");
let btn16 = document.querySelector(".btn16");
let wrapper = document.querySelector(".wrapper");
let store = Redux.createStore(reducer);

function reducer(state = 0, action) {
  switch (action.type) {
    case "inc":
      if (state > 99) {
        alert("you can't exceed more than 100");
        return state;
      } else {
        return state + action.payload;
      }
    case "dec":
      if (state < 1) {
        alert("you can't go below 0");
        return state;
      } else {
        return state - action.payload;
      }
    case "reset":
      return (state = 0);

    default:
      return state;
  }
}

let val = 1;

function INCREMENT(val) {
  return store.dispatch({ type: "inc", payload: val });
}

function DECEREMENT(val) {
  return store.dispatch({ type: "dec", payload: val });
}

inc.addEventListener("click", () => INCREMENT(val));

dec.addEventListener("click", () => DECEREMENT(val));

reset.addEventListener("click", () => {
  store.dispatch({ type: "reset" });
});

btn5.addEventListener("click", () => {
  val = 5;
});

btn8.addEventListener("click", () => {
  val = 8;
});

btn10.addEventListener("click", () => {
  val = 10;
});

btn12.addEventListener("click", () => {
  val = 12;
});

btn14.addEventListener("click", () => {
  val = 14;
});

btn16.addEventListener("click", () => {
  val = 16;
});

store.subscribe(() => {
  counterValue.innerText = store.getState();
  counter.innerText = `count by ${val}`;
});

counterValue.innerText = store.getState();

counter.innerText = `count by ${val}`;
