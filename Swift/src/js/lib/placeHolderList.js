/*

This list provides a dummy array of JSON sent from the iOS companion app.
Need something to work with.

 */

var placeHolderList = [{
  "taskId": 1,
  "title": "Study Pebble",
  "subtitle": "NYU",
  "body": "I want to buy a something and that thing may or may not be this thing",
  "address": "123 East 123 St., New York, NY 10010"
}, {
  "taskId": 2,
  "title": "Buy some dinner",
  "subtitle": "Duane Reade",
  "body": "This is going to be so awesome!!!",
  "address": "123 East 123 St., New York, NY 10010"
},
{
  "taskId": 3,
  "title": "Buy a Superdry jacket",
  "subtitle": "Superdry",
  "body": "You have to remember to turn it inside out, first.",
  "address": "123 East 123 St., New York, NY 10010"
}];


placeHolderList = placeHolderList.map(function (value) {
  value.body = value.body + '\n\n' + value.address;
  return value;
});

if (typeof module !== 'undefined') {
  module.exports = placeHolderList;
}