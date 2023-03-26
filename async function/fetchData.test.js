import { fetchData } from "./fetchData";

//回调类型的异步函数的测试：
/*

test("fetchData return result as { success : ture }", () => {
  fetchData((data) => {
    expect(data).toEqual({ success: ture });
  });
}); 

*/
//以上测试用例是错误的，结果永远是通过，因为测试只跑到fetchData可以正常运行时就认为是通过的，
//而不会等到里面的回调函数返回结果，即expect(data).toEqual({ success: ture })根本没有运行
//因为我们的测试expect函数（fn）是在异步请求完成后才会被调用

test("fetchData return result as { success : true }", (done) => {
  fetchData((data) => {
    expect(data).toEqual({ success: true });
    done();
  });
});

//以上传入done函数作为回调函数，则测试只有在我们调用done函数的时候才会结束；
//因为我们的测试expect函数（fn）是在异步请求完成后才会被调用，我们用done来表示需要
