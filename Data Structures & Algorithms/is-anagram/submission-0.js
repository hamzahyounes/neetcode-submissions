class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const [sCharObj, tCharObj] = [{}, {}];
        let indicatorSum = 0;
        for (const char of s) {
            sCharObj[char] = (sCharObj[char] || 0) + 1;
        }
        for (const char of t) {
            tCharObj[char] = (tCharObj[char] || 0) + 1;
        }
        for (const sChar in sCharObj) {
            if (sCharObj[sChar] === tCharObj[sChar]) indicatorSum++;
        }
        return indicatorSum === Object.keys(sCharObj).length;
    }
}
