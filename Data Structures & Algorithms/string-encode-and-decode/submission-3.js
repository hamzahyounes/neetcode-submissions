class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 1 && typeof strs[0] === "string" && !strs[0]) {
            return "<E/>";
        } else if (!strs.length) return "";
        return strs.join("</>");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === "<E/>") return [""];
        if(!str.length) return [];
        return str.split("</>");
    }
}
