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
var yeah;
var yeah2;
$('#iconSection').on('click', 'img', function() {
  if (!$(this).is('.clickedOn')) {
    $(this).addClass('clickedOn');
    this.src = 'img/icons/' + this.src.split('/bw')[1];
    yeah = $(this).attr('data-essentials');
    console.log(yeah);
    console.log(typeof activityItems[0]);
  }

  $(this).siblings().each(function(ele) {
    if (this.src.split('/bw').length === 1) {
      $(this).removeClass('clickedOn');
      this.src = this.src.split('icons/')[0] + 'icons/bw' + this.src.split('icons/')[1];
    }
  });
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
//var chartData = localStorage.getItem();
function getLocalStorage() {
  if (chartData) {
    finalArray = [];
    finalArray = JSON.parse(chartData);
  } else {
    console.log('Local storage empty!! Initializing!');
    localStorage.setItem(listName, JSON.stringify(finalArray));
  }
};

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
