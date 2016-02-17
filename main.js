
//question 1

var sum = 0;
var avgPrice;
items.forEach(function(elements) {
  sum += elements.price;
});
avgPrice = (sum/items.length);
console.log(avgPrice);

document.getElementById("answer1").innerHTML = "Average Price $" + avgPrice;



//question 2



var priceArr = items.filter(function (el) {

  return el.price > 14 && el.price < 18;
});

var newArr = priceArr.map(function(el) {
  return{
        title: el.title,
        price: el.price,
  };
});


var newPriceStr = "";
newArr.forEach(function(elements) {
  newPriceStr += "<p>" + elements.title + "price" + elements.price +"</p>";
});

document.getElementById("answer2").innerHTML = newPriceStr;




//question 3




var gbpArr = items.filter(function(gbp) {
  return gbp.currency_code === "GBP";
});

var gbpStr = "";
gbpArr.forEach(function(elem) {
  gbpStr += "<p>" + elem.title + "price" + elem.price + "</p>";
});

document.getElementById("answer3").innerHTML = gbpStr;



//question 4



var woodArr = items.filter(function(wood) {
  return wood.materials.includes("wood");
});

var woodStr = "";
woodArr.forEach(function(element) {
  woodStr += "<p>" + element.title + "item" + "</p>";
});

document.getElementById("answer4").innerHTML = woodStr;




//question 5





var eightArr = items.filter(function(eight) {
  return eight.materials.length >= 8;
});

var eightStr = "";
eightArr.forEach(function(e) {
eightStr += "<p>" + e.title + e.price + e.materials + "</p>";
});

document.getElementById("answer5").innerHTML = eightStr;




// question 6





var sellerArr = items.filter(function(seller) {
  return seller.who_made === "i_did";
});

var sellerStr = "";
sellerArr.forEach(function(elemental) {
  sellerStr += "<p>" + elemental.title + "</p>";
});

document.getElementById("answer6").innerHTML = sellerStr;
