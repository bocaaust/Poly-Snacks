// JavaScript Document


//Map Code


  var mymap = L.map('mapid').setView([28.15, -81.849], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiYm9jYWF1c3QiLCJhIjoiY2szcW5xeHN5MDNsbzNkbzRqcm5wd3c0dSJ9.btu3jcSf7z0uarPWmgbS-Q'
}).addTo(mymap);

var dorms = new L.marker([28.15073532358767, -81.84925017022623]).bindPopup("<h4>Phase 1 Residence Hall</h4><a href='dorms.html'><button id='dormsButton' type='button' class='btn btn-lg btn-success'>Check Inventory</button></a>").addTo(mymap);


var wellness = new L.marker([28.14948662567814,-81.8472116913749]).bindPopup("<h4>Wellness Center</h4><a href='wellness.html'><button type='button' class='btn btn-lg btn-success'>Check Inventory</button></a>").addTo(mymap);

document.getElementById('search').addEventListener("click",check);



