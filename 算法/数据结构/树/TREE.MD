```
 二分查找法

        var arr =[1,2,3,5,7,8,88];
        function binarySearch(arr,key){
            // arr.sort(function(a,b){return a-b});
            var low =0;
            var hi=arr.length-1;
            while (low<=hi) {
                // var mid = parseInt(low+(hi-low)/2);
                var mid= parseInt((low+hi)/2)
                if(arr[mid]==key){
                    return mid;
                }
                if(arr[mid]>key){
                    hi=mid-1
                }
                if(arr[mid]<key){
                    low=mid+1
                }
            }
            return -1;
        }
        
        console.log(binarySearch(arr,3))
        console.log(binarySearch(arr,0,10,3))
```
```
        //递归版
        function binarySearch(arr,low,hi,key){
            mid = low+(hi-low)/2;

            if(low>hi){
                return -1;
            }
            if(arr[mid]==key){
                return mid;
            }else{
                if(arr[mid]>key){
                    return binarySearch(arr,low,mid-1,key);
                }else{
                    return binarySearch(arr,mid+1,hi,key);
                }
            }
        }
```