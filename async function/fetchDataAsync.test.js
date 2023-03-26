import { fetchData, fetchDataError } from "./fetchDataAsync";

test("test featchDataAsync return { success: true }", () => {
  return expect(fetchData()).resolves.toMatchObject({
    data: { success: true },
  });
});

// fetchData().then(res=>console.log(res))
// above: expect(fetchData()).resolves 意思是fetchData()返回的所有结果 即res。
// 所以我们用了toMatchObject
// 必须要return

test("fetchDataError with error result", () => {
  //axios在请求失败时，确实会throw一个error出来
  return expect(fetchDataError()).rejects.toThrow();
});

test("test fetchDataAsync with async and await", async () => {
  const result = await fetchData();
  console.log(result);
  //   expect(result.data).toEqual({ success: true });
  expect(result).toMatchObject({ data: { success: true } });
});

test("test fetchDataAsync with async and await", async () => {
  await expect(fetchData()).toMatchObject({ data: { success: true } });
});

test("test fetchDataAsync with async and await", async () => {
  await expect(fetchDataError()).rejects.toThrow();
});

test("test fetchDataError with async and await", async () => {
  expect.assertions(1);
  try {
    await fetchDataError();
  } catch (e) {
    console.log(e);
    console.log(e.toString());
    expect(e.toString()).toEqual("Error: Request failed with status code 404");
  }
});
