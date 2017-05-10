
var deals = [];
module.exports = function averageDeal(strNg) {
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

    var sum = 0;
    for (var a = 0; a < deals.length; a++) {
        sum += parseInt(deals[a], 10); //don't forget to add the base
    }
    var avg = sum / deals.length;
    // console.log("R" + avg)
    return "R" + avg;
}
