import alexia from 'alexia';
const app = alexia.createApp();

app.intent('HelloIntent', 'Hello', () => {
  return 'Hello from Alexia app';
});

app.createServer().start(() => {
  console.log('Server started');
});