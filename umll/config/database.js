module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'umll-database.crg7gki7hwrq.ap-southeast-2.rds.amazonaws.com'), 
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'), 
        username: env('DATABASE_USERNAME', 'umll'), 
        password: env('DATABASE_PASSWORD', `zpuSF9tTsThSB5D`)
      },
      options: {
        ssl: false,
      },
    },
  },
});

