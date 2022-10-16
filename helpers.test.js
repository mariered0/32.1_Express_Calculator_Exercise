const { convertAndValidateNums,
    meanResult,
    medianResult,
    modeResult,
    createRes
} = require('./helpers')

describe('meanResult test', function(){
    it('finds the mean of an empty array', function(){
        expect(meanResult([])).toEqual(0)
    })
    it('finds the mean of an array of numbers', function(){
        expect(meanResult([1,3,5,7])).toEqual(4)
    })
})

describe('medianResult test', function(){
    it('finds the median of an empty array', function(){
        expect(medianResult([])).toEqual(0)
    })
    it('finds the median of an array of numbers', function(){
        expect(medianResult([1,3,5,7])).toEqual(4)
    })
})

describe('modeResult test', function(){
    it('finds the mode of an array of numbers', function(){
        expect(modeResult([1,3,1,5,5,5,7])).toEqual(5)
    })
})

