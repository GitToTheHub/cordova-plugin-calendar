'use strict';

var title = 'My Event Title';
var loc = 'My Event Location';
var notes = 'My interesting Event notes.';
var startDate = new Date();
var endDate = new Date();
var calendarName = 'MyCal';
var options = {
  url: 'https://github.com/GitToTheHub/cordova-plugin-calendar-2',
  calendarName: calendarName, // iOS specific
  calendarId: 1 // Android specific
};

// clean up the dates a bit
startDate.setMinutes(0);
endDate.setMinutes(0);
startDate.setSeconds(0);
endDate.setSeconds(0);

// add a few hours to the dates, JS will automatically update the date (+1 day) if necessary
startDate.setHours(startDate.getHours() + 2);
endDate.setHours(endDate.getHours() + 3);

function onSuccess(msg) {
  alert('Calendar success: ' + JSON.stringify(msg));
}

function onError(msg) {
  alert('Calendar error: ' + JSON.stringify(msg));
}

function hasReadPermission() {
  window.plugins.calendar.hasReadPermission(onSuccess);
}

function requestReadPermission() {
  window.plugins.calendar.requestReadPermission(onSuccess);
}

function hasWritePermission() {
  window.plugins.calendar.hasWritePermission(onSuccess);
}

function requestWritePermission() {
  window.plugins.calendar.requestWritePermission(onSuccess);
}

function hasReadWritePermission() {
  window.plugins.calendar.hasReadWritePermission(onSuccess);
}

function requestReadWritePermission() {
  window.plugins.calendar.requestReadWritePermission(onSuccess);
}

function openCalendar() {
  // today + 3 days
  var d = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
  window.plugins.calendar.openCalendar(d, onSuccess, onError);
}

function listCalendars() {
  window.plugins.calendar.listCalendars(onSuccess, onError);
}

function createCalendar() {
  var options = window.plugins.calendar.getCreateCalendarOptions();
  options.calendarName = "MyCordovaCalendar";
  options.calendarColor = "#FF0000"; // red
  window.plugins.calendar.createCalendar(options, onSuccess, onError);
}

function deleteCalendar() {
  window.plugins.calendar.deleteCalendar("MyCordovaCalendar", onSuccess, onError);
}

function deleteEvent() {
  window.plugins.calendar.deleteEvent(title, loc, notes, startDate, endDate, onSuccess, onError);
}

function createCalendarEvent() {
  window.plugins.calendar.createEvent(title, loc, notes, startDate, endDate, onSuccess, onError);
}

function createCalendarEventInteractively() {
  window.plugins.calendar.createEventInteractively(title, loc, notes, startDate, endDate, onSuccess, onError);
}

function createCalendarEventInteractivelyWithOptions() {
  window.plugins.calendar.createEventInteractivelyWithOptions(title, loc, notes, startDate, endDate, options, onSuccess, onError);
}

function createCalendarEventWithOptions() {
  window.plugins.calendar.createEventWithOptions(title, loc, notes, startDate, endDate, options, onSuccess, onError);
}

function findEventWithFilter() {
  window.plugins.calendar.findEvent(title, loc, notes, startDate, endDate, onSuccess, onError);
}

function findEventNoFilter() {
  window.plugins.calendar.findEvent(null, null, null, startDate, endDate, onSuccess, onError);
}

function listEventsInRange() {
  startDate.setHours(startDate.getHours() - 12);
  window.plugins.calendar.listEventsInRange(startDate, endDate, onSuccess, onError);
}

window.onerror = function(msg, file, line) {
  alert(msg + '; ' + file + '; ' + line);
};