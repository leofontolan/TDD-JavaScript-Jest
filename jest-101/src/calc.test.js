var add = require('./calc.js')

describe('calculator', function() {
    it('should add two numbers', function() {
        expect(add(1, 2)).toBe(3)
    })
})