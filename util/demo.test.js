jest.mock("./util"); //这句代码会被jest安排第一行执行，无论我们写在哪里
// jest.mock 发现 util 是一个类，会自动把类的构造函数和方法变成 jest.fn()
/*
const Util = jest.fn();
Util.a = jest.fn();
Util.b = jest.fn()
*/

import demoFunction from "./demo";
import Util from "./util";
//因为./util中导出的内容已经被jest.mock("./util")了，
//所以在jest环境下，此导入语句导入的其实是mock的内容

test("unit test for demoFunction", () => {
  //我们测试demoFunction的目标是看 类 有没有实例化，
  //方法有没有被执行； 具体结果我们并不关心

  demoFunction();
  expect(Util).toHaveBeenCalled();
  expect(Util.mock.instances[0].a).toHaveBeenCalled();
  expect(Util.mock.instances[0].b).toHaveBeenCalled();
});

//单元测试为什么需要这么多的mock， 因为单元测试我们关注点是在这个单元上，
//如果这个单元有外部代码的引用，我们通常就会去mock这个外部引用来让测试效率更高。

//1.   jest.mock("./util") //  Jest 的自动mock
//2.   自定义mock    在同级创建 __mocks__ 文件夹，然后自定义相关mock

//3. 自定义mock的另一种写法(不需要创建__mocks__文件夹)
/**
    jest.mock("./util", () => {
    const Util = jest.fn(() => {
        console.log("constructor");
    });
    Util.prototype.a = jest.fn(() => {
        console.log("a");
    });
    Util.prototype.b = jest.fn(() => {
        console.log("b");
    });
    return Util;
    });
 */
