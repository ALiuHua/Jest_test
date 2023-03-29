import axios from "axios";
import { runCallback, getData } from "./demo";

jest.mock("axios");
//1. 捕获函数的调用和返回结果，以及this和调用顺序
//2. 自由的设置返回结果
//3.  mock 改变函数的内部实现

//测试接受callback函数作为参数的函数

//最初设想, 自定义一个callback然后测试返回值是否如预期

// test("test runCallback", () => {
//   function func() {
//     return "hello";
//   }
//   expect(runCallback(func)).toBe("hello");
// });

//above会出错是因为runCallback虽然会运行callback函数，但是并不会有返回值
//如此我们需要改变原来的run Callback函数来返回结果才能通过，这个不科学。

test.only("test runCallback", () => {
  const func = jest.fn(() => {
    return 456;
  });
  //Mock function, 捕获函数的调用及自由设置返回结果，this及调用顺序 （普通的自定义函数无法追溯是否被调用）

  //   const func = jest.fn(() => {
  //     return 456;
  //   });   //每次返回值相同
  /*
    等价于 func.mockImplementation(()=>{
    return 456
    })
 */

  // func.mockRetrunValue("1234") //每次返回值相同
  func.mockReturnValueOnce("Abc"); //
  func.mockReturnValueOnce("Abcd");
  //   runCallback(func);
  //   runCallback(func);
  runCallback(func);
  expect(func).toBeCalled();
  console.log(func.mock);
  expect(func.mock.calls[0]).toEqual([]);
  //expect(func.mock.calls[0]).toEqual(["abc"]);
  expect(func).toBeCalledWith(); //如果有多次调用来判断是否每次调用时传入的参数
  //expect(func).toBeCalledWith("abc");
  /*
      {
        calls: [ [], [], [] ],
        instances: [ undefined, undefined, undefined ],
        invocationCallOrder: [ 1, 2, 3 ],
        results: [
            { type: 'return', value: 'Abc' },
            { type: 'return', value: 'Abcd' },
            { type: 'return', value: 456 }
      ]
    }

  */
});

// mock ajax fetch //mock 改变函数的内部实现
test("test getData", async () => {
  //从时间上考量，我们也不应该发送真正的请求，太费时
  // 我们前端只需要测试请求确实发送了就可以了，至于返回结果的问题是后端需要测试的

  axios.get.mockResolvedValue({ data: "hello" });
  //   axios.get.mockResolvedValueOnce({ data: "hello" });

  await getData().then((data) => {
    expect(data).toBe("hello");
  });
});
