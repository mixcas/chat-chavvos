/* ---------------------------------------------------- +/

## Publications ##

All publications-related code. 

/+ ---------------------------------------------------- */

// Publish all items
Meteor.publish('allItems', function() {
  return Items.find();
});

// Publish a single item
Meteor.publish('singleItem', function(id) {
  return Items.find(id);
});

/* Messages */
// Publish all messages
Meteor.publish('allMessages', function() {
  return Messages.find();
});

// Publish a single item
Meteor.publish('singleMessage', function(id) {
  return Messages.find(id);
});
