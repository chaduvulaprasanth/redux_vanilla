let counter = document.querySelector(".counter");
let counterValue = document.querySelector(".counterValue");
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

wrapper.addEventListener("click", event => {
  switch (event.target.innerText) {
    case "Increment":
      return store.dispatch({ type: "inc", payload: val });
    case "Decrement":
      return store.dispatch({ type: "dec", payload: val });
    case "Reset":
      return store.dispatch({ type: "reset" });
    case "5":
      return (val = 5);
    case "8":
      return (val = 8);
    case "10":
      return (val = 10);
    case "12":
      return (val = 12);
    case "14":
      return (val = 14);
    case "16":
      return (val = 16);
    default:
      return val;
  }
});

store.subscribe(() => {
  counterValue.innerText = store.getState();
  counter.innerText = `count by ${val}`;
});

counterValue.innerText = store.getState();

counter.innerText = `count by ${val}`;
