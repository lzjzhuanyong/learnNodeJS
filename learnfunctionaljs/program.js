/*
//第一题：
const upperCaser=input=>{
    return input.toUpperCase();
}
module.exports = upperCaser;
*/
/*
//第二题：
const repeat=(operation,num)=>{
    for(let i=0;i<num;i++){
        operation();
    }
}
module.exports =repeat;
*/
/*
//第三题：
const doubleAll = numbers =>{
    return numbers.map(element=>element*2);
}
module.exports = doubleAll;
*/
/*
//第四题：
const getShortMessages = messages=>{
    return messages.filter(element=>element.message.length<50).map(element => element.message);
}
module.exports=getShortMessages;
*/
/*
//第五题：
const checkUsersValid= goodUsers=>{
    return function allUsersValid(submittedUsers){
        return submittedUsers.every(submittedUser=>{
            return goodUsers.some(goodUser=>goodUser.id===submittedUser.id);
        })
        
        //自己写的逻辑，只用到了some，然后是递归，有点混乱，上面是参考答案，我觉得更简洁
        //if(submittedUsers.length>0 && goodUsers.some(element=>element.id === submittedUsers[submittedUsers.length-1].id))
        //{
         //   submittedUsers.pop();
         //   return allUsersValid(submittedUsers);
        //}
        //else if(submittedUsers.length===0){
        //    return true;
        //}
        //else{
        //    return false;
        //}
        
    }
}
module.exports=checkUsersValid;
*/
/*
//第六题：
const countWords=inputWords=>{
    const all = inputWords.reduce((allWords,currentWord)=>{
        if(currentWord in allWords){
            allWords[currentWord]++;
        }
        else{
            allWords[currentWord]=1;
        }
        return allWords;
    },{})
    return all;
}
module.exports=countWords;
*/
/*
//第七题：
const reduce = (arr,fn,initial)=>{
    //return fn({'laborum':1},arr[0],0,arr);
    const some = (index,value)=>{
        if(index>arr.length-1) return value;
        else{
            return some(index+1,fn(value,arr[index],index,arr));
        }
    }
    return some(0,initial);
}
module.exports=reduce;
*/
/*
//第八题：
function duckCount(){
    //console.log(Array.prototype.slice.call(arguments))
    return Array.prototype.slice.call(arguments).filter(element=>Object.prototype.hasOwnProperty.call(element,'quack')).length;
}
module.exports=duckCount;
*/
/*
//第九题：
const logger = namespace=>{
    let a1 = namespace;
    function b(){
        console.log.apply(null,[a1].concat(Array.prototype.slice.call(arguments)));
        //上面这个是利用apply接受数组值的特性，下面是直接用处理字符串的方式处理
       //console.log(a1,Array.prototype.slice.call(arguments).toString().replace(/,/gi,' '))
   }
   return b;
}
module.exports=logger;
*/
/*
//第十题：
module.exports = namespace =>{
    return console.log.bind(null,namespace);
    //这里用到的bind的功能只是先预先添加了一个namespace到绑定函数中
}
*/
/*
//第十一题：
module.exports = function arrayMap(arr,fn){
    return arr.reduce((accumulator,currentValue)=>{
        //console.log(accumulator)
        return accumulator.concat([fn(currentValue)])
    },[]);
}
*/
/*
//第十二题：
function Spy(target,method){
    let a = {};
    a.count = 0;
    let b =target[method];
    target[method]=function(){
        a.count++;
        return b.apply(this,arguments);
    }
    return a;
}
module.exports = Spy;
*/
/*
//第十三题：
module.exports = function repeat(operation,num){
    if(num<=0) return;
    operation();
    //if(num%10===0)
        setTimeout(function(){repeat(operation,--num)});
    //else
        //{repeat(operation,--num)}
}
*/

/*
//第十四题：
//这题主要是用蹦床函数解决递归函数栈溢出的问题的，我本人不是很熟悉这个问题，所以还是看了参考资料。
//简单来说，用一个函数，把递归逻辑变成循环逻辑，这就是蹦床函数大致原理。
function repeat(operation,num){
    if(num<=0) return;
    operation();
    return repeat.bind(null,operation,--num);
}
function trampoline(fn){
    while(fn && typeof fn === 'function'){
        fn=fn()
    }
}
module.exports = function(operation,num){
    trampoline(function() {
        return repeat(operation, num)
    })
}
*/
/*
//第十五题
//异步操作，这里还是用promise比较好，参考答案不是用promise，应该是因为题目比较老，还没出es6
module.exports = function loadUsers(userIds,load,done){
    let users = [];
    for (let i = 0;i<userIds.length;i++){
        let pm = new Promise((resolve,reject)=>{
            resolve(load(userIds[i]));
            reject('failure load');
        }) 
        pm.then(value=>{
            users.push(value);
        })
    }
    return users;
}
*/
/*
//第十六题：
//此题本质上是遍历，当然也让我熟悉了一下package.json的基本结构
//他用的数据就是package.json结构的
module.exports = function getDependencies(tree,arr){
    arr=arr || [];
    //console.log(tree)
    if(!tree.dependencies){
        return [];
    }
    else{
        Object.keys(tree.dependencies).forEach(element => {
            //console.log(tree.dependencies[element])
            if(tree.dependencies[element].version){
                arr.push(element+'@'+tree.dependencies[element].version);
                //console.log(arr)
                getDependencies(tree.dependencies[element],arr);
            }
        });
    }
    return Array.from(new Set(arr.sort()));
}
*/
/*
//第十七题：
//bind的使用上还需更加熟练，还有返回一个函数这种方式还不是太习惯
module.exports = function curryN(fn, n) {
    n = n || fn.length
    return num=>{
      if (n <= 1) return fn(num)
      return curryN(fn.bind(null, num), n-1)
    }
  }
*/
/*
//第十八题：
//Function bind slice,我最终还是没有完全搞懂，只能说尽量解释吧
//Function.call=Function.prototype.call,这个比较好理解，就是call的平常用法，可以看MDN，第一个参数就是this要指定的值
//Array.prototype.slice也就是使用它将Array-like对象转化为数组的功能，容易理解。
//bind这里是将Array.prototype.slice作为函数对象成为Function.call里的第一个参数，这里也能理解
//接下来就不能理解了，如果Function.call的第一个的参数即Array.prototype.slice，
//那么照理来说Function.call(Array.prototype.slice,arg1,arg2,...)应该等价于Function.call.bind(Array.prototype.slice)(arg1,arg2,...)才对啊
//但编译器好像不这么想，感觉有些不能理解，我觉得应该是Functtion的执行方式可能并不是我所理解的那样。看来这里还需要更加深入的去看看
//官方给出的解释是Function.call会执行this，然后bind把this值绑到了一个对象上（这里就是Array.prototype.slice）。所以说我就不理解了。
//留待之后再思考吧。
module.exports = Function.call.bind(Array.prototype.slice);
*/
