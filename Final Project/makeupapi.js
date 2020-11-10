//show the brand list
function showBrands(){
	var elem = document.getElementById("brandlist");
	elem.classList.add("brandlist");
	
	elem.innerHTML = "<h4 id='searchbrand'>" + "Search Brands you want to know!" + "</h3>" + "almay, alva, anna sui, annabelle, benefit, boosh, burt's bees, <br>butter london, c'est moi, cargo cosmetics, china glaze, clinique, coastal classic creation, colourpop, covergirl, dalish, deciem, Dior, dr. hauschka, e. l. f.  ,essie, <br>fenty, glossier, green people, iman, l'oreal, lotus cosmetics usa, maia's mineral galaxy, marcelle, marienatie, maybelline, milani, mineral fusion, misa, mistura, moov, <br>nudus, nyx, orly, pacifica, penny lane organics, physicians formula, piggy paint, pure anada, rejuva minerals, revlon, sally b's skin yummies, salon perfect, sante, <br>sinful colours, smashbox, stila, suncoat, w3llpeople, wet n wild, zorah, zorah biocosmetiques;"
}//showBrands

// get data from Makeup api
function fetchData() {
	document.getElementById("main").innerHTML = "";
	var search = document.getElementById("search").value;
	
	
  fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=' + search)
    .then(response => response.json())
    .then(data => updatePage(data)
    );
} // window.onload 
	
var elem;

// initialize variables after page loads
window.onload = function() {
	closeLightBox();
	console.log;
	elem  = document.getElementById("brandlist");
} // window.onload

// change the activity displayed 
function updatePage(data) {
  console.log(data); //prints json in console
  var makeup;
  for(makeup in data){
	  createMakeup(data[makeup]);
}//for
}
  function showName(name){
	var n;
	var output = "<ul>";
	for(n in name){
		output += "<li>" + name[n] + ", </li>";
	}//for
	output += "</ul>";
	return output;
}//showGenres

//constructs one makeup info entry on homepage
function createMakeup(makeupJSON){
	var elemMain = document.getElementById("main");
	var elemDiv = document.createElement("div");
	elemDiv.classList.add("elemdiv");//add a class to apply css
	
	var elemImage = document.createElement("img");
	elemImage.classList.add("images");//add a class to apply css
	
	var elemRating = document.createElement("div");
	elemRating.classList.add("rating"); //add a class to apply css
	
	var elemBrand = document.createElement("div");
	elemBrand.classList.add("brand"); //add a class to apply css
	
	var elemName = document.createElement("div");
	elemName.classList.add("name"); //add a class to apply css
	
	var elemCategory = document.createElement("div");
	elemCategory.classList.add("category"); //add a class to apply css
	
	var elemPrice = document.createElement("div");
	elemPrice.classList.add("price"); //add a class to apply css
	
	var elemDescription = document.createElement("div");
	elemDescription.classList.add("description"); //add a class to apply css
	
	var elemLink = document.createElement("div");
	elemLink.classList.add("link"); //add a class to apply css
	
	var elemDetail = document.createElement("div");
	elemLink.classList.add("detail"); //add a class to apply css
	
	var elemOutput = document.createElement("div");
	elemLink.classList.add("output"); //add a class to apply css
	
	//add JSON data to elements
	elemImage.src = makeupJSON.image_link;
	//elemBrand.innerHTML = makeupJSON.brand;
	elemName.innerHTML = "<b>" + makeupJSON.name + "</b>" + "<br>";;
	elemCategory.innerHTML = "Category: " + makeupJSON.category + "<br>";;
	elemRating.innerHTML = "Rating: " + makeupJSON.rating + "<br>";;
	elemPrice.innerHTML = "Price: " + "$" + makeupJSON.price + "<br>";;
	/*elemDescription.innerHTML = "Description: <br>" + makeupJSON.description;*/
	//elemLink.innerHTML = "<a href='" + makeupJSON.product_link + "'>Buy Now!</a>";
	
	
	//elemDetail.innerHTML = "More Details";
	elemOutput.innerHTML  = "<a class='product' href='javascript:showLightBox(\""+makeupJSON.name + "\", \"" + makeupJSON.image_link + "\", \"" + makeupJSON.brand + "\", \"" + makeupJSON.price + "\", \"" + makeupJSON.category + "\", \"" + makeupJSON.product_link + "\", \"" + makeupJSON.description + "\")'>More Details</a>";

	//add 6 elements to the div tag
	elemDiv.appendChild(elemImage);
	//elemDiv.appendChild(elemBrand);
	elemDiv.appendChild(elemName);
	elemDiv.appendChild(elemRating);
	elemDiv.appendChild(elemCategory);
	elemDiv.appendChild(elemPrice);
	elemDiv.appendChild(elemDescription);
	elemDiv.appendChild(elemLink);
	//elemDiv.appendChild(elemDetail);
	elemDiv.appendChild(elemDescription);
	elemDiv.appendChild(elemOutput);

	//get id of show and add product list
	var showId = makeupJSON.brand;
	//fetchProduct(showId, elemDiv);
	
	//add this entry to main
	elemMain.appendChild(elemDiv);
	
}//create Makeup



//show a lightbox displaying the makeup product details in makeupJSON
function showLightBox(name, img, brand, price, category, product_link, description){
	
	document.getElementById("lightbox").style.display="block";
	document.getElementById("message").innerHTML = "<img src='" + img + "'alt='product image'>";
	//document.getElementById("message").innerHTML += "<h3>" + brand + "</h3>";
	document.getElementById("message").innerHTML += "<h3>" + name + "</h3>";
	document.getElementById("message").innerHTML += "<h3>Category: " + category + "</h3>";
	document.getElementById("message").innerHTML += "<h3>Price: $" + price + "</h3>";
	document.getElementById("message").innerHTML += "<h3 id='description'>Description: <br>" + description + "</h3>";
	document.getElementById("message").innerHTML += "<a id='buynow' href='" + product_link + "'>Buy Now</a>";
	
}//show lightBox

// close the lightbox
 function closeLightBox(){
     document.getElementById("lightbox").style.display="none";
 } // closeLightBox 