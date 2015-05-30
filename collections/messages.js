/* ---------------------------------------------------- +/

## Messages ##

All code related to the Messages collection goes here. 

/+ ---------------------------------------------------- */

Messages = new Meteor.Collection('messages');

// Allow/Deny

Messages.allow({
  insert: function(userId, doc){
    return can.createMessage(userId);
  },
  update:  function(userId, doc, fieldNames, modifier){
    return can.editMessage(userId, doc);
  },
  remove:  function(userId, doc){
    return can.removeMessage(userId, doc);
  }
});

// Methods

Meteor.methods({
  createMessage: function(message){
    Messages.insert({
      text: message,
      createdAt: new Date()
    });
  },
  removeMessage: function(message){
    if(can.removeMessage(Meteor.user(), message)){
      Messages.remove(message._id);
    }else{
      throw new Meteor.Error(403, 'You do not have the rights to delete this message.')
    }
  }
});
