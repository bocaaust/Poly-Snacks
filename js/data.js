// JavaScript Document

//Database

var locations = ["Phase 1 Residence Hall","Innovation, Science & Technology Building","Wellness Center"];

var items = [];

items[locations[0]] = ["doritos","sprite","mountain dew","coca-cola"];

items[locations[1]] = ["doritos","coca-cola"];

items[locations[2]] = ["sprite","mountain dew","coca-cola","hersheys"];

function check(){
	
	var output = "Item is Available at the Following Locations: \n";
	var par = document.getElementById("inputBox").value.toLowerCase();
	for (var i in locations){
		if (items[locations[i]].includes(par)){
			if ((output == "Item is Available at the Following Locations: \n") == false ){
				output+=", ";
			}
			output+=locations[i];
		}
	}
	
	if (output == "Item is Available at the Following Locations: \n" ){
	output = "No Results Found";	
	}
	alert(output);
}




//Inventory Filling

//Borrowed a seeded random number generator from http://indiegamr.com/generate-repeatable-random-numbers-in-js/

// the initial seed
Math.seed = 6;
 
// in order to work 'Math.seed' must NOT be undefined,
// so in any case, you HAVE to provide a Math.seed
Math.seededRandom = function(max, min) {
    max = max || 1;
    min = min || 0;
 
    Math.seed = (Math.seed * 9301 + 49297) % 233280;
    var rnd = Math.seed / 233280;
 
    return min + rnd * (max - min);
}

function fillInventory(){
	for (var l in locations){
		for (var i in items[locations[l]]){
			localStorage.setItem(l+"-"+i+"quantity", Math.floor(Math.seededRandom(1,30)));
			localStorage.setItem(l+"-"+i+"price", Math.floor(Math.seededRandom(1,4))+".99");
		}
	}
}

 fillInventory();
/*

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    
};*/

function fillTable(l){
		var table = document.getElementById("items");
		var loc = locations[l];
		var deals = [];
	
		var other = [...Array(locations.length).keys()];
		//other.remove(l);
		for( var f = 0; f < other.length; f++){ 
   if ( other[f] === l) {
     other.splice(f, 1); 
   }
}

		for (var i in items[loc]){
			var row = document.createElement('TR');
			var name = document.createElement("TD");
			name.innerHTML= items[loc][i];
			row.appendChild(name);
			
			var quant = document.createElement("TD");
			quant.innerHTML = localStorage.getItem(l+"-"+i+"quantity");
			row.appendChild(quant);
			
			var price = document.createElement("TD");
			price.innerHTML = localStorage.getItem(l+"-"+i+"price");
			row.appendChild(price);
			
			table.appendChild(row);
			deals[i] = true;
			for (var s = 0; s < other.length; s++){
				var n = other[s];
				
				if (n != undefined){
			
		if (items[locations[n]].includes(items[loc][i]) && deals[i]){
			if (parseFloat(localStorage.getItem(l+"-"+i+"price")) > parseFloat(localStorage.getItem(n+"-"+items[locations[n]].indexOf(items[loc][i])+"price"))){
				deals[i] = false;
			}
		}
	}
			}
			}
	
	
	for (var d in deals){
		var hasFound = true;
		var dealMessage= "Deals Found at " + loc + ":\n"
		if (deals[d]){
			hasFound = false;
			dealMessage+=items[loc][d];
		}
		if (hasFound)
			dealMessage = "No Deals Found";
	}
	
	document.getElementById("deals").addEventListener("click",function(){alert(dealMessage);});
		}
	
	
		

