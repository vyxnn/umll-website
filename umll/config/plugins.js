module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('API_ACCESS_KEY'),
        secretAccessKey: env('SECRET_ACCESS_KEY'),
        region: "ap-southeast-2c",
        params: {
          Bucket: 'umllbucket',
        },
      },
    },
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: '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'
      },
      settings: {
        defaultFrom: 'unimelbloveletters@gmail.com',
        defaultReplyTo: 'unimelbloveletters@gmail.com',
      },
    }
    // ...
  });
  