const assert = require('assert');
const bestDeal = require('../bestDeal');

describe('cheapestDeal  function', function() {

    it('returns cheapest deal', function() {
        assert.deepEqual(cheapestDeal("1 for R3, 2 for R7, 3 for R10, 5 for R14.50."), 'R2.9');
    });
});


describe('expensiveDeal  function', function() {

    it('returns most expensive deal', function() {
        assert.deepEqual(expensiveDeal("1 for R3, 2 for R7, 3 for R10, 5 for R14.50."), 'R3.5');
    });
});

describe('averageDeal function', function() {

    it('returns average price across all the deals.', function() {
        assert.deepEqual(averageDeal("1 for R3, 2 for R7, 3 for R10, 5 for R14.50."), 'R3.0');
    });
});
