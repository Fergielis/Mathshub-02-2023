// alert('hello')
// confirm ('do u learn JS?')
// prompt ('hduf?', 'ok')

// const skill = document.getElementById ('skill')
// const isLove = document.getElementById('isLove')
// const string = document.getElementById('string')

// const skillText = prompt("what lang do u learn?", "idk")
// const isLoveValue = confirm('do u like learning language?')

// skill.innerText = skillText
// isLove.innerText = isLoveValue

// string.innerHTML = "str"

// Lesson2

// String
// const str1 = 'I\'m OK'
// const str2 = "Sasha \n said: \"Hello\""
// const str3 = `I'm say ${str1}`
// console.log(str1)
// console.log(str2)
// console.log(str3)

// Number
// + - * / **
// const num1 = 75 + 15
// const num2 = 79 * 9
// console.log (typeof "5")
// const rem = 7 + 8 + '5'
// console.log(rem)
// alert(num2)

// Nan not a number
// const rem = 8 * 'a'
// console.log(rem)
// const inf = 17 / 0
// console.log(inf)
// от -(2**53 -1) до (2**53 - 1)
// console.log(9999999999999999)

// BigInt
// const BigInt = 518198985446555245n
// console.log(BigInt)

// BOOLEAN
// true / false
// > < >= <= >== <==
// const bool = "a" > "AAAAA"
// console.log(bool)

// NULL
// let empty = null
// console.log(empty, typeof empty)

// UNDEFINED
// let box = undefined
// console.log(box, typeof box)

// SYMBOL
// const uniq = Symbol('id')
// const uniq2 = Symbol('id')
// console.log(uniq == uniq2)

// OBJECT

// const obj = {
//     name: "Liza",
//     age: 28,
//     isHappy: true,
// }
// // console.log(obj.name)
// // console.log(obj['name'])

// obj.job = 'Google'

// // console.log(obj)

// const array = ['Tanya', 28, false]
// array[3] = "Facebook"
// console.log(array)
// console.log(array[0])

// const variant = "option1"

// console.log(5 =="5")
// console.log(5 ==="5")

// console.log("abc" > 15)

// console.log( null == 0 )

// Lesson 3

// const username = prompt("who you are?", "anonim")
//  username = null

// if (username === "admin") {
//     alert("Hi Boss")
// } else if (username === "anonim" || !username) {
//     alert("i don't know you")
// // } else if (username === null) {           or
// // } else if (!username) {
// //     alert("you doesn't exist")
// } else {
//     alert(`Hi ${username}`)
// }

// const counts = prompt ("how many?", 10)
// let i = 10
// while (i <= counts) {
//       console.log(++i)
// // i = i + 1
// // i += 1
// // i++
// // ++i
// }

// do {
//     console.log(i++)
// } while (i <= counts)

// console.log(i)

// let arr = [4, 5, 6]

// arr.push(7)
// console.log(arr[3])

// const arr = []

// for (let i = 1; i <= 50; ++i) {
//     arr.push(i)
// }
// // console.log(arr)

// const newarr = []

// for (item of arr) {
// const marker = item % 3
// if (!marker) {
// newarr.push(item)
// }
// }
//     console.log(newarr)

// const obj = {
//     name: "Liza",
//     age: 28,
//     city: "RnD"
// }
// for (key in obj) {
//     console.log(key, obj[key])
//     // console.log(obj[key])
// }

// Lesson 4
// Function
// declaration
function scream(a, b) {
  // alert ("AAAAAAAA")
  // return "I'm ok"
  // const result = a * b
  // return result
  return a * b;
}
// scream()
// console.log(scream(10, 15))

// expression
const wowscream = function () {
  alert("WOOOOOW");
};
// wowscream()

// arrow
const arrow = () => {
  alert("arrow is in the sky");
};
// arrow()

// Game
// push the button start game started, task generation,
// user can write answer, button check

//compare answer with right answer
// show answer and right number
// change button to start again

const getrandomnuminrange = (min, max) => {
  // const randomnum = (Math.random() * 100).toFixed(0)
  const randomnum = (Math.random() * (max - min) + min).toFixed(0);
  return randomnum;
};

const gettask = () => {
  // const randomnum1 = getrandomnuminrange(0, 100)
  // const randomnum2 = getrandomnuminrange(0, 100)
  // let symbol
  // if (Math.random() > 0.5) {
  //     symbol = "+"
  // } else {
  //     symbol = "-"
  // }
  const symbol = Math.random() > 0.5 ? "+" : "-";
  const task = `${getrandomnuminrange(0, 100)} ${symbol} ${getrandomnuminrange(
    0,
    100
  )}`;
  gamestate.rightanswer = eval(task);
  return task;
};

const togglegamestate = () => {
  gamestate.taskinprocess = !gamestate.taskinprocess;
};

const gameelements = document.getElementById("my_game").children;
// console.log(gameelements)
const title = gameelements[0];
const usertask = gameelements[1];
const useranswer = gameelements[2];
const btngame = gameelements[3];

const gamestate = {
  taskinprocess: false,
  rightanswer: null,
};

const startgamefunc = () => {
  // console.log("click")
  if (!gamestate.taskinprocess) {
    title.innerText = "Game started!";
    useranswer.value = null;
    //  генерируем задачу и ответ
    // const task = gettask()
    // показываем задачу пользователю
    usertask.innerText = gettask();
    useranswer.hidden = false;
    // btngame.innerText = "Check!"
    // gamestate.taskinprocess = true
    // togglegamestate()
    // меняю кнопку
    // меняю состояние
  } else {
    // сравнить ответ пользователя с правильным
    const isright = gamestate.rightanswer == useranswer.value;
    // вывести результат
    usertask.innerText = usertask.innerText + " = " + gamestate.rightanswer;
    // вывести поздравления
    title.innerText = isright ? "You won!" : "You loose!";
    // поменять кнопку и состояние
    // btngame.innerText = "Start again!"
    // gamestate.taskinprocess = false
    // togglegamestate()
  }
  togglegamestate();
  btngame.innerText = gamestate.taskinprocess ? "Check!" : "Start again!";
};
btngame.addEventListener("click", startgamefunc);
useranswer.addEventListener("keydown", (e) => {
  // console.log(e)
  if (e.key === "Enter") {
    startgamefunc();
  } else if (e.key === "Escape") {
    useranswer.blur();
  }
});

// if (isplus) {
//     gameelements[1].innerText = `${randomvalue1} + ${randomvalue2}`
// } else {
//     gameelements[1].innerText = `${randomvalue1} - ${randomvalue2}`
// }

// console.log (document)
// console.dir(document)
// const choosedel = document.querySelector("#my_game h2")
// console.log(choosedel)

// const anyvalue = document.getElementById("choosed_block-container").children
// console.log(anyvalue)
const choosedel = document.querySelectorAll(".choosed_block-container > div");
// console.log(choosedel.length)
const counterel = document.querySelector(".choosed_block span");

// const choosedstate ={
//     countelements: 0,
// }
// const changecount = (value) => {
//     choosedstate.countelements += value
//     counterel.innerText = choosedstate.countelements
// }

// for (let i = 0; i < choosedel.length; i++) {
//     //  console.log(choosedel[1])
//     choosedel[i].addEventListener("click", (e) => {
//         // console.log("click")
//         // choose element, means highlight with class
//         // choosedel[i].className = "choosed_element"
//         // console.log(e)
//         // e.target.className = "choosed_element"
//         // start counter
//         // counterel.innerText = + counterel.innerText + 1
//         if (e.target.className === "") {
//             e.target.className = "choosed_element"
//             // counterel.innerText = +counterel.innerText + 1
//             changecount(1)
//         } else {
//             e.target.className = ""
//             // counterel.innerText = counterel.innerText - 1
//             changecount(-1)
//         }
//     })
// }

// ООП
// const choosedstate = {
//     countelements: 0,
//     setcountvalue(value) {
//     this.countelements += value
//     counterel.innerText = this.countelements
// }
// }

// for (let i = 0; i < choosedel.length; i++) {
//     choosedel[i].addEventListener("click", (e) => {
//         // choosedel[i].className = "choosed_element"
//         if (e.target.className === "") {
//             e.target.className = "choosed_element"
//             choosedstate.setcountvalue(1)
//         } else {
//             e.target.className = ""
//             choosedstate.setcountvalue(-1)
//         }
//     })
// }

const choosedstate = {
  countelements: 0,
  setcountvalue(value) {
    this.countelements += value;
    counterel.innerText = this.countelements;
  },
};

const eventfunc = (e) => {
  if (e.target.className === "") {
    e.target.className = "choosed_element";
    choosedstate.setcountvalue(1);
  } else {
    e.target.className = "";
    choosedstate.setcountvalue(-1);
  }
};

for (let i = 0; i < choosedel.length; i++) {
  choosedel[i].addEventListener("click", eventfunc);
}
// choosedel[2].removeEventListener("click", eventfunc)

// Lesson 6
// // setTimeout(() => {
// //     alert("Time out")
// // }, 2000)
// // =
// const timeisover = () => {
//     alert("Time out")
// }
// // setTimeout(timeisover, 2000)

// // setInterval(timeisover, 2000)
// // const alarm = setInterval(timeisover, 2000)

// const alarm = setInterval(() => {
//     let wanttosleep = confirm("do you want sleep?")
//     if (wanttosleep) {
//         console.log("tic")
//     } else {
//         clearInterval(alarm)
//     }
// }, 3000)
// // clearInterval(alarm)

// console.log("1")
// setTimeout(()=>{
//     console.log("2")
// })
// console.log("3")

const postsBlock = document.querySelector(".posts_block-container");
// const postsTitle = document.querySelector(".posts_block-container h3")
// const postsBody = document.querySelector(".posts_block-container span")

const showPostsBTN = document.querySelector(".posts_block button");


// fetch("https://jsonplaceholder.typicode.com/posts")
//   // .then((res) => {
//   //   // console.log(res);
//   //   return res.json();
//   // })
//   .then((res) => res.json())
//   .then((data) => {
//     for (el of data) {
//       addPost(el.title, el.body)
//     }
//     // addpost(data[7].title, data[7].body);
//     // console.log(data);
//   })
//   // .catch((err) => {
//   //   // console.log(err)
//   //   console.log(err.message);
//   // });
//   .catch(err => console.log(err.message))

function addPost(title, body) {
  const postTitle = document.createElement("h3");
  const postBody = document.createElement("span");
  const postItem = document.createElement("p")

  postTitle.innerText = title;
  postBody.innerText = body;

  postItem.append(postTitle, postBody)
  postsBlock.append(postItem)
}

// function createPost(title, body, userId) {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: 'POST',
//     body: JSON.stringify ({
//       // title: title,
//       // body: body,
//       // userId: userId
//       title,
//       body,
//       userId,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },

//   })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch(err => console.log(err.message))
// }

// createPost("title", "body", 15)

function getPosts () {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => {
    for (el of data) {
      addPost(el.title, el.body)
    }
  })
  .catch(err => console.log(err.message))
}

showPostsBTN.onclick = getPosts
