// using mjs
// import fs from 'node:fs';
// import { Transform } from 'node:stream';
// import { fileURLToPath } from 'node:url';
// import { dirname, join } from 'node:path';

// using cjs 
const fs = require("fs");
const TransformStream = require("stream").Transform;
// const readstream = fs.createReadStream(__dirname + "/run.txt"); //or
const readstream = fs.createReadStream("./run.txt");
// const fileWriteStream = fs.createWriteStream(__dirname + '/write.txt'); //or
const fileWriteStream = fs.createWriteStream('./write.txt');

const transFormStream = new TransformStream({
    transform(chunk, enc, cb) {
        this.push(chunk.toString().toUpperCase());
        setTimeout(cb, 1000);     
    },
});
const writestream = process.stdout;

// readstream.pipe(transFormStream).pipe(writestream);
// readstream.pipe(transFormStream).pipe(fileWriteStream);

const outputStream = readstream.pipe(transFormStream);

outputStream.pipe(writestream);
outputStream.pipe(fileWriteStream);
