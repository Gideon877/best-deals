
var deals = [];
module.exports = function expensiveDeal(strNg) {
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

    var exp = Math.max.apply(Math, deals);
    // console.log("R" + exp);
    return "R" + exp;
}
