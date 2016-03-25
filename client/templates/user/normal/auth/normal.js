"use strict"

Template.normal.helpers({
  target: function () {
    var loggedInUserId = Meteor.userId()

    if (! loggedInUserId) {
      return 'unauthorised'
    } else {
      return this.targetTemplate
    }
  }
})
