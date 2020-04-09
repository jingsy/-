// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

let nums = [2,7,11,15];
let nums2 = [2,7,11,15];
let nums3 = [2,7,11,15];

const mySum = (arr, target) => {
    let anotherNum,secondIndex;
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<=target){
            anotherNum = target - arr[i];
            res.push(i)
        }        
        arr.filter((item,index,arr)=>{
             if(item === anotherNum){
                //  console.log(index);
                 res.push(index);
             }
        })
        //结果数组的长度为1 说明filter里并没有筛选到匹配的第二个值，说明当前的i不匹配，清空结果数组，执行下一轮循环
        if(res.length==1){
            res = [];
            continue
        }
         return res
    }
}

console.log(mySum(nums,9));
console.log(mySum(nums2,22));
console.log(mySum(nums3,17));

