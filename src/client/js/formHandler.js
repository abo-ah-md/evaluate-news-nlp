import { checkForName } from "./nameChecker";

function handleSubmit(event) {
  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  const baseURL = "http://localhost:8081/sentimentAPI";

  if (checkForName(formText) == false) {
    alert(
      "The name is not valid. Please make sure that you inserted the correct name."
    );
  } else if (checkForName(formText)) {
    fetch(baseURL, {
      //sends the user's URL to the server for the API to use
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ txt: formText }),
    })
      .then((data) => {
        console.log(res);
        data.json();
      })
      .then(function (data) {
        alert("hi", json());
        document.getElementById("agreement").innerHTML = data.agreement;
        document.getElementById("subjectivity").innerHTML = res.subjectivity;
        document.getElementById("confidence").innerHTML = res.confidence;
        document.getElementById("irony").innerHTML = res.irony;
      })
      .catch((error) => {
        alert(error);
      });
  }
}

export { handleSubmit };
