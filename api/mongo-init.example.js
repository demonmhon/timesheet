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
db.sample_collection.insert([{ title: 'DX Timesheet', name: 'DXTIMESHEET' }]);
