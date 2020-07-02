/*
*
* Set
* 作用和数组类似，和数组不同的是:他不能存放重复的元素
*应用场景:数组去重.
*
*
*
* */
//eg01:基本使用
// let set1 = new Set([10,20, 30, 40,10, 20,30,50]);
// console.log(set1);//Set { 10, 20, 30, 40, 50 }


//eg02:数组去重.
// let arr = [10, 20,30 , 40,10, 20,30, 50]; //这个数组有很多重复的项
// let set = new Set(arr);
// // console. log(set); //Set { 10,20,30，40， 50 }
//
// let arrNew = [...set];
// console. log(arrNew);//[10, 20，30， 40, 50 ]


//eg03:数组去重，把上面操作变成一句话。
let arr1 = [10, 20,30 , 40, 10,20,30 , 50];
letarrNew=[...newSet(arr1)];//这句话就是把arr1去重，得到一个新的数组arrNew
console.log(arrNew) ;//[10, 20，30， 40, 50 ]











