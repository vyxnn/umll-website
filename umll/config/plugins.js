module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('stupid amazon 2.0'),
        secretAccessKey: env('stupid amazon'),
        region: env("ap-southeast-2c"),
        params: {
          Bucket: env('umllbucket'),
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
  