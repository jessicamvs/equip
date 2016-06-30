'use strict';

var tripsArray = [];
var trip = null;
// var where, details, wish;

function selectionValue() {             // Placeholder function to get the selected object
  tripsArray.forEach(function(trips) {
    if($('#dropDown').val() === trips.names) {
      trip = trips;
    }
  });
}

// TAKES INFO FROM LOCAL STORAGE
function checkLS() {
  if (localStorage.totalTrips) {
    tripsArray = JSON.parse(localStorage.getItem('totalTrips'));
  }
}
// INPUT NAMES TO DROPDOWN
function dropInput() {
  tripsArray.forEach(function(trip) {
    $('#dropDown').append('<option>' + trip.names + '</option>');
  });
};
// CREATE DROP LIST
function createDropList() {
  var $dropValue = $('#dropDown').val();
  $('#listArticle').children().remove();
  $('#listArticle').append('<ul id="listContainer"></ul>');
  if (!$dropValue) {
    alert('Head to the EQUIP tab to get a list started');
  } else {
    tripsArray.forEach(function(trips) {
      if (trips.names === $dropValue) {
        trips.lists.forEach(function(item) {
          $('#listContainer').append('<li>' + item + '</li>');
        });
      }
    });
  }
};

// PUT VALUES INTO LOCAL STORAGE
function newLS() {
  var $where = $('#where').val();
  trip.destination = $where;
  var $details = $('#details').val();
  trip.details = $details;
  var $wish = $('#wish').val();
  trip.wish = $wish;
  // LS ARRAY
  var storeArray = JSON.stringify(tripsArray);
  localStorage.setItem('totalTrips', storeArray);
};
// PRINT FORM CONTENT
function makePastLists() {
  // event.preventDefault();
  // var $dropValue = $('#dropdown').val(); //Refer back to selection method?
  // var $inputSection = $('#inputSection');
  var $journalEntries = $('#journalEntries');
  // console.log($journalEntries);
  $('#inputSection').children().remove();
  // (journalEntries);
  // var journalEntries = document.createElement('div');
  // $journalEntries.attr('id', 'journalEntries');
  // var $journalEntries = $('<div id="journalEntries></div>"');
  $journalEntries.append('<h5>Destination: </h5>');
  $journalEntries.append('<p>' + trip.destination + '</p>');
  $journalEntries.append('<h5>Trip Details: </h5>');
  $journalEntries.append('<p>' + trip.details + '</p>');
  $journalEntries.append('<h5>Wish I\'d Brought: </h5>');
  $journalEntries.append('<p>' + trip.wish + '</p>');
  // var destination = document.createElement('h5');
  // destination.textContent = 'Destination:';
  // $journalEntries.append(destination);
  // var inputDestination = document.createElement('p');
  // inputDestination.textContent = tripsArray[$dropValue].destination;
  // $journalEntries.append(inputDestination);

  // var tripDetails = document.createElement('h5');
  // tripDetails.textContent = 'Trip Details:';
  // $journalEntries.append(tripDetails);

  // var inputTripDetails = document.createElement('p');
  // inputTripDetails.textContent = tripsArray[$dropValue].details;
  // $journalEntries.append(inputTripDetails);

  // var wishIdBrought = document.createElement('h5');
  // wishIdBrought.textContent = 'Wish I\'d Brought:';
  // $journalEntries.append(wishIdBrought);

  // var inputWish = document.createElement('p');
  // inputWish.textContent = tripsArray[$dropValue].wish;
  // $journalEntries.append(inputWish);
  $('#inputSection').append($journalEntries);

};
// CHECK IF DROPDOWN HAS INFOMATION
var inputForm = document.getElementById('inputForm');
function clearForm() {
  where = null;
  details = null;
  wish = null;
};
function dropDownInfo() {
  var $dropValue = $('#dropdown').val();
  var journalEntries = document.getElementById('journalEntries');
  if (tripsArray[$dropValue].destination.length === 0 && tripsArray[$dropValue].details.length === 0 && tripsArray[$dropValue].wish.length === 0) {
    inputForm.removeAttribute('hidden');
    journalEntries.style.display = 'none';
    clearForm();
  } else {
    makePastLists();
    inputForm.setAttribute('hidden', true);
  }
};

// DROPDOWN SUBMIT BUTTON
submit.addEventListener('click', handleSubmitClick);
function handleSubmitClick(e) {
  e.preventDefault();
  selectionValue();                                   // Call for Placeholder selection function
  createDropList();
  dropDownInfo();
};

// SAVE LISTS BUTTON
// var $pastListButton = $('#pastListButton');
// var formArticle = document.getElementById('formArticle');
$('#pastListButton').on('click', function(e) {
  e.preventDefault();
  console.log('THIS IS SAVED TO LOCAL STORAGE');
  newLS();
  makePastLists();
  location.reload(false);
});

// CLEAR ALL BUTTONS
deleted.addEventListener('click', handleDeleteClick);
function handleDeleteClick() {
  console.log('deleting local storage!');
  alert('Press "OK" to delete ALL you past list entries.');
  location.reload(false);
  localStorage.clear();
};

$(document).ready(function() {
  checkLS();
  dropInput();
});
