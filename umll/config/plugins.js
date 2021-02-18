module.exports = ({ env }) => ({
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
  