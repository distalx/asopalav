"use strict"

Template.author.helpers({
  target: function () {
    var loggedInUserId = Meteor.userId()

    if (!Roles.userIsInRole(loggedInUserId, ['author'])) {
      return 'unauthorised'
    } else {
      return this.targetTemplate
    }
  }
})
