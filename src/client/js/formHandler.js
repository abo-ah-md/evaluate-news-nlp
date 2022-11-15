function handleSubmit(event) {
    console.log("hhhhh");
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
   
    
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
       
        document.getElementById('agreement').innerHTML = res.agreement;
        document.getElementById('subjectivity').innerHTML = res.subjectivity;
        document.getElementById('confidence').innerHTML = res.confidence;
        document.getElementById('irony').innerHTML = res.irony;
    })
    .catch((error) => {
        console.log(" an error", error);
    })
}  


export { handleSubmit }

