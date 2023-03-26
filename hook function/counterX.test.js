import Counter from "./counter";
describe("Counter testing", () => {
  let counter = null;
  console.log("describe 1");
  beforeAll(() => {
    console.log("Counter BeforeAll");
  });

  beforeEach(() => {
    console.log("Counter BeforeEach");
    counter = new Counter();
  });

  afterEach(() => {
    console.log("Counter AfterEach");
  });

  afterAll(() => {
    console.log("Counter AfterAll");
  });

  describe("test method related to increment", () => {
    console.log("describe 2");
    beforeEach(() => {
      console.log("increment beforeEach");
    });
    beforeAll(() => {
      console.log("increment beforeAll");
    });
    afterAll(() => {
      console.log("increment afterAll");
    });
    afterEach(() => {
      console.log("increment afterEach");
    });
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
    console.log("describe 3");
    test("test minusOne method in Counter", () => {
      console.log("minusOne");
      counter.minusOne();
      expect(counter.number).toBe(0);
    });
    test.only("test minusTwo method in Counter", () => {
      console.log("minusTwo");
      counter.minusTwo();
      expect(counter.number).toBe(-1);
    });
  });
});

//四个钩子函数的作用域是describe函数；这里的“作用域”是指外部的钩子函数会作用在每一个
//内层的test函数上(before:由外到内， after：由内到外)，但是内层的不会作用的外层或者同级

// .only方法来控制单个测试用例
