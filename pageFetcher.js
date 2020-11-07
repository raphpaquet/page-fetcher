const request = require('request');
const fs = require('fs');

const downloadBytes = (() => {
  const url = process.argv[2];
  request(url, (error, response, body) => {
    fs.writeFile('index.html', body, (err) => {
      if (err) console.log(err)
      const bytes = body.length
      console.log(`Downloaded ${url} and saved ${bytes} bytes to /index.html`)
    })
  })
})

downloadBytes()





//`Downloaded ${process.argv} and saved ${(response.headers['content-length'])} bytes to /index.html`
