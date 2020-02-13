 
const outputsDiv = document.getElementById('outputs-div');


const bu = document.getElementById('bu');

bu.addEventListener('click', serverFunction);

function serverFunction() {


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
  

  
    }

  xhr.open('POST', `/gif/${document.getElementById("name").value}`, true);
  xhr.send();

}
  const gifFunction = (response) => {
    outputsDiv.innerHTML = '';

    for (let i = 0; i < response.length; i++) {
     
      const gif = response[i];

      const img = document.createElement('img');
      img.setAttribute('id', 'gif-img');

    console.log(gif, '0000000000');
    img.src= gif;
    console.log(gif)
    outputsDiv.appendChild(img).classList.add('gifs');

    
    }};

serverCall(gifFunction)

  }