'use strict';

var tripsArray = [];
var trip = null;
var where, details, wish;

function selectionValue() {
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
}

// CREATE DROP LIST
function createDropList() {
  var $dropValue = $('#dropDown').val();
  $('#listArticle').children().remove();
  $('#listArticle').append('<ul id="listContainer"></ul>');
  if (!$dropValue) {
    alert('Head to the EQUIP tab to get a list started');
  } else {
    tripsArray.forEach(function(trips) {
      console.log(trips);
      if (trips.names === $dropValue) {
        trips.lists.forEach(function(item) {
          $('#listContainer').append('<li>' + item + '</li>');
        });
      }
    });
  }
}

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
  var $journalEntries = $('#journalEntries');
  $('#inputSection').children().remove();
  $journalEntries.append('<h5>Destination: </h5>');
  $journalEntries.append('<p>' + trip.destination + '</p>');
  $journalEntries.append('<h5>Trip Details: </h5>');
  $journalEntries.append('<p>' + trip.details + '</p>');
  $journalEntries.append('<h5>Wish I\'d Brought: </h5>');
  $journalEntries.append('<p>' + trip.wish + '</p>');
  $('#inputSection').append($journalEntries);

};
// CHECK IF DROPDOWN HAS INFOMATION
var $inputForm = $('#inputForm');
function clearForm() {
  where = null;
  details = null;
  wish = null;
}

function dropDownInfo() {
  var journalEntries = document.getElementById('journalEntries');
  if (trip.destination.length === 0 && trip.details.length === 0 && trip.wish.length === 0) {
    $inputForm.attr('hidden', false);
    journalEntries.style.display = 'none';
    clearForm();
  } else {
    makePastLists();
    $inputForm.attr('hidden', true);
  }
}

// DROPDOWN SUBMIT BUTTON
submit.addEventListener('click', handleSubmitClick);
function handleSubmitClick(e) {
  e.preventDefault();
  selectionValue();
  createDropList();
  dropDownInfo();
};

// SAVE LISTS BUTTON
$('#pastListButton').on('click', function(e) {
  e.preventDefault();
  console.log('THIS IS SAVED TO LOCAL STORAGE');
  newLS();
  makePastLists();
  location.reload(false);
});

// CLEAR ALL BUTTONS
$('#deleted').on('click', function() {
  alert('Press "OK" to delete ALL of your past list entries');
  location.reload(false);
  localStorage.clear();
});

$(document).ready(function() {
  checkLS();
  dropInput();
});
