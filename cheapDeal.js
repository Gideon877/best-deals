
module.exports = function cheapestDeal() {
    var cheap = Math.min.apply(Math, deals);
    // console.log("R" + cheap);
    return "R" + cheap;
}
