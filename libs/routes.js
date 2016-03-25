var exposed = FlowRouter.group({});
exposed.route('/', {
  name:'index',
  triggersEnter: [
    function() {
      if (Roles.userIsInRole(Meteor.user(), ['admin'])) {
        return FlowRouter.go(FlowRouter.path('dashboard'));
      }
      else if (Roles.userIsInRole(Meteor.user(), ['author'])) {
        return FlowRouter.go(FlowRouter.path('authorDashboard'));
      }
      else if(Roles.userIsInRole(Meteor.user(), ['moderator'])) {
        return FlowRouter.go(FlowRouter.path('moderatorDashboard'));
      }
      else if(Meteor.user()) {
        return FlowRouter.go(FlowRouter.path('home'));
      }else{
        return FlowRouter.go(FlowRouter.path('index'));
      }
    }
  ],
  action: function() {
    return BlazeLayout.render("layout", {content: "index"});
  }
});


exposed.route('/login', {
  name: 'login',
  action: function() {
      return BlazeLayout.render('layout', {content: 'login'});
  }
});

exposed.route('/logout', {
    action: function() {
      AccountsTemplates.logout();
      return BlazeLayout.render('login');
    }
});


var admin = FlowRouter.group({
  prefix: "/admin",
  name: 'login',

});

admin.route('/', {
  name: 'dashboard',
  action: function() {
    BlazeLayout.render('layout', {content: 'admin',targetTemplate: 'dashboard'})

  }
});

var moderator = FlowRouter.group({
  prefix: "/moderator",
  name: 'moderator',

});

moderator.route('/', {
  name: 'moderatorDashboard',
  action: function() {
    BlazeLayout.render('layout', {content: 'moderator',targetTemplate: 'moderatorDashboard'})

  }
});

var author = FlowRouter.group({
  prefix: "/author",
  name: 'moderator',

});

author.route('/', {
  name: 'authorDashboard',
  action: function() {
    BlazeLayout.render('layout', {content: 'author',targetTemplate: 'authorDashboard'})

  }
});

var user = FlowRouter.group({
  prefix: "/home",
  name: 'moderator',

});

user.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('layout', {content: 'normal',targetTemplate: 'home'})

  }
});
