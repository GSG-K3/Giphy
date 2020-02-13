
// const xhr = new XMLHttpRequest()

// xhr.onreadystatechange(){

//     if(xhr.readyState === 200 && xhr.s)
// }
const outputsDiv = document.getElementById('outputs-div');

// const img = document.createElement('img');
// img.setAttribute('id', 'gif-img');
// img.src = gifUrl;
// outputsDiv.appendChild(img);
// console.log(gifUrl);90'
const bu = document.getElementById('bu');

bu.addEventListener('click', serverFunction);

function serverFunction() {

// bu.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("111111111111")
  const xhr = new XMLHttpRequest();

  let serverCall = (callback) => {


  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      console.log(response)

      if (callback) {
        callback(response);
      }

      }
  

      // const response = xhr.responseText;
      // console.log(response, '0000000000');
      // img.src= response;
    }

  xhr.open('POST', `/gif/${document.getElementById("name").value}`, true);
  xhr.send();

}
  const gifFunction = (response) => {
    outputsDiv.innerHTML = '';

    for (let i = 0; i < response.length; i++) {
      // const gif = xhr.responseText;
      const gif = response[i];

      const img = document.createElement('img');
      img.setAttribute('id', 'gif-img');

    console.log(gif, '0000000000');
    img.src= gif;
    console.log(gif)
    outputsDiv.appendChild(img);

    
    }};

serverCall(gifFunction)

  }