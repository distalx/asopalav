Meteor.startup(function () {

  if (Meteor.users.find().fetch().length === 0) {

  console.log('Creating users: ');

  users = [
    {name:"User",email:"user@example.com",roles:[]},
    {name:"moderator",email:"moderator@example.com",roles:['moderator']},
    {name:"author",email:"author@example.com",roles:['author']},
    {name:"Admin",email:"admin@example.com",roles:['admin']}
  ];

  _.each(users, function (userData) {
    var id

    console.log(userData);

    id = Accounts.createUser({
      email: userData.email,
      password: "demo123",
      profile: { name: userData.name }
    });

    // email verification
    Meteor.users.update({_id: id},
                        {$set:{'emails.0.verified': true}});

    Roles.addUsersToRoles(id, userData.roles);

  });


});
