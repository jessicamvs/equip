'use strict';

var tripsArray = [];
var where, details, wish;

// TAKES INFO FROM LOCAL STORAGE
function checkLS() {
  if (localStorage.totalTrips) {
    tripsArray = JSON.parse(localStorage.getItem('totalTrips'));
  }
};
// INPUT NAMES TO DROPDOWN
function dropInput() {
  // var $dropDown = $('#dropdown');
  tripsArray.forEach(function(trip) {
    var dropNames = '<option>' + trip + '</option>';
    $('#dropDown').append(dropNames);
  });
  // for(var i = 0; i < tripsArray.length; i ++) { //forEach or map
  //   var dropNames = 'document.createElement('option')';
  //   dropNames.textContent = tripsArray[i].names;
  //   dropNames.value = i;
  //   $dropDown.appendChild(dropNames);
  // }
};
// CREATE DROP LIST
function createDropList() {
  var $dropValue = $('#dropdown').value;
  var $listArticle = $('#listArticle');
  var $listContainer = $('#listContainer');
  $listArticle.removeChild(listContainer);
  var listContainer = document.createElement('ul');
  $listContainer.setAttribute('id', 'listContainer');
  $listArticle.appendChild(listContainer);
  if (!$dropValue) {
    alert('Head to the EQUIP tab to get a list started');
  } else {
    var emptyList = [];
    for (var i = 0; i < tripsArray[$dropValue].lists.length; i++) {
      emptyList.push(tripsArray[$dropValue].lists[i]);
      var equipEl = document.createElement('li');
      equipEl.textContent = emptyList[i];
      listContainer.appendChild(equipEl);
    }
  }
};
// PUT VALUES INTO LOCAL STORAGE
function newLS() {
  var $dropValue = $('#dropdown').val();
  $where = $('#where').val();
  tripsArray[$dropValue].destination = where;
  $details = $('#details').val();
  tripsArray[$dropValue].details = details;
  $wish = $('#wish').value;
  tripsArray[$dropValue].wish = wish;
  // LS ARRAY
  var storeArray = JSON.stringify(tripsArray);
  localStorage.setItem('totalTrips', storeArray);
};
// PRINT FORM CONTENT
function makePastLists() {
  // event.preventDefault();
  var $dropValue = $('#dropdown').val();
  var $inputSection = $('#inputSection');
  var $journalEntries = $('#journalEntries');
  $inputSection.children().remove();(journalEntries);
  var journalEntries = document.createElement('div');
  $journalEntries.attr('id', 'journalEntries');
  var destination = document.createElement('h5');
  destination.textContent = 'Destination:';
  $journalEntries.append(destination);
  var inputDestination = document.createElement('p');
  inputDestination.textContent = tripsArray[$dropValue].destination;
  $journalEntries.append(inputDestination);
  var tripDetails = document.createElement('h5');
  tripDetails.textContent = 'Trip Details:';
  $journalEntries.append(tripDetails);
  var inputTripDetails = document.createElement('p');
  inputTripDetails.textContent = tripsArray[$dropValue].details;
  $journalEntries.append(inputTripDetails);
  var wishIdBrought = document.createElement('h5');
  wishIdBrought.textContent = 'Wish I\'d Brought:';
  $journalEntries.append(wishIdBrought);
  var inputWish = document.createElement('p');
  inputWish.textContent = tripsArray[$dropValue].wish;
  $journalEntries.append(inputWish);
  $inputSection.append($journalEntries);
};
// CHECK IF DROPDOWN HAS INFOMATION
var inputForm = document.getElementById('inputForm');
function clearForm() {
  where = null;
  details = null;
  wish = null;
};
function dropDownInfo() {
  var dropValue = document.getElementById('dropdown').value;
  var journalEntries = document.getElementById('journalEntries');
  if (tripsArray[dropValue].destination.length === 0 && tripsArray[dropValue].details.length === 0 && tripsArray[dropValue].wish.length === 0) {
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
  createDropList();
  dropDownInfo();
};
// SAVE LISTS BUTTON
var pastListButton = document.getElementById('pastListButton');
// var formArticle = document.getElementById('formArticle');
pastListButton.addEventListener('click', handleSaveClick);
function handleSaveClick(e) {
  e.preventDefault();
  console.log('THIS IS SAVED TO LOCAL STORAGE');
  newLS();
  makePastLists();
  location.reload(false);
};
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
