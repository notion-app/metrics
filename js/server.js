
Logs = new Mongo.Collection("logs")

if (Meteor.isServer) {

  Meteor.publish("log-stream", function() {
    if (this.userId) {
      return Logs.find()
    } else {
      return []
    }
  })

  Accounts.config({
    forbidClientAccountCreation : true
  })

}
