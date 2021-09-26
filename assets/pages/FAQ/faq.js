var firebaseConfig = {
    apiKey: "AIzaSyBBYWh0wvjvOcQwEASwey16uc26f9Gs2s8",
    authDomain: "question-form-f4452.firebaseapp.com",
    projectId: "question-form-f4452",
    storageBucket: "question-form-f4452.appspot.com",
    messagingSenderId: "191228926176",
    appId: "1:191228926176:web:ce0dfdb9ff7b27602f5885"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let submitInfo = firebase.database().ref("infos")

  document.querySelector(".message-form").addEventListener("submit", submitForm);
  function submitForm(e) {
      e.preventDefault();
      
      let nameField = document.querySelector(".nameField").value;
      let emailField = document.querySelector(".emailField").value;
      let messageField = document.querySelector(".messageField").value;
      saveSubmitInfo(nameField, emailField, messageField)
  }
  
  function saveSubmitInfo(nameField, emailField, messageField) {
      let newSubmitInfo = submitInfo.push();
  
      newSubmitInfo.set ({
          nameField:nameField,
          emailField:emailField,
          messageField: messageField
      })
  }

  function sweetalertclick() {
    swal({
        title: "Success",
        text: "Thank you for submitting your question, We will revert you back in 24 hours",
        icon: "success",
        button: "Done",
      })
      .then(name => {
        if (!name) throw null;
       
        return fetch(`https://www.google.com`);
      })
}