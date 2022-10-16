
//Check if nums are valid
function convertAndValidateNums(nums) {
    let intArr = []
    for (let i = 0; i < nums.length; i++) {
        let toNum = Number(nums[i]);

        if (Number.isNaN(toNum[i])){
            return new Error(`The value ${nums[i]} is not a valid number.`);
        };
        intArr.push(toNum);
    }
    return intArr;
}


//Get result for mean
function meanResult (nums) {
    const intArr = convertAndValidateNums(nums);
    if (nums.length === 0) return 0;
    const average = intArr.reduce((num, currNum) => num + currNum, 0) / intArr.length;
    return average
}

//Get result for median
function medianResult (nums) {
    const intArr = convertAndValidateNums(nums);
    if (intArr.length === 0) return 0 
    intArr.sort(function (a, b) {
        a - b;
    })
    const half = Math.floor(intArr.length / 2);
    if (intArr.length % 2)
        return intArr.sort()[half];
    return (intArr[half -1] + intArr[half]) / 2;
}

//Get result for mode (most frequent)
function modeResult (nums) {
    const intArr = convertAndValidateNums(nums);
    counts = {}
    intArr.forEach(function(num) {
        if (counts[num] === undefined){
            counts[num] = 0;
        }
        counts[num] += 1;
    })
    const arr = Object.values(counts);
    const max = Math.max(...arr);
    const index = arr.indexOf(max);
    return Number(Object.keys(counts)[index])
}



//Create a response
function createRes (operation, result){
    const res = {
        operation: operation,
        value: result
    }
    return res;
}




module.exports = {
    convertAndValidateNums,
    meanResult,
    medianResult,
    modeResult,
    createRes
}