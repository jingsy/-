/*
* 希尔排序 时间复杂度 o（nlog2n）.
* 开始时针对无序序列，步长大，交换速度有提升，当数组基本有序的时候，步长少，交换次数少，速度快
*1.选定一个增量h 按照增长量h作为数据分组的依据 对数据进行分组
2.对分好组的每一组完成插入排序
3.减小增长量 最小减为1 重复第二部操作
*/

function shellSort(arr) {
    let len = arr.length;
    // gap 即为增量
    for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < len; i++) {
        let j = i;
        let current = arr[i];
        while(j - gap >= 0 && current < arr[j - gap]) {
          arr[j] = arr[j - gap];
          j = j - gap;
        }
        arr[j] = current;
      }
    }
  }
   
   
  var arr = [3,5,7,1,4,56,12,78,25,0,9,8,42,37];
  shellSort(arr);