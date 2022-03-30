let arr = [
  {
    sendMsgTime: 1000,
    roleName: '身份',
    nickName: '昵称',
    content: '聊天内容'
  },
  {
    sendMsgTime: 1500,
    roleName: '身份',
    nickName: '昵称',
    content: '聊天内容'
  },
  {
    sendMsgTime: 2000,
    roleName: '身份',
    nickName: '昵称',
    content: '聊天内容'
  },
  {
    sendMsgTime: 3000,
    roleName: '身份',
    nickName: '昵称',
    content: '聊天内容'
  },
  {
    sendMsgTime: 4000,
    roleName: '身份',
    nickName: '昵称',
    content: '聊天内容'
  },
  {
    sendMsgTime: 5000,
    roleName: '身份',
    nickName: '昵称',
    content: '聊天内容'
  },
  {
    sendMsgTime: 6000,
    roleName: '身份',
    nickName: '昵称',
    content: '聊天内容'
  },
  {
    sendMsgTime: 7000,
    roleName: '身份',
    nickName: '昵称',
    content: '聊天内容'
  },
  {
    sendMsgTime: 8000,
    roleName: '身份',
    nickName: '昵称',
    content: '聊天内容'
  }
];
const startTime = 3000;

// 过滤掉所有过期的消息
arr.filter((item) => {
  return item.sendMsgTime >= startTime
})

// console.log(arr);

// 对数组进行分隔
function group(list, splitNum) {
  let index = 0;
  let newArray = [];
  while(index < list.length) {
      newArray.push(list.slice(index, index += splitNum));
  }
  return newArray;
}

const newList = group(arr, 4);

console.log(newList);

// for循环的效率最高

