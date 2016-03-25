FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render('layout', {content: 'index'});
    }
});


FlowRouter.route('/login', {
    action: function() {
        BlazeLayout.render('layout', {content: 'login'});
    }
});
FlowRouter.route('/logout', {
    action: function() {
      AccountsTemplates.logout();
      return BlazeLayout.render('login');
    }
});
