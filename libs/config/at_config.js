AccountsTemplates.configure({
    confirmPassword: false,
    homeRoutePath: '/',
    defaultTemplate: 'index',
    defaultLayout: 'layout',
    //enablePasswordChange: true,
    defaultContentRegion: 'content'
});

AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/login',
    template: 'login',
    layoutTemplate: 'layout',
    contentRegion: 'content'
});
