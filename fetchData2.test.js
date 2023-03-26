import { fetchData } from "./fetchData2";

//异步函数返回promise类型的测试：通过then 和 catch语法来测试成功或者失败，
//但是catch法的一个坑是我们需要加上  expect.assertions(1)来确保catch至少能运行一次

test("fetchData return result as { success : true }", () => {
  return fetchData().then((res) => expect(res.data).toEqual({ success: true }));
});

test("fetchData return a 404", () => {
  expect.assertions(1);
  return fetchData().catch((e) =>
    expect(e.toString().indexOf("404") > -1).toBe(true)
  );
});
