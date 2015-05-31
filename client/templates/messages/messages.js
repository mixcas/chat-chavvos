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
  rtc = new Webrtc2images({
    width: 200,
    height: 150,
    frames: 10,
    type: 'image/jpeg',
    quality: 0.8,
    interval: 200
  });

  rtc.startVideo(function (err) {
    if (err) {
      console.log(err);
      rtc = false;
    }

    if(!rtc) { // TODO: Check webM support
      // Show notification 
    }
  });
};

Template.messages.events({
  "submit .new-message": function(event) {

    // Get message text
    var message = event.target.message.value;

    // Get frames
    rtc.recordVideo(function (err, videoFrames) {
      if (err) {
        console.log(err);
      } else {
        Meteor.call('transform', videoFrames, function(error, result) {
          // Insert message
          Meteor.call('createMessage', message, result, function(error, result) {
            if(error) {
              throw error;
            }
          });
        });

        // Reset message field
        event.target.message.value = '';

      }
    });
    // Prevent default form submit
    return false;
  },
});
