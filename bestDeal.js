var deals = [];
module.exports = function checkDeals() {
    var myArray = strNg.split(',');

    for (var i = 0; i < myArray.length; i++) {
        var myNewArray = myArray[i].split(' for ')
        var qty = myNewArray[0];
        var prc = myNewArray[1].slice(1, myNewArray[1].length);

        if (prc.endsWith('.')) {
            prc = myNewArray[1].slice(1, myNewArray[1].length - 1);
        }

        function avoPrices(qty, prc) {
            var priceForEach = prc / qty;
            deals.push(priceForEach);
            return
        }

        avoPrices(qty, prc)

    }

}


module.exports = function cheapestDeal() {
 return Math.min.apply(null, deals);
 }

module.exports = function expensiveDeal() {
 return Math.max.apply(null, deals);
 }

module.exports = function averageDeal() {}
