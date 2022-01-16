import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8080;

// TODO: connect to SQL DF

// Add cors for local dev, react dev app on port 3000 calling 8080
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// set the static files location /public/img will be /img for users
// app.use(express.static(__dirname + '/public'));

// Static client production
app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'build')));
// Static server-side files
app.use(express.static('public'));

// TODO: create routes folder
app.get('/api/json', (req, res) => {
  res.json({
    hello: 'world'
  });
});

app.use('/api/*', (req, res) => {
	const error = 404;
	res.status(error).json({
		error,
		message: "Not found"
	});
})

// All remaining requests pass through to the client
app.use('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '..', '..', 'frontend', 'build', 'index.html'));
});

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port, () => {
  console.log(`Shout out to his family on ${port}`);
});
