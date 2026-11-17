class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        let result = new Array(n).fill(1);

        let prefixAcc = 1;
        for (let i = 0; i < n; i++) {
            result[i] = prefixAcc;
            prefixAcc *= nums[i];
        }

        let suffixAcc = 1;
        for (let i = n - 1; i >= 0; i--) {
            result[i] *= suffixAcc;
            suffixAcc *= nums[i];
        }

        return result;
    }
}
