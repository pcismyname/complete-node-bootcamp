    fs.readFile('test-file.txt', (err, data) => {
        if (err) console.log(err);
        res.end(data);
    });