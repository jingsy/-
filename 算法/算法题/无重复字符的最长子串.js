
let str ='abcabcbb';
let lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let set = new Set();
    let i=0,j=0,ans=0;
    while(i<n && j<n){
      if(!set.has(s[j])){
        set.add(s[j++]);
        ans = Math.max(ans,j-i);
        console.log(set);
        
      }else{
        set.delete(s[i++]);
      }
    }
    return ans
};

let res = lengthOfLongestSubstring(str);
console.log(res);
 // 3
 