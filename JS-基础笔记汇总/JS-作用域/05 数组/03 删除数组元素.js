var arr = [1, 2, 3, 4, 5]
/*
  使用delete删除数组中的元素的话:
  * delete是删除数组中指定索引值的元素(数据内容)，索引值的位置保留
  * delete删除数组中的元素，数组的长度是不变的
 */
delete arr[2]
console.log(arr, arr.length)