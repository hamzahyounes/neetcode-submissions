class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        nums.forEach((el) => {
            if (!map[el]) map[el] = 1;
            else map[el]++;
        });
        return Object.keys(map)
            .sort((a, b) => map[b] - map[a])
            .map((el) => Number(el))
            .slice(0, k);
    }
}
