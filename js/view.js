const view = {};
var dataUsername = "";
view.dataUser = (dataUser) => {
  dataUsername = dataUser;
};
view.showName = (value) => {
  document.getElementById("tendn").innerHTML = value;
};

view.setScreenActive = (screenName) => {
  switch (screenName) {
    case "registerPage":
      document.getElementById("app").innerHTML = conponent.registerPage;

      let registerForm = document.getElementById("registerForm");
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
          username: registerForm.username.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        };
        controller.register(data);
      });
      view.setErrorMessage = (id, content) => {
        document.getElementById(id).innerText = content;
      };
      let redirectLogin = document.getElementById("redirectLogin");
      redirectLogin.addEventListener("click", () => {
        view.setScreenActive("loginPage");
      });
      break;
    case "loginPage":
      console.log(dataUsername);
      document.getElementById("app").innerHTML = conponent.loginPage;
      let loginForm = document.getElementById("loginForm");
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
          email: loginForm.email.value,
          password: loginForm.password.value,
        };
        controller.login(data);
      });
      view.setErrorMessage = (id, content) => {
        document.getElementById(id).innerText = content;
      };
      let redirectRegister1 = document.getElementById("outregister");
      redirectRegister1.addEventListener("click", () => {
        view.setScreenActive("registerPage");
      });
      break;
    case "wellcomePage":
      document.getElementById("app").innerHTML = conponent.wellcomePage;
      view.showName(dataUsername);

      let out = document.getElementById("tendn3");
      out.addEventListener("click", () => {
        auth.currentUser.displayName = dataUsername;

        auth.signOut();
      });
      let checkMassage = {
        message: {
          owner: firebase.auth().currentUser.email,
          content: data,
        },
      };

      break;

    default:
      let app1 = document.getElementById("app");
      app1.innerHTML = component.errorPage;
      break;
  }
};
view.renderList = (listChat) => {
  let result = "";
  for (let i = 0; i < listChat.length; i++) {
    if (listChat[i].message.owner == firebase.auth().currentUser.email) {
                    
      result += `
      <div class="ok" >
      <div class="contentMeCha">
      <div class="time">${listChat[i].message.time}</div>
      <div class="nameperson">${listChat[i].message.content.nameuser}</div>
      <div class="contentMe">${listChat[i].message.content.text}</div>
      </div>
      </div>

                `;
  
    }else{
       result += `
       <div class="ok" >
       <div class="contentBotCha">
      <div class="time">${listChat[i].message.time}</div>
      <div class="nameBoss">${listChat[i].message.content.nameuser}</div>
      <div class="contentBoss">${listChat[i].message.content.text}</div>
      </div>
      </div>
       `
       
  }
  
  } 

  document.getElementById("spaceChat").innerHTML = result
  let listChat1 = document.getElementById("spaceChat");
  listChat1.scrollTop = listChat1.scrollHeight;
};


