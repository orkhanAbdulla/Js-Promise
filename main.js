// function test(a,b) {
//   return a+b
// }

// const fun1=function(a,b){
//     return a+b
// }

// const func2=(n)=>n+5



// console.log(arr.every(x=>x>1));


// const Test2=(arr,callback)=>{
//     let newArr=[]
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// let newArr=Test2(arr,n=>n>5)
// const arr=[2,3,4,5,6,7,8,9,2]
// console.log(arr.some(n=>n>6));


// const customSome=(arr,callback)=>{
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             return true
//         }
//     }
//     return false
// }



// async

// const promise=new Promise((res,rej)=>{
//   setTimeout(()=>{
//     res("Evrything is  okey")
//   },3000)
// })
// promise.then((value)=>{
//   throw new Error("error occured ....")
// }).then((returnedValue)=>{
//   console.log(returnedValue);
// })
// .catch((err)=>{
//   console.log(err);
// })


// const g=()=>{
//   return new Promise((res,rej)=>{
//     setTimeout(() => {
//       res(20)
//     }, 3000);
//   })
// }

// const f1=()=>{
//   g().then((value)=>{
//     console.log(value,"Then");
//   }).catch((err)=>{
//     console.log(err);
//   })
// }

// const f=async()=>{
//   try {
//     const res=await g()
//     console.log(res,"await");
//   } catch (error) {
//     console.log("error occured...");
//   }
// }
// f()
// f1()


// const getDatas=()=>{
//   fetch('https://jsonplaceholder.typicode.com/todos/').then((response)=>response.json()).then(value=>{
//   throw new Error("err")
//   }).catch((err)=>{
//     console.log(err);
//   })
// }
// getDatas()





