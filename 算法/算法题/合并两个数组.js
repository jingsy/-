/**
 * 请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']，
 * 合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。
 */
var arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
var arr2 = ['A', 'B', 'C', 'D']

const combine = (arr1,arr2)=>{
    let res =arr1.map((item,index,arr)=>{
        return [arr[index*2], arr[index*2+1]]
    })
    res.forEach((item,index)=>{
        if(item !== undefined){
            item.push(arr2[index])
        }
    })
    res = res.filter(item=>item[0] !==undefined).reduce((acc,cur,index)=>{
        return acc.concat(cur)
    },[])
    return res   
}

console.log(combine(arr1,arr2))

