import alexia from 'alexia';
const app = alexia.createApp();

app.intent('HelloIntent', 'Hello', () => {
  return 'Hello from Alexia app';
});


app.intent('TurnOnIntent', 'Light on', () => {
  return 'Your wish is my command';
});

app.createServer().start(() => {
  app.saveSpeechAssets();
  console.log('Server started');
});