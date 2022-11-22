
function handleSubmit(event) {
  
    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    Client.checkForName(formText)
   
    
    const baseURL = "http://localhost:8081/sentimentAPI";
    
     fetch (baseURL, { //sends the user's URL to the server for the API to use
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({txt:formText})
    }).then(res => res.json()).then(function (res) { 
       alert(res.agreement)
        document.getElementById('agreement').innerHTML = res.agreement;
        document.getElementById('subjectivity').innerHTML = res.subjectivity;
        document.getElementById('confidence').innerHTML = res.confidence;
        document.getElementById('irony').innerHTML = res.irony;
    })
    .catch((error) => {
        alert(error);
    })
}  



export { handleSubmit }

