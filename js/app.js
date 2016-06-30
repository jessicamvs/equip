'use strict';
var listDisplay = {};

// FINAL ARRAY
var fullArray = [];
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
  ['Extra Cool/Ventilating Layers', 'Electrolytes (tablets or liquid)'], ['Rain Jacket', 'Rain Pants', 'Wide-brimmed Hat', 'Dry Bags', 'Pack Cover'], ['Rain Jacket', 'Rain Pants', 'Waterproof Hat', 'Dry Bags', 'Pack Cover'], ['Snow Jacket', 'Snow Pants', 'Snow Gloves/Liners', 'Balaclava', 'Base Layers', 'Insulation Layer'], [],
  ['Sleeping Pad', 'Sleeping Bag', 'Pillow', 'Toiletries', 'Tent/Shelter', 'Stove/Pot', 'Fuel', 'Extra Batteries', 'Water Treatment (filter and/or chemical treatment)', 'Food Storage (bear canister or hanging system)', 'Camp Shoes']
];

// ACTIVITY CONSTRUCTOR
// function Equip(names, src) {
//   this.names = names;
//   this.src = 'img/icons/' + src;
//   fullArray.push(this);
// };

// ACTIVITY EVENT LISTENERS
$('#iconSection').on('click', 'img', function() {
  if (!$(this).is('.clickedOn')) {
    $(this).addClass('clickedOn');
    this.src = 'img/icons/' + this.src.split('/bw')[1];
  }
  $(this).siblings().each(function(ele) {
    if (this.src.split('/bw').length === 1) {
      $(this).removeClass('clickedOn');
      this.src = this.src.split('icons/')[0] + 'icons/bw' + this.src.split('icons/')[1];
    }
  });
});

$($iconHike).on('click', function() {
  handleIcon(activityItems[0]);
});
$($iconMount).on('click', function() {
  handleIcon(activityItems[1]);
});
$($iconSnowboard).on('click', function() {
  handleIcon(activityItems[2]);
});
$($iconSki).on('click', function() {
  handleIcon(activityItems[3]);
});
$($iconCamp).on('click', function() {
  handleIcon(activityItems[4]);
});
// ACTIVITY EVENT HANDLER
// function handleIcon(icon) {
//   var $finalList = $('#finalList');
//   // finalList.style.display = 'none';
//   essentials = ['Knife or Multitool', 'Firestarter and Matches', 'Map', 'Compass', 'First Aid Kit', 'Flashlight', 'Sun Protection (hat, sunglasses, sunscreen)', 'Whistle', 'Extra Clothing (hat, gloves, socks, underwear)', 'Extra Food (Energy Bar or Gel)'];
//   for (var i = 0; i < icon.length; i++) {
//     essentials.push(icon[i]);
//   }
  // console.log(essentials);
// };
// WEATHER EVENT LISTENERS
$iconSunny.addEventListener('click', function() {
  handleIcon2(activityItems[5]);
});
iconRainy.addEventListener('click', function() {
  handleIcon2(activityItems[6]);
});
iconCloudy.addEventListener('click', function() {
  handleIcon2(activityItems[7]);
});
iconSnowy.addEventListener('click', function() {
  handleIcon2(activityItems[8]);
});
// WEATHER EVENT HANDLER
// function handleIcon2(icon) {
//   var finalList = document.getElementById('finalList');
//   // finalList.style.display = 'none';
//   for (var i = 0; i < icon.length; i++) {
//     essentials.push(icon[i]);
//   }
// };
// DURATION EVENT LISTENERS
iconOne.addEventListener('click', function() {
  handleIcon3(activityItems[9]);
});
iconTwo.addEventListener('click', function() {
  handleIcon3(activityItems[10]);
});
iconThree.addEventListener('click', function() {
  handleIcon3(activityItems[10]);
});
// DURATION EVENT HANDLER
// var finalArray;
// function handleIcon3(icon) {
//   var finalList = document.getElementById('finalList');
//   // finalList.style.display = 'none';
//   for (var i = 0; i < icon.length; i++) {
//     essentials.push(icon[i]);
//   }
//   finalArray = [];
//   essentials.forEach(function(e) {
//     if (finalArray.indexOf(e) === -1) {
//       finalArray.push(e);
//     }
//   })
// };

listDisplay.handleMainDisplay = function() {
  $('#buttonList').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    console.log(this);
    $('#' + $(this).attr('content')).fadeIn();
  });

  $('#buttonList .tab:first').click();
};

listDisplay.handleMainDisplay();



// ADD LS
var listEl = document.getElementById('tripName');
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
// EQUIP ME BUTTON
var listName;
results.addEventListener('click', handleButton);
function handleButton(e) {
  if (!listEl.value) {
    return;
  } else {
    e.preventDefault();
    var finalList = document.getElementById('finalList');
    var loadList = document.getElementById('loadList');
    listName = listEl.value;
    var nameEl = document.getElementById('nameEl');
    for (var j = 0; j < finalArray.length; j++) {
      nameEl.textContent = listName;
      var listArray = document.createElement('li');
      listArray.textContent = finalArray[j];
      loadList.appendChild(listArray);
    }
    finalList.appendChild(loadList);
  }
  tripName.style.display = 'none';
  $active.style.display = 'none';
  $weath.style.display = 'none';
  $dur.style.display = 'none';
  results.style.display = 'none';
  saveButton.style.display = 'block';
  clearList.style.display = 'block';
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
saveButton.addEventListener('click', handleSave);
function handleSave(e) {
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
};
// CLEAR LIST BUTTON
clearList.addEventListener('click', handleClearList);
function handleClearList() {
  // lsClear.style.display = 'block';
  location.reload(false);
};
