/* ---------------------------------------------------- +/
## Messages ##
Code related to the messages template
/+ ---------------------------------------------------- */

Template.messages.created = function () {
  //
};

Template.messages.helpers({
  //
});

Template.messages.rendered = function () {
  //
};

Template.messages.events({
  "submit .new-message": function(event) {

    // Get message text
    var message = event.target.message.value;

    // Insert message
    Meteor.call('createMessage', message, function(error, result) {
      if(error) {
        throw error;
      }
    });


    // Reset message field
    event.target.message.value = '';

    // Prevent default form submit
    return false;
  },
});
