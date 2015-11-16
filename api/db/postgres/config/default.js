module.exports = {
  database: 'de93afpme4cpgn',
  username: 'ejlwbmszmwqool',
  port: 5432,
  password: 'n-j5bzheYX-6DKjz-0tE-fErls',
  host: 'ec2-50-16-238-141.compute-1.amazonaws.com',
  pool: {
    min: 0,
    max: 5,
    idle: 10000
  },
  initial: {
    user: {
      email: 'god@yetilogs.com',
      password: 'godmodeisgoodmode'
    },
    entry: {
      level: 'FAKED',
      message: { user: { email: 'default@data.com' } },
      code: 'FAKED_DATA',
      ip: '127.0.0.1'
    },
    project: {
      users: [ 'god@yetilogs.com', 'climber@rockymount.com' ],
      name: 'God loves loggin\'',
      entries: [ '98234248582', '23489589223' ]
    }
  }
}
