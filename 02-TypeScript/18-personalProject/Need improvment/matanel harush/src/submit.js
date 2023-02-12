let savedTexts = [];

function handleSubmit(event) {
  event.preventDefault();
  const inputText = document.getElementById("inputText").value;
  if (savedTexts.includes(inputText)) {
    alert("User already exist");
  } else {
    createTextObject(inputText);
    savedTexts.push(inputText);
  }
}

function handleRemove(event) {
  event.preventDefault();
  const inputText = document.getElementById("inputText").value;
  if (!savedTexts.includes(inputText)) {
    alert("This user does not exist");
  } else {
    removeTextObject(inputText);
    const index = savedTexts.indexOf(inputText);
    savedTexts.splice(index, 1);
  }
}

function createTextObject(text) {
  const textObject = { text };
  displayText(textObject);
}

function removeTextObject(text) {
  const displayContainer = document.getElementById("displayContainer");
  const displayedTexts = document.getElementsByClassName("displayedText");
  for (const displayedText of displayedTexts) {
    if (displayedText.innerText === text) {
      displayContainer.removeChild(displayedText);
      break;
    }
  }
}

function displayText(textObject) {
  const displayContainer = document.getElementById("displayContainer");
  const textParagraph = document.createElement("p");
  textParagraph.innerText = textObject.text;
  textParagraph.classList.add("displayedText");
  displayContainer.appendChild(textParagraph);
}




// const fs = require('fs');
// const http = require('http');
// const querystring = require('querystring');

// const server = http.createServer(function (req, res) {
//   if (req.method === 'POST') {
//     let body = '';
//     req.on('data', function (data) {
//       body += data;
//     });
//     req.on('end', function () {
//       const post = querystring.parse(body);
//       const text = post.text;
//       fs.writeFile('text.txt', text, function (err) {
//         if (err) {
//           console.log(err);
//         } else {
//           res.end('Text written to file');
//         }
//       });
//     });
//   } else {
//     fs.readFile('form.html', function (err, data) {
//       if (err) {
//         console.log(err);
//       } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         res.end();
//       }
//     });
//   }
// });

// server.listen(5500);
