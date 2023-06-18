const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const superagent = require('superagent');

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breeds/${data}/image/random`)
//     .end((err, res) => {
//       if (err) return console.log(err.message);
//       console.log(res.body.message);

//       fs.writeFile('dog-img.txt', res.body.message, (err) => {
//         if (err) return console.log(err.message);
//         console.log('Random dog saved to file');
//       });
//     });
// });
// let data = '';
const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I couldnt find anything');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('couldnt write file');
      resolve('success');
    });
  });
};

// async await
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);
    const res = await superagent.get(`https://dog.ceo/api/breeds/image/random`);
    console.log(res.body.message);
    await writeFilePro('dog-img.txt', res.body.message);
    console.log('Random dog file saved');
  } catch (err) {
    console.log(err);
  }
};
console.log('Will get dog pics');
getDogPic();
console.log('Will get dog pics');
// Chaining promises
// readFilePro(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log(`Breed: ${data}`);
//     return superagent.get(`https://dog.ceo/api/breeds/image/random`);
//   })
//   .then((res) => {
//     console.log(res.body.message);
//     return writeFilePro('dog-img.txt', res.body.message);
//     // fs.readFile('dog-img.txt', res.message, (err) => {
//     //   if (err) console.log(err.message);
//     //   else console.log('Random dog file saved!!');
//     // });
//   })
//   .then(() => {
//     console.log('Random dog file saved!!');
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breeds/image/random`)
//     .then((res) => {
//       console.log(res.message);

//       fs.writeFile('dog-img.txt', res.body.message, (err) => {
//         if (err) return console.log(err.message);
//         console.log('Random dog saved to file');
//       });
//     })
//     .catch((err) => console.log(err.message));
// });
