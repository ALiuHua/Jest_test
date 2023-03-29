import timer from "./timer";
//模拟timer
beforeEach(() => {
  //为了消除快进定时器之间的相互影响
  jest.useFakeTimers();
});

test("timer testing", () => {
  const fn = jest.fn();
  timer(fn);
  // 立即运行所有timer
  jest.runAllTimers();
  //
  //jest.runOnlyPendingTimers();
  //*****用来快进时间
  //jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(2);
  //expect(fn).toHaveBeenCalledTimes(1);
});

test("timer testing by time 1", () => {
  const fn = jest.fn();
  timer(fn);
  //*****用来快进时间
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(1);
  //在上一个3秒的基础上再快进3s
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(2);
});

test("timer testing by time 2", () => {
  const fn = jest.fn();
  timer(fn);
  //*****用来快进时间
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(1);
  //在上一个3秒的基础上再快进3s
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(2);
});
