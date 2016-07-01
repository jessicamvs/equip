'use strict';
var listDisplay = {};

// FINAL ARRAY
var fullArray = [];
var essentials = [];
// DECLARING VARIABLES
var $active = $('#activities');
var $weath = $('weather');
var $dur = $('duration');

// ITEMS ARRAY
var activityItems = [
  ['Hiking Shoes/Boots', '1 Pair of Socks', '1 Pair of Underwear', '1 Shirt/Long­sleeve Shirt', '1 Pair of Shorts/Pants', '30-­40 Liter Backpack', 'Water Bottles', 'Swimsuit (if hiking to a lake)'],
  ['Mountaineering Boots', 'Crampons', 'Ice Axe or Ice Tools', 'Helmet', 'Dry­treated Single Rope (30­-60 meters) (if protecting any pitches or roping up for glacier travel)', 'Harness', 'Pickets', 'Crevasse Rescue Kit (if crossing a glacier)', 'Light Alpine Climbing Rack (if climbing any rock)', 'Gaiters', 'Glacier Sunglasses or Goggles', 'GPS (recommended)', 'Emergency Locator Beacon (recommended)'],
  ['Snowboard/Splitboard', 'Snowboard Boots', 'Helmet', 'Trekking Poles', 'Avalanche Beacon', 'Snow Shovel', 'Avalanche Probe', 'Snow Study Kit', 'Snow Saw', 'Rutschblock Cord', 'Snowshoes/Skins', 'Snow Jacket', 'Snow Pants', 'Snow Gloves/Liners', 'Balaclava', 'Base Layers', 'Insulation Layer'],
  ['Skis (Touring Setup)', 'Ski Boots', 'Helmet', 'Poles', 'Avalanche Beacon', 'Snow Shovel', 'Avalanche Probe', 'Snow Study Kit', 'Snow Saw', 'Rutschblock Cord', 'Skins', 'Snow Jacket', 'Snow Pants', 'Snow Gloves/Liners', 'Balaclava', 'Base Layers', 'Insulation Layer'],
  ['Tent', 'Sleeping Pad', 'Sleeping Bag', 'Tarp', 'Portable Camping Stove', 'Cookware', 'Utensils for Cooking and Eating', 'Paper Plates', 'Paper Towels', 'Garbage Bags', 'Cooler and Ice', 'Water', 'Firewood (if fires allowed)', 'Fire Starter (matches, newspaper)', 'Bug repellent', 'Warm clothing (sleep clothes)', 'Swimwear and Towel (if camping near water/beach)'],
  ['Extra Cool/Ventilating Layers', 'Electrolytes (tablets or liquid)'],
  ['Rain Jacket', 'Rain Pants', 'Wide-brimmed Hat', 'Dry Bags', 'Pack Cover'],
  ['Rain Jacket', 'Rain Pants', 'Waterproof Hat', 'Dry Bags', 'Pack Cover'],
  ['Snow Jacket', 'Snow Pants', 'Snow Gloves/Liners', 'Balaclava', 'Base Layers', 'Insulation Layer'],
  [],
  ['Sleeping Pad', 'Sleeping Bag', 'Pillow', 'Toiletries', 'Tent/Shelter', 'Stove/Pot', 'Fuel', 'Extra Batteries', 'Water Treatment (filter and/or chemical treatment)', 'Food Storage (bear canister or hanging system)', 'Camp Shoes']
];

// ACTIVITY EVENT LISTENERS
var arr;
var yes;
$('#iconSection').on('click', 'img', function() {
  if (!$(this).is('.clickedOn')) {
    $(this).siblings().filter('.clickedOn').each(function(ele) {
      $(this).removeClass('clickedOn');
      this.src = this.src.split('icons/')[0] + 'icons/bw' + this.src.split('icons/')[1];
      arr = essentials.indexOf(activityItems[parseInt($(this).attr('data-activityItems'))]);
      console.log(essentials);
      essentials.splice(arr, arr);
      console.log(essentials);
    });

    $(this).addClass('clickedOn');
    this.src = 'img/icons/' + this.src.split('/bw')[1];
    essentials.push(activityItems[parseInt($(this).attr('data-activityItems'))]);
    console.log(essentials);
  }
});

listDisplay.handleMainDisplay = function() {
  $('#buttonList').on('click', '.buttons', function(e) {
    e.preventDefault();
    $('#iconSection').hide();
    $('#finalList').show();
    $('#buttonSection').show();
  });

};

listDisplay.handleMainDisplay();

// ADD LS
var $listEl = $('#tripName');
var finalArray = [];
function getLocalStorage() {
  var chartData = localStorage.getItem('listName');
  if (chartData) {
    finalArray = JSON.parse(chartData);
  } else {
    console.log('Local storage empty!! Initializing!');
    localStorage.setItem('listName', JSON.stringify(finalArray));
  }
};
getLocalStorage();

// EQUIP ME BUTTON
var listName = null;
 // -var listName;

 $('#results').on('click', function(e) {
   if(!$('#tripName').val()) {
     return;
   } else {
     e.preventDefault();
     listName = $('#tripName').val();
     var nameEl = $('#nameEl');
     finalArray.forEach(function(ele) {
       nameEl.text(listName);
       $('li').text(ele).append($('#loadList')).append($('#finalList'));
     });
   }
  //  -  if (!$listEl.value) {
  //  -    return;
  //  -  } else {
  //  -    e.preventDefault();
  //  -    var finalList = document.getElementById('finalList');
  //  -    var loadList = document.getElementById('loadList');
  //  -    listName = $listEl.value;
  //  -    var nameEl = document.getElementById('nameEl');
  //  -    for (var j = 0; j < finalArray.length; j++) {
  //  -      nameEl.textContent = listName;
  //  -      var listArray = document.createElement('li');
  //  -      listArray.textContent = finalArray[j];
  //  -      loadList.appendChild(listArray);
  //  -    }
  //  -    finalList.appendChild(loadList);
  //  -  }
  //  -  tripName.style.display = 'none';
  //  -  active.style.display = 'none';
  //  -  weath.style.display = 'none';
  //  -  dur.style.display = 'none';
  //  -  results.style.display = 'none';
  //  -  saveButton.style.display = 'block';
  //  -  clearList.style.display = 'block';
   //
 });

 // -results.addEventListener('click', handleButton);
 // -function handleButton(e) {
 // -  if (!listEl.value) {
 // -    return;
 // -  } else {
 // -    e.preventDefault();
 // -    var finalList = document.getElementById('finalList');
 // -    var loadList = document.getElementById('loadList');
 // -    listName = listEl.value;
 // -    var nameEl = document.getElementById('nameEl');
 // -    for (var j = 0; j < finalArray.length; j++) {
 // -      nameEl.textContent = listName;
 // -      var listArray = document.createElement('li');
 // -      listArray.textContent = finalArray[j];
 // -      loadList.appendChild(listArray);
 // -    }
 // -    finalList.appendChild(loadList);
 // -  }
 // -  tripName.style.display = 'none';
 // -  active.style.display = 'none';
 // -  weath.style.display = 'none';
 // -  dur.style.display = 'none';
 // -  results.style.display = 'none';
 // -  saveButton.style.display = 'block';
 // -  clearList.style.display = 'block';
 // -};

function Trip(tripName, tripList, objDes, objDetails, objWish) {
  this.names = tripName;
  this.lists = tripList;
  this.destination = '';
  this.details = '';
  this.wish = '';
};
function checkLS() {
  if (localStorage.totalTrips) {
    var z = localStorage.getItem('totalTrips');
    var a = JSON.parse(z);
    totalTrips = a;
  }
};
checkLS();

// SAVE BUTTON
var totalTrips = [];
$('#saveButton').on('click', function handleSave(e) {
  e.preventDefault();
  if (localStorage.totalTrips) {
    var z = localStorage.getItem('totalTrips');
    var a = JSON.parse(z);
    totalTrips = a;
  }
  var newTrip = new Trip(listName, finalArray, '', '', '');
  totalTrips.push(newTrip);
  console.log(totalTrips);

  var b = JSON.stringify(totalTrips);
  localStorage.setItem('totalTrips', b);
});

// CLEAR LIST BUTTON
$('#clearList').on('click', function handleClearList() {
  // lsClear.style.display = 'block';
  location.reload(false);
});

$(function(){
  $('#finalList').hide();
  $('#buttonSection').hide();
});
