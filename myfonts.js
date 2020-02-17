const express = require('express');
const app = express();

app.use(express.static('./'));

const dirTree = require("directory-tree");
const tree = dirTree("./fonts");
app.get('/test', function (req, res, next) {
    res.json(tree);
});

// app.get('/', (req, res) => {
//     res.send('An alligator approaches!');
// });

app.listen(3000, () => console.log(''));
var url = 'http://localhost:3000/public/index.html';
var start = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open');
require('child_process').exec(start + ' ' + url);