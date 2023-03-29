jest.mock("./mock");
// jest.unmock("./mock");
import { fetchData } from "./mock";

// import axios from "axios";
// jest.mock("axios");
test("test fetchData", () => {
  //   axios.get.mockResolvedValue({
  //     data: `(function() {
  //         return "123"
  //        })()`,
  //   });

  return fetchData().then((data) => {
    expect(eval(data)).toEqual("123");
  });
});

//1. 目标： 测试fetchData异步函数
//2. 在fetchData同级目录下建立文件夹命名为__mocks__
//3. _mocks__下建立fetchData同名文件和同名函数，来模拟异步返回结果
//4. jest.mock("./mock") 利用jest mock函数
//5. import需要测试的函数（注：经过上面的操作，
//   我们import需要测试的函数时，其实引入的是我们写在__mocks__中的函数）
//6. 总结： 利用__mocks__下的模拟函数来替代真正的函数

// jest config 的auto mock  会检查是否有__mocks__文件夹来确定是否需要自动mock函数

///=====================================
//declarating： 从真正的./mock.js中引入getNumber
const { getNumber } = jest.requireActual("./mock");

test("test getNumber", () => {
  expect(getNumber()).toEqual(123);
});
