AccountsTemplates.configure({
  homeRoutePath: '/'
});
AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/login',
    template: 'index',
    layoutTemplate: 'layout',
    contentRegion: 'content'
});
