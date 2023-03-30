import addDivToBody from "./demo";
import $ from "jquery";

test(" test addDivToBody", () => {
  addDivToBody();
  addDivToBody();
  expect($("body").find("div").length).toBe(2);
});

//node环境， 不具备dom
// jest 在node环境下自己模拟了一套dom的api， 即jsDom
