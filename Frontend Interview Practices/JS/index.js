const str1 = "xyz";
const str2 = "123";

const alternateMarge = (str1, str2) => {
  let result = "";
  //   const maxLangth = str1.length >= str2.length ? str1.length : str2.length;
  const maxLangth = Math.max(str1.length, str2.length);
  for (let i = 0; i < maxLangth; i++) {
    if (str1.length > i) {
      result += str1[i];
    }
    if (str2.length > i) {
      result += str2[i];
    }
  }
  return result;
};
console.log(alternateMarge(str1, str2));
console.log(alternateMarge("Farhan", "Ovi"));

// Indexs of Given sum
const arr = [15, 10, 11, 8, 12];
const getIndexsOfSum = (nums, amount) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === amount) return [i, j];
    }
  }
};
console.log(getIndexsOfSum(arr, 25));
console.log(getIndexsOfSum([3, 8, 9, 2, 5], 5));
