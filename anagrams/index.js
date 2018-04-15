function anagrams(stringA, stringB) {
    const aCharMap=buildCharMap(stringA);
    const bCharMap=buildCharMap(stringB);
   }
   
   function buildCHarMap(str) {
     const charMap = {};
     
     for (let char of str.replace(/[^\w]/g,"").toLowerCase()) {
       charMap[char] =  charMap[char] + 1 || 1;
     }
     
     return charMap;
     
   }
   
   console.log(anagrams("Apolon Pachulia","apolon"));