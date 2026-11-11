class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sortedStrings = strs.map(el => el.split('').sort().join(''));
        const uniqueObject = {};
        const anagrams = [];
        for (let i = 0; i < strs.length; i++) {
            if(!uniqueObject[sortedStrings[i]]) {
                uniqueObject[sortedStrings[i]] = [strs[i]];
            } else uniqueObject[sortedStrings[i]].push(strs[i]);
        }

        Object.entries(uniqueObject).forEach(([key, value]) => {
            anagrams.push(value);
        });

        return anagrams;
    }
}
