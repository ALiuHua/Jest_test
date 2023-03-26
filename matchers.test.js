// test("add function test for 3 + 7", () => {
//   const a = "myReact";
//   expect(a).toMatch("re");
// });
/* 

#1 .toBe  匹配器 matchers  

类似于 Object.is / ===

const a = { one : 1 };
expect(a).toBe({ one : 1 })  false 因为应用地址不同


#2 .toEqual   测试对象内容相等(不涉及引用地址)
const a = { one : 1 };
expect(a).toBe({ one : 1 })  true 因为内容相同

#3 .toBeNull  匹配器
const a = undefined;
expect(a).toBeNull()  false 因为undefined！==null


#4 .toBeUndefined  匹配器

const a = null;
expect(a).toBeUndefined()  false   因为null ！== undefined


#5 .toBeDefined   匹配器

const a = null;
expect(a).toBeDefined()  true   因为a被定义过且不为undefined

const a = undefined;
expect(a).toBeDefined()  false   因为a为undefine

#6 .toBeTruthy   匹配器

#7 .toBeFalsy   匹配器

#8 .not   匹配器

  expect(a).not.toBeFalsy() === expect(a).toBeTruthy()




===数字相关匹配器(比较双方必须都为数字类型，即严格类型，没有类型转换)

#1  .toBeGreaterThan

#2  .toBeLessThan

#3  .toBeGreaterThanOrEqual

#4  .toBeCloseTo 计算浮点数的时候有用
   
    test("add function test for 3 + 7", () => {
        const a = 0.1;
        const b = 0.2;
        expect(a+b).toEqual(0.3);
    });
    // will not pass 因为js在计算浮点数的时候会有误差（二进制）0.3000000004

    test("add function test for 3 + 7", () => {
        const a = 0.1;
        const b = 0.2;
        expect(a+b).toBeCloseTo(0.3);
    });
    // will pass

    test("add function test for 3 + 7", () => {
        const a = 0.1;
        const b = 0.2;
        expect(a+b).toBeCloseTo(0.4);
    });
    // will not pass

====== string相关匹配器
#1  .toMatch  检测字符串是否包含一段字符串(大小写敏感)

     expect("myReact").toMatch("Re")  //will pass

=====Array/Set 相关匹配器
#1 .toContain    

=====处理异常情况

#1 .toThrow

    const toThrowNewErrow = () => {
        throw new Error("this is a test error");
    };

    test("test if an error can be throwed", () => {
        expect(toThrowNewErrow).toThrow();
    })
    //will pass

    test("test if an error can be throwed", () => {
        expect(toThrowNewErrow).not.toThrow();
    })
    //will not pass

    test("test if an error can be throwed", () => {
        expect(toThrowNewErrow).not.toThrow("this is a new error");
    })
    //will not pass

    test("test if an error can be throwed", () => {
        expect(toThrowNewErrow).not.toThrow("this is a test error");
    })
    //will pass
*/

const toThrowNewErrow = () => {
  throw new Error("this is a test error1");
};

test("test if an error can be throwed", () => {
  expect(toThrowNewErrow).toThrow();
});
