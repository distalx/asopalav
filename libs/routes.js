FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render('layout', {content: 'index'});
    }
});


var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
  triggersEnter: [function(context, redirect) {
    console.log('running group triggers');
  }]
});

adminRoutes.route('/', {
  action: function() {
    BlazeLayout.render('adminLayout', {content: 'dashboard'});
  },
  triggersEnter: [function(context, redirect) {
    console.log('running /vendor trigger');
  }]
});
