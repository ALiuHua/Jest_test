import { generateConfig, generateAnotherConfig } from "./snapshot";

// test("test generateConfig function", () => {
//   expect(generateConfig()).toMatchSnapshot();
// });

// test.only("test generateAnotherConfig function", () => {
//   expect(generateAnotherConfig()).toMatchSnapshot({
//     time: expect.any(Date),
//   });
// });

//update snapshot
//w => u
//w => i => u

//inline snapshot
/**
 *1.  npm install prettier@1.18.2 --save
 *2.  .toMatchInlineSnapshot
 */

test.only("test generateAnotherConfig function", () => {
  expect(generateAnotherConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date),
    },
    `
    Object {
      "domain": "https://localhost",
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
