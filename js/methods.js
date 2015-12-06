
Meteor.methods({
  'purge_logs': function() {
    if (Meteor.user()) {
      Logs.remove({})
    }
  }
})
