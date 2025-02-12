db.createUser({
  user: '<user>',
  pwd: '<password>',
  roles: [
    {
      role: 'readWrite',
      db: '<db>',
    },
  ],
});

db = new Mongo().getDB('timesheet');
db.createCollection('projects', { capped: false });
db.projects.insert([{ title: 'DX Timesheet', name: 'DXTIMESHEET' }]);
