var add = require('./calc')

describe('calculator', function() {
    it('add two numbers', function() {
        expect(add(1, 2)).toBe(3)
    })
})