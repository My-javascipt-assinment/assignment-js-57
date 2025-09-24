/*==================================== Question No 1 =========================================
settimeout()
======================================= Answer =====================================*/
// settimeout is a js function we pass callback function in its parameter 
// in{} we pass the code for execution and in timeout we pass time in milliseconds 
// if we need to run code after certain delay we use it , it does not block another code 
// setTimeout(()=>{
//     console.log('hello')
// },1000)

/*==================================== Question No 2 =========================================
Map()
======================================= Answer =====================================*/
// const obj = new Map();
// obj.set('name','Aziz');
// obj.set('age',30);
// obj.set('let','variable name');
// obj.set('()=>{}','function');
// obj.set('designation','Designer');
// obj.delete('()=>{}')
// console.log(obj.size);
// obj.set('name','Jamal')
// console.log(obj.has('age'));
// console.log(obj.values());
// console.log(obj.keys());
// console.log(obj,typeof obj);
// for(let[key,values] of obj){console.log(`${key} : ${values}`)}

// obj.entries()


/*==================================== Question No 3 =========================================
object.entries()
======================================= Answer =====================================*/
// let obj = {name : 'Aziz',
//     age : 30,
//     let : 'ok',
//     1992 : 'Birth',
//     true : 'acha'
// }
// console.log(obj);
// let convert = new Map(Object.entries(obj));
// console.log(convert,typeof convert)

/*==================================== Question No 4 =========================================
split
======================================= Answer =====================================*/
// // it is js method and we convert string to array by using it 
// let str = 'I am learning js';
// console.log(str,typeof str);
// let arr = str.split(' ');
// console.log(arr,typeof arr);
// // join() is js method and we convert an array to string by using it 
// let string = arr.join("  ");
// console.log(string,typeof string);

/*==================================== Question No 5 =========================================
filter
======================================= Answer =====================================*/
// it is array method it returns us all element of an array that fullfill a specific requirement.
// const arr = [1,2,3,41,5,61,7,8,9,103];
// let even = arr.filter((item)=>{return item % 2 == 0});
// console.log(even)
// let eve = arr.find((item)=>{return item % 2 == 0});
// console.log(eve)




/*==================================== Question No 6 =========================================
forEach
======================================= Answer =====================================*/
// forEach is used to render data on console or browser, it is array method
//  const fruits = ['apple','mango','orange','mango','grapes','banana','mango'];
//  fruits.forEach((item,index)=>{console.log(item,index)});

// let girls = ['klsoom','sana','saima'];
// let display = document.getElementById('ul');
//  girls.forEach((index, item)=>{let li = document.createElement('li');
//     let liContent = document.createTextNode(`${index} : ${item}`);
//     li.appendChild(liContent);
//     display.appendChild(li);
//     display.style.listStyle = 'none'
//  })





/*==================================== Question No 7 =========================================
map()
======================================= Answer =====================================*/
// it is array method we can apply a condition to all the elements of an array
// let num = [2,4,6,8,10];
// let need = num.map((item,ind)=> {if(ind >=2){
//     return item * 2
// }
// else{return item}});
// console.log(need)

// let girls = ['klsoom','sania','andleeb','knval','ishrt'];
// let need = girls.map((item,index)=>{
//     if(index <=2){return `${item} Khan`}
//     else{return `${item}`}
// }
// )
// console.log(need)



/*==================================== Question No 8 =========================================
some()
======================================= Answer =====================================*/
// it checks that whether one element fulfill our requirement, if fulfills it returns true else false
// let num = [1,2,3,4,51,6];
// let check = num.some((item)=>{return item /5 == 1});
// console.log(check)


/*==================================== Question No 9 =========================================
findIndex()
======================================= Answer =====================================*/
// let obj = [
//     {id : 1,
//         name : 'jamal'
//     },
//     {id : 2,
//         name : 'Khan'
//     },
//     {id : 3,
//         name : 'Habib'
//     }
// ]
// console.log(obj)
// let ind = obj.findIndex((inde)=>{return inde.id == 1});
// console.log(ind)
// console.log(obj);
// obj.splice(ind,1);
// console.log(obj)


/*==================================== Question No 10 =========================================
try and catch
======================================= Answer =====================================*/
// try{
//     ans()
//     let ans = ()=>{console.log('hello');
        
//     }
    
// }
// catch(err){console.log(err)}
// console.log(5 + 5)

// try{let num = 5;
// console.log(num.toUpperCase());}
// catch(err){console.log(err)}
// console.log('hello')

/*==================================== Question No 11 =========================================
try catch
======================================= Answer =====================================*/
// try{let num = prompt('enter num');
//     if(num >20)throw('num must be less than 20')
// }
// catch(err){console.log(err)}



/*==================================== Question No 12 =========================================
/\d/,.match()
======================================= Answer =====================================*/
// let str = 'aziz98ullah';
// let check = /\d/.test(str);
// console.log(check);
// let draw = str.match(/[a-z]/g).join('');
// console.log(draw)


// let str = 'abc123def45';
// let digits = str.match(/\d/g);
// let condtion = (digits)?(digits.length):(0);
// console.log(condtion)

// example two 
// let str = 'hel4lo2';
// let check = str.match(/\d/g);
// let ans = check.length;
// console.log(ans)
// console.log(check)

// let str = 'abc123def45';
// let digits = str.match(/\d/g);
// console.log(digits);
// let check = (digits)?(digits.length):('not');
// console.log(check)



/*==================================== Question No 13 =========================================
module
======================================= Answer =====================================*/
// import {name,arr} from "./data.js";
// console.log(name);
// console.log(arr)



/*==================================== Question No 14 =========================================
optional chaining
======================================= Answer =====================================*/
// let user = {
//   name: "Ali",
//   address: {
//     city: "Karachi"
//   }
// };

// // ✅ Safe way with optional chaining
// console.log(user.address?.city);     // Karachi
// console.log(user.address?.street);   // undefined

// // ❌ Without optional chaining (would give error if address is missing)
// console.log(user.contact?.phone);    // undefined (no error)

// let teacher = {name : 'Umer',
//     course : 'Web',
//     subject  : {subject1 : 'Math'}
// }
// let check = teacher.subject?.subject1;
// let check2 = teacher.subject5?.name;
// console.log(check);
// console.log(check2)
/*==================================== Question No 15 =========================================
optional chainging
======================================= Answer =====================================*/
// const car = {model : 'Honda',
//     color : {firstColor: 'red',
//         year: {preparationYear : 2024}
//     }
// }
// console.log(car.color?.year2?.preparationYear);
// console.log('welcome')

/*==================================== Question No 16 =========================================
spread operator
======================================= Answer =====================================*/

// let array = ['apple','mango'];
// array = [...array,'banana','grapes']
// let arr = [...array];
// console.log(arr)
// let arr1 = ['apple'];
// let arr2 = ['mango'];
// let newArr = [...arr1,...arr2];
// console.log(newArr)

// let obj1 = {name :'Logrith'};
// let obj2 = {designation : 'Designer'};
// let obj = {...obj1,...obj2};
// console.log(obj);
// obj1 = {...obj1,'age':20,'city':'pks'}
// console.log(obj1)

// let num = [2,3,4,55,4];
// let max = Math.max(...num);
// console.log(max)



/*==================================== Question No 17 =========================================
palindrome
======================================= Answer =====================================*/
// let str = prompt('enter word');
// let rev = '';
// for(let i = str.length-1; i>=0;i--){rev = rev + str[i]};
// console.log(rev);
// if(rev === str){console.log(`${str} is palindrom`);
// }

// else{console.log(`${str} is not palindrome`)}



/*==================================== Question No 18 =========================================
color carosel
======================================= Answer =====================================*/
// let div = document.getElementById('div');
// let color = ['red','green','black','blue','yellow','seagreen'];
// let index = 0;
// setInterval(() => {
//     index++;
//     div.style.background = color[index];
//     if(index >= color.length-1){index = 0}
    
// }, 1000);




/*==================================== Question No 19 =========================================
count words
======================================= Answer =====================================*/

// function counting(){let getValue = document.getElementById('input').value;
//     getValue = getValue.toLowerCase();
//     getValue = getValue.trim();
//     getValue = getValue.split(' ');
//     console.log(getValue);
//     let display = document.getElementById('ul');
//     let count = 1;
//     for(let i = 0;i < getValue.length;i++){
//         if(getValue[i] == getValue[i + 1]){count++}
//         else{let li = document.createElement('li');
//             let liContent = document.createTextNode(`${getValue[i]} : ${count}`);
//             li.appendChild(liContent);
//             display.appendChild(li);
//             // count = 1;
            
//         }
//     }
// }



// let count = 1;
// let word = '';
// let display = document.getElementById('ul');
// for(let i = 0; i < arr.length;i++){
//     if(arr[i] === arr[i + 1]){count++}
//     else{let li = document.createElement('li');
//         let liContent = document.createTextNode(`${arr[i]} : ${count}`);
//         li.appendChild(liContent);
//         display.appendChild(li);
        
//     }
    
// }

/*==================================== Question No 20 =========================================
shallow and deep copy
======================================= Answer =====================================*/
// let obj = {name : 'Aziz',
//     teacher: {teacherName : 'Ahmed',
//         studentRollNo : {rollNo : 123}
//     }
// }
// console.log(obj)
// // let newObj = {...obj};
// let newObj = Object.assign({},obj)
// newObj.teacher.studentRollNo.rollNo = 4000;
// console.log(newObj);
// console.log(obj)

// let obj = {name : 'Aziz',
//     teacher: {teacherName : 'Ahmed',
//         studentRollNo : {rollNo : 123}
//     }
// }
// console.log(obj);
// let deep = JSON.parse(JSON.stringify(obj));
// console.log(deep);
// deep.teacher.studentRollNo.rollNo = 2;
// Json.Parse(Json.stringify(obj));
// StructureClone(obj)


/*==================================== Question No 20 =========================================
hashtagGenerator
======================================= Answer =====================================*/
// function generating(){
//     let getValue = document.getElementById('result').value;
//     console.log(getValue);
//     getValue = getValue.split(' ');
//     let need = getValue.map((item)=>{return item.charAt(0).toUpperCase() + item.slice(1)});
//     need = need.join('');
//     need = `#${need}`
//     console.log(need)
//     console.log(getValue)
// }



/*==================================== Question No 21 =========================================
letter couner
======================================= Answer =====================================*/
// function counting(){
//     let word = document.getElementById('result').value;
//     let letter = document.getElementById('result2').value;
//     letter = letter.toLowerCase();
//     word = word.toLowerCase();
//     word = word.split('');
//     console.log(word);
//     console.log(letter);
//     let target = word.filter((item)=>{return item === letter});
//     console.log(target.length)
    
// }




/*==================================== Question No 22 =========================================
ternary operator
======================================= Answer =====================================*/
// it is short cut of if/else statement
// let age = 2;
// let condition = (age <20)?('eligible'):('not eligible')
// console.log(condition)



/*==================================== Question No 23 =========================================
default parameter
======================================= Answer =====================================*/
// we pass argument in function and receive in parameter, we declare one parameter already and now if we 
// new parameter than it is used and if we dont pass parameter than function uses default parameter

// function calculation(a,b = 50){ return a+b}
// let ans = calculation(5)
// console.log(ans)




/*==================================== Question No 24 =========================================
restParameter
======================================= Answer =====================================*/

// // take multiple arguments of function by (...rest) parameter and return them in array
// function name(a,b,...st){console.log(a)
//     console.log(st)

// }
// name('aziz','ikram','mubashir','qadir',{userName :'sana',age : 18})




/*==================================== Question No 25 =========================================
Enhanced object literals
======================================= Answer =====================================*/
// let name = 'Aziz';
// let age = 23;
// let color = 'white';
// const obj = {name ,
//     age ,
//     color 
// }
// console.log(obj)


/*==================================== Question No 26 =========================================
object destructuring
======================================= Answer =====================================*/
// let obj = {name : 'Aziz',
//     age : 30
// }

// let {name,age} = obj
// console.log(name);
// console.log(age)

// let [name,age,course] = ['Sanwal',18,'web'];
// console.log(name);
// console.log(age)




/*==================================== Question No 27 =========================================
itrators of/in
======================================= Answer =====================================*/
// let fruite = ['apple','mango','orange'];
// for(let key of fruite){console.log(key)}
// for(let ind in fruite){console.log(ind)}

// let obj = {model :'Honda',
//     year : 2023,
//     color : 'red'
// }
// for(let element in obj){console.log(element, element[i])}



/*==================================== Question No 28 =========================================
word's letter counter
======================================= Answer =====================================*/
function counting(){
    let result = document.getElementById('result');
    let word = document.getElementById('word').value;
    word = word.toLowerCase();
    let letter = document.getElementById('letter').value;
    letter = letter.toLowerCase();
    word =word.split('');
    console.log(word);
    let target = word.filter((item)=>{return item === letter});
    console.log(target.length)
}




/*==================================== Question No 29 =========================================
ascending order
======================================= Answer =====================================*/
// function ascending(){
//     let display = document.getElementById('ul');
//     let number = document.getElementById('input').value;
//     number = number.split(' ');
//     number = number.sort((a,b)=> a - b);
    
//     console.log(number)
// }



/*==================================== Question No 30 =========================================
factorial
======================================= Answer =====================================*/
// let num = "5";
// let factorial = 1;
// for(let i = 1 ; i <= num;i++){factorial = factorial * i}
// console.log(factorial)




/*==================================== Question No 31 =========================================
array equality checking
======================================= Answer =====================================*/
// function checking(){
//     let result = document.getElementById('result');
//     let arrayOne = document.getElementById('input1').value;
//     let arrayTwo = document.getElementById('input2').value;
//     arrayOne = arrayOne.trim();
//     arrayTwo = arrayTwo.trim();
//     arrayOne = arrayOne.split(' ');
//     arrayTwo = arrayTwo.split(' ');
    
//     console.log(arrayOne);
//     console.log(arrayTwo);
//     if(arrayOne.length == arrayTwo.length){
//         for(let i = 0;i< arrayOne.length;i++){console.log(arrayOne[i]);
//             for(let j = i ; j <= i; j++){console.log(arrayTwo[j])};
//             if(arrayOne[i] == arrayTwo[i]){result.innerHTML = 'Both array item are equal and same'}
//             else{result.innerHTML = 'Both array items are not equal and same'}
//         }
//     }
//     else{result.innerHTML = "The length of both array's hava not same"}
// }




/*==================================== Question No 32 =========================================
location.reload()
======================================= Answer =====================================*/
// setInterval(()=>{
//     location.reload()
// },1000)



/*==================================== Question No 33 =========================================
object.length
======================================= Answer =====================================*/
// let obj = {name : 'Aziz',
//     course : 'Web',
//     age : 30
// }
// console.log(Object.keys(obj).length)
// for(let key in obj){console.log(`${key} : ${obj[key]}`)}



/*==================================== Question No 34 =========================================
new Date()
======================================= Answer =====================================*/
// let date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth()+1);
// console.log(date.getDay())
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// date.setMonth(5-1);
// console.log(date);
// date.setDate(2);
// console.log(date);
// date.setHours(4);
// console.log(date);
// date.setMinutes(3);
// console.log(date)





/*==================================== Question No 35 =========================================
addMydigits
======================================= Answer =====================================*/
// function calculating(){let getDigits = document.getElementById('input').value;
//     document.getElementById('input').value = '';
//     document.getElementById('input').focus();
//     let display = document.getElementById('display');
//     // run for loop 
//     let result = 0;
//     for(let i = 0; i < getDigits.length;i++){
//         // we convert loop output to Number for adding 
//         let convertedStringToNumber = Number(getDigits[i]);
//         result = result + convertedStringToNumber;}
//     display.textContent = result;
// }



/*==================================== Question No 36 =========================================
unique array
======================================= Answer =====================================*/
// let arr = ['a','b','b','c','d','d','e'];
// console.log(arr,typeof arr);
// let array = [];
// for(let i = 0 ;i < arr.length;i++){
//     if(arr[i] !== arr[i+1]){array.push(arr[i])}
//     else{arr[i] = array}
// }
// console.log(array)


/*==================================== Question No 37 =========================================

======================================= Answer =====================================*/

// function processing(){let getArray = document.getElementById('input').value;
//     document.getElementById('input').vlaue = '';
//     document.getElementById('input').focus();
//     getArray = getArray.trim();
//     let array = getArray.split(' ');
//     let unique = [];
//     for(let key of array){if(!unique.includes(key)){unique.push(key)}}
//     let display = document.getElementById('display');
//     unique = unique.join(' ');
//     display.value = unique;
// }

// let arr = ['a','b','b','c','d','d','e'];
// console.log(arr,typeof arr);
// let array = [];
// for(let i = 0 ;i < arr.length;i++){
//     if(arr[i] !== arr[i+1]){array.push(arr[i])}
//     else{arr[i] = array}
// }
// console.log(array)


/*==================================== Question No 38 =========================================
array method
======================================= Answer =====================================*/
// let fruits = ['apple','banana','mango'];

// console.log(fruits,typeof fruits);
// fruits.push('orange');
// fruits.unshift('watermelon');
// let pop = fruits.pop();
// console.log(pop);
// console.log(fruits);
// let unshif = fruits.shift();
// console.log(unshif);

// console.log(fruits);
// let fruits = ['apple','banana','mango'];
// fruits.splice(0,0,'lemon');
// console.log(fruits);
// let copy = fruits.slice(-2);
// console.log(copy)



/*==================================== Question No 39 =========================================
localstorage
======================================= Answer =====================================*/
/*local storage is like small notebook. every browser has memory and we can 
save our small data text not imgage in it , and it does not remove till we dont reomove 

it even page refresh or computer off. we can use localstorage data in same browser.
*/
 
// function saveName(){
//     let getName = document.getElementById('input').value;
//     if(getName == ''){alert('plz enter name');
//         return
//     }
//     localStorage.setItem('username',getName);
//     document.getElementById('greeting').innerHTML = `Welcome back, ${getName}`;
//     alert('name saved')

// }

// function removeName(){
//     localStorage.removeItem('username');
//     document.getElementById('greeting').innerHTML = 'welcome';
//     document.getElementById('input').value = '';
//     alert('nave have been removed')
// }



/*==================================== Question No 40 =========================================
power of 2 checker
======================================= Answer =====================================*/
// function checker(){
//     let getNumber = document.getElementById('input').value;
//     getNumber = Number(getNumber);
//     let result = document.getElementById('result');
//     console.log(getNumber);
//     if(getNumber <=1){alert('plz enter valid number')}
//     for(let i = 1; i <getNumber;i++)
//     {console.log(i)
//         if(2**i === getNumber){result.innerHTML = `${getNumber} is power of two`
// }
// else{result.innerHTML = `${getNumber} is not power of 2`}}
    
// }



/*==================================== Question No 41 =========================================
form save in localstorage
======================================= Answer =====================================*/


// function saveInLocalStorage(){
//     let name = document.getElementById('name').value;
//     localStorage.setItem('name',name);
//     document.getElementById('name').value = '';
//     let email = document.getElementById('email').value;
//     localStorage.setItem('email',email);
//     document.getElementById('email').value = '';
//     let phone = document.getElementById('phone').value;
//     localStorage.setItem('phone',phone);
//     document.getElementById('phone').value = '';
//     let gender = document.getElementById('gender').value;
//     localStorage.setItem('gender',gender);
//     document.getElementById('gender').value = '';
//     let dob = document.getElementById('dob').value;
//     localStorage.setItem('dob',dob);
//     document.getElementById('dob').value = '';
//     let address = document.getElementById('address').value;
//     localStorage.setItem('address',address);
//     document.getElementById('address').value = '';
    
    
    
// }

// // show data 
// function showData(){
//     let name = localStorage.getItem('name');
//     let email = localStorage.getItem('email');
//     let phone = localStorage.getItem('phone');
//     let dob = localStorage.getItem('dob');
//     let gender = localStorage.getItem('gender');
//     let address = localStorage.getItem('address');
//     let ul = document.getElementById('ul');
//     if(name && email && phone && dob && gender && address){ul.innerHTML = `<li>${name}</li>
//     <li>${email}</li>
//     <li>${phone}</li>
//     <li>${dob}</li>
//     <li>${gender}</li>
//     <li>${address}</li>`}
//     else{ul.innerHTML = `<li>No data exists</li>`;
//         ul.style.listStyle = 'none'
//         ul 
//     }
    
    
// }

// function finish(){
//     localStorage.clear()
//     // localStorage.removeItem('name');
//     // localStorage.removeItem('email');
//     // localStorage.removeItem('phone');
//     // localStorage.removeItem('dob');
//     // localStorage.removeItem('gender');
//     // localStorage.removeItem('address')
//     }
    

/*==================================== Question No 42 =========================================
sum of array element squares
======================================= Answer =====================================*/
// let num = [2,3,4];
// console.log(num)
// let squares = num.map((item)=>{return item*item;});
// console.log(squares);
// let sum  = 0;
// for(let i = 0;i <squares.length;i++){sum = sum + squares[i]}

// console.log(sum)

/*==================================== Question No 43 =========================================
find min from array 
======================================= Answer =====================================*/
// let array = [3,2,4,6,4];
// // let min = Math.min(...array);
// // console.log(min);
// let min = array[0];
// for(let i = 0;i < array.length;i++){if( array[i] < min){  min = array[i]}}
// console.log(min)





/*==================================== Question No 44 =========================================
pascal case
======================================= Answer =====================================*/
// let str = 'he is going to lahore';
// str = str.split(' ')
// console.log(str);
// let need = str.map((item)=>{return item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase()});
// console.log(need)
// need =  need.join('');
// console.log(need)



/*==================================== Question No 45 =========================================
came Case generator
======================================= Answer =====================================*/
//  let str = 'ZREE LOVE';
//  str = str.split(' ');
//  let first = str.slice(0,1);
//      first = first.join().toLowerCase();
    
//  console.log(first);
//  let other = str.slice(1);
//  console.log(other)
//  let need = other.map((item)=>{return item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase()});
//  console.log(need);
//  need = need.join('');
//  console.log(need);
//  let result = first + need;
//  console.log(result)
 




/*==================================== Question No 46 =========================================
average or mean finder
======================================= Answer =====================================*/
// let arr = [30,2];
// let add = 0;
// for(let i = 0; i < arr.length;i++){add = add + arr[i]};
// console.log(add)
// let length = arr.length;
// console.log(length);
// let mean = add/length;
// console.log(mean)





/*==================================== Question No 47 =========================================
text truncator
======================================= Answer =====================================*/
// let text = 'He is going to school';
// let length = 5;
// let first = text.slice(0,1) + '.........';
// console.log(first);
// let second = text.slice(0);
// console.log(second)




/*==================================== Question No 48 =========================================
start number to required last number number generator
======================================= Answer =====================================*/
// let startNumber = 5;
// let endNumber = 100;
// let result = '';
// for(let i = startNumber; i <= endNumber;i++){result += i};
// console.log(result)




/*==================================== Question No 49 =========================================
.toFixed()
======================================= Answer =====================================*/
// let num = 234.87547673;
// console.log(num);
// let fix = num.toFixed(2);
// console.log(fix)

// console.log(Math.PI)
// [1.String(num),2 = num.toString(), 3 = `${num}`, 4 = num + " ", 5 = Json.stringify(num)]
// let num = 23;
// // num = num.toString();
// // num = `${num}`;
// // num = num + '';
// // num = String(num);
// num = JSON.stringify(num);
// console.log(num,typeof num);


/*==================================== Question No 50 =========================================
convert string to number
======================================= Answer =====================================*/
// let str = '322.568';
// console.log(str,typeof str);
// // str = Number(str);
//  str = parseFloat(str)
// // str = parseInt(str)
// console.log(str,typeof str);

/*==================================== Question No 51 =========================================
charAt()
======================================= Answer =====================================*/
// let str = 'love';
// console.log(str.charAt(str.length-1));
// let num = 32.643;
// console.log(num);
// num = Math.round(num);
// console.log(num);

// let num = 4;
// let  a = Math.sqrt(num);
// console.log(a)

// let num = -352.335;
// num = Math.abs(num);
// console.log(num)
// let num = 32.898;
// // num = Math.ceil(num);
// num = Math.floor(num);
// console.log(num)

