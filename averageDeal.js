
module.exports = function averageDeal() {
    var sum = 0;
    for (var a = 0; a < deals.length; a++) {
        sum += parseInt(deals[a], 10); //don't forget to add the base
    }
    var avg = sum / deals.length;
    // console.log("R" + avg)
    return "R" + avg;
}
