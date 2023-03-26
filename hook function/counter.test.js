import Counter from "./counter";
//Goal: 我们希望不同的测试用例之前不会有影响，例如我们希望不同的测试用例中引用的counter实例不要互相关联
let counter = null;

beforeAll(() => {
  //所有测试用例执行前的统一处理
  console.log("BeforeAll");
  //在这里实例化counter仍然会导致counter在不同测试之间公用
  // ## counter = new Counter();
});
afterEach(() => {
  console.log("AfterEach");
});
afterAll(() => {
  //所有测试用例执行完成后的统一处理
  console.log("AfterAll");
});

beforeEach(() => {
  console.log("BeforeEach");
  counter = new Counter();
});
// test("test addOne method in Counter", () => {
//   console.log("addOne");
//   counter.addOne();
//   expect(counter.number).toBe(2);
// });
// test("test minusOne method in Counter", () => {
//   console.log("minusOne");
//   counter.minusOne();
//   expect(counter.number).toBe(0);
// });

// test("test addTwo method in Counter", () => {
//   console.log("addTwo");
//   counter.addTwo();
//   expect(counter.number).toBe(3);
// });
// test("test minusTwo method in Counter", () => {
//   console.log("minusTwo");
//   counter.minusTwo();
//   expect(counter.number).toBe(-1);
// });

//Goal:把相同类型的测试进行分组;这里describe只是分组功能，each相对应地还是每个test函数

describe("test method related to increment", () => {
  test("test addOne method in Counter", () => {
    console.log("addOne");
    counter.addOne();
    expect(counter.number).toBe(2);
  });
  test("test addTwo method in Counter", () => {
    console.log("addTwo");
    counter.addTwo();
    expect(counter.number).toBe(3);
  });
});
describe("test method related to decrement", () => {
  test("test minusOne method in Counter", () => {
    console.log("minusOne");
    counter.minusOne();
    expect(counter.number).toBe(0);
  });
  test("test minusTwo method in Counter", () => {
    console.log("minusTwo");
    counter.minusTwo();
    expect(counter.number).toBe(-1);
  });
});
