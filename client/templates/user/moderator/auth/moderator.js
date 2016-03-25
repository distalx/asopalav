"use strict"

Template.moderator.helpers({
  target: function () {
    var loggedInUserId = Meteor.userId()

    if (!Roles.userIsInRole(loggedInUserId, ['moderator'])) {
      return 'unauthorised'
    } else {
      return this.targetTemplate
    }
  }
})
