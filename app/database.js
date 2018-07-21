module.exports = function (mongoose) {

  const config= {
    dbHost: 'mongodb://localhost',
    url: 'mongodb://localhost:27017/gqlTest',
    dbName: 'gqlTest'
  }
  mongoose.connect(config.url, { useNewUrlParser: true });
  var db = mongoose.connection;
  db.on('connect',()=>{
    console.log('db connected')
  })
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('connection is open')
  });


}
