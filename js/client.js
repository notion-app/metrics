
if (Meteor.isClient) {
  Meteor.subscribe("log-stream")

  Template.body.helpers({
    logs: function() {
      return Logs.find({}, {sort: {time: -1}})
    }
  })

  Template.navbar.events({
    "click #purge_database": function() {
      Meteor.call("purge_logs")
    }
  })

  Template.logmessage.helpers({
    timeSince: function() {
      return moment(this.time).fromNow()
    },
    isLevelInfo: function() {
      return this.level === "info"
    },
    isLevelError: function() {
      return this.level === "error"
    }
  })

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  })

}
