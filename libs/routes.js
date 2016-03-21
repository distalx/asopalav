FlowRouter.route('/login', {
    action: function() {
        BlazeLayout.render('layout', {content: 'index'});
    }
});

FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render('userLayout', {content: 'home'});
    }
});


var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
  triggersEnter: [function(context, redirect) {
    console.log('running admin group triggers');
  }]
});

var moderatorRoutes = FlowRouter.group({
  prefix: '/moderator',
  name: 'moderator',
  triggersEnter: [function(context, redirect) {
    console.log('running moderator group triggers');
  }]
});

adminRoutes.route('/', {
  action: function() {
    BlazeLayout.render('adminLayout', {content: 'dashboard'});
  },
  triggersEnter: [function(context, redirect) {
    console.log('running /admin trigger');
  }]
});

moderatorRoutes.route('/', {
  action: function() {
    BlazeLayout.render('moderatorLayout', {content: 'cp'});
  },
  triggersEnter: [function(context, redirect) {
    console.log('running /moderator trigger');
  }]
});
