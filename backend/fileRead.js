// File reading script

const { readFile } = require('fs');

readFile('testFile', 'utf-8', (err, data) => {
    if (err) {
	console.error(err);
	return;
    }
    console.log(data);
});
