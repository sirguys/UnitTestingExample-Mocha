var assert = require('chai').assert;

function Add(a,b) {
    return a + b;
}

describe('SirGuys Test Module', function() {
    describe('Add(a,b)', function() {
        var testSet = [
            {argv: [1,2], expected: 3},
            {argv: [10,2], expected: 12},
            {argv: [76,14], expected: 90}
        ];
        testSet.map(function(test) {
            it('Should return ' + test.argv[0] + '+' + test.argv[1] + ' = ' + test.expected, function() {
                var result = Add(test.argv[0], test.argv[1]);
                assert.equal(result, test.expected);
            });
        });
    });
});