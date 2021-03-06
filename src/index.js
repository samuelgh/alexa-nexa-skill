import alexia from 'alexia';
const app = alexia.createApp();

app.intent('HelloIntent', 'Hello', () => {
  return 'Hello from Alexia app';
});


app.intent('TurnOnIntent', 'Light on', () => {
  return {
    text: 'Your wish is my command',
    card: {
      title: 'Light on',
      content: 'Your wish is my command'
    }
  };
});

const config = {
  port: process.env.PORT || 4000,
};
app.createServer(config).start(() => {
  app.saveSpeechAssets();
  console.log('Server started');
});