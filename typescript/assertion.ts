/**
 * 类型断言
 */

// 将一个联合类型断言为其中一个类型
interface Cat {
  name: string;
  run(): void;
}

interface Fish {
  name: string;
  swim(): void;
}

function isFish(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === 'function') {
    return true;
  }
  return false
}


// 将父类断言为更具体的子类
interface ApiError extends Error {
  code: number;
}

interface StatusError extends Error {
  statusCode: number;
}

function isApiError(error: Error) {
  if (typeof (error as ApiError) === 'number') {
    return true;
  }

  // 另一种用法
  // if(error instanceof isApiError) {
  //   return true
  // }
  return false
}