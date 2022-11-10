function showPassword() {
  let password = document.getElementById("mk");
  let icon = document.getElementById("icon");
  if (password.type == "password") {
    password.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    password.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

function showConfirmPassword() {
  let showConfirmPassword = document.getElementById("remk");
  let iconClose = document.getElementById("iconClose");
  if (showConfirmPassword.type == "password") {
    showConfirmPassword.type = "text";
    iconClose.classList.remove("fa-eye");
    iconClose.classList.add("fa-eye-slash");
  } else {
    showConfirmPassword.type = "password";
    iconClose.classList.remove("fa-eye-slash");
    iconClose.classList.add("fa-eye");
  }
}

const controller = {};
function validateEmail(email1) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email1);
}

controller.register = (data) => {
  data.username == ""
    ? view.setErrorMessage("spantk", "* Vui lòng điền tên đăng nhập *")
    : view.setErrorMessage("spantk", "");
  data.email == ""
    ? view.setErrorMessage("spanemail", "* Vui lòng điền email*")
    : view.setErrorMessage("spanemail", "");
  data.password == ""
    ? view.setErrorMessage("spanmk", "* Vui lòng điền mật khẩu*")
    : view.setErrorMessage("spanmk", "");
  data.confirmPassword !== data.password
    ? view.setErrorMessage("spanremk", "* Mật khẩu nhập lại không đúng*")
    : view.setErrorMessage("spanremk", "");
  if (
    data.username !== "" &&
    data.email !== "" &&
    data.password !== "" &&
    data.confirmPassword !== ""
  ) {
    model.register(data);
  }
 
  
};

controller.login = (data) => {
  if (data.email == "") {
    console.log(data.email);
    view.setErrorMessage("spanemail", "* Vui lòng điền email*");
  } else {
    view.setErrorMessage("spanemail", "");
  }
  if (data.password == "") {
    view.setErrorMessage("spanmk", "* Vui lòng điền mật khẩu*");
  } else {
    view.setErrorMessage("spanmk", "");
  }
  if (data.password !== "" && validateEmail(data.email) == true) {
    model.login(data);
  }
};

function admin() {
  window.location.href = "admin.html";
}
function user() {
  document.getElementById("actionUser").setAttribute("style", "display:block");
  document.getElementById("listuser").setAttribute("style", "display:none");
  document.getElementById("listuser1").setAttribute("style", "display:block");
  document
    .getElementById("listMenu")
    .setAttribute("style", "display:inline-block");
  document.getElementById("listMenu1").setAttribute("style", "display:none");
  document.getElementById("menu").setAttribute("style", "display:none");
}
function user1() {
  document.getElementById("actionUser").setAttribute("style", "display:none");
  document.getElementById("listuser").setAttribute("style", "display:block");
  document.getElementById("listuser1").setAttribute("style", "display:none");
  document
    .getElementById("listMenu")
    .setAttribute("style", "display:inline-block");
  document.getElementById("listMenu1").setAttribute("style", "display:none");
  document.getElementById("menu").setAttribute("style", "display:none");
}
var indexOfuser = JSON.parse(localStorage.getItem("indexOfuser"));
var information = JSON.parse(localStorage.getItem("information"));

if (JSON.parse(localStorage.getItem("indexLogin")) == true) {
  console.log(2);
  document.getElementById("tendn").innerHTML =
    information[indexOfuser].username;
  document.getElementById("tendn1").setAttribute("style", "display:none");
  document.getElementById("tendn2").setAttribute("style", "display:none");
  document.getElementById("tendn").setAttribute("style", "display:block");
  document.getElementById("tendn3").setAttribute("style", "display:block");
}
function logout() {
  localStorage.setItem("indexLogin", false);
  location.reload();
  document.getElementById("tendn1").setAttribute("style", "display:block");
  document.getElementById("tendn2").setAttribute("style", "display:block");
  document.getElementById("tendn").setAttribute("style", "display:none");
  document.getElementById("tendn3").setAttribute("style", "display:none");
}

function sign() {
  window.location.href = "index.html";
}
function login() {
  view.setScreenActive("loginPage");
}

// var searchInput = document.querySelector("input")
// searchInput.addEventListener("input",function(e){
//   let a = document.getElementById("carouselExampleInterval")
//   a.setAttribute("style","display:none")
//   let txtSearch = e.target.value.trim().toLowerCase()
//   let listSunDOM = document.querySelectorAll(".sun");

//   listSunDOM.forEach(item=>{
//     if(item.innerText.toLowerCase().includes(txtSearch)){
//       item.setAttribute("style","display:block")

//     }else{
//       item.setAttribute("style","display:none")
//     }
//   })
// })
function phimyeuthich() {
  window.location.href = "phimyeuthich.html";
}
function search() {
  let valueInput = document.getElementById("inputSearch").value;
  document.getElementById("phimhot").setAttribute("style", "display:none");
  let a = document.getElementById("carouselExampleInterval");
  a.setAttribute("style", "display:none");
  if (valueInput == "") {
    document
      .getElementById("phimhot")
      .setAttribute("style", "display:inline-flex");
    a.setAttribute("style", "display:block");
  }
  let txtSearch = valueInput.trim().toLowerCase();
  let listSunDOM = document.querySelectorAll(".sun");
  listSunDOM.forEach((item) => {
    if (item.innerText.toLowerCase().includes(txtSearch)) {
      item.setAttribute("style", "display:block");
    } else {
      item.setAttribute("style", "display:none");
    }
  });
}
function theLoai() {
  console.log(1);

  document.getElementById("listMenu").setAttribute("style", "display:none");
  document
    .getElementById("listMenu1")
    .setAttribute("style", "display:inline-block");
  document.getElementById("menu").setAttribute("style", "display:inline-block");
  document.getElementById("actionUser").setAttribute("style", "display:none");
  document
    .getElementById("listuser")
    .setAttribute("style", "display:inline-block");
  document.getElementById("listuser1").setAttribute("style", "display:none");
}
function theLoai1() {
  document.getElementById("listMenu1").setAttribute("style", "display:none");
  document
    .getElementById("listMenu")
    .setAttribute("style", "display:inline-block");
  document.getElementById("menu").setAttribute("style", "display:none");
  document.getElementById("actionUser").setAttribute("style", "display:none");
  document.getElementById("actionUser").setAttribute("style", "display:none");
}

function dragon() {
  document.getElementById("inputSearch").setAttribute("value", "dragon");

  let valueInput = document.getElementById("inputSearch").value;
  let a = document.getElementById("carouselExampleInterval");
  a.setAttribute("style", "display:none");
  if (valueInput == "") {
    a.setAttribute("style", "display:block");
  }
  let txtSearch = valueInput.trim().toLowerCase();
  let listSunDOM = document.querySelectorAll(".sun");
  listSunDOM.forEach((item) => {
    if (item.innerText.toLowerCase().includes(txtSearch)) {
      item.setAttribute("style", "display:block");
    } else {
      item.setAttribute("style", "display:none");
    }
  });
}
function li1() {
  window.location.href = "anime.html";
}
function btnChat() {
  document.getElementById("table").style.display = "";
  document.getElementById("btnChat").style.display = "none";
  document.getElementById("btnChat2").style.display = "";
  let listChat = document.getElementById("spaceChat");
  listChat.scrollTop = listChat.scrollHeight;

}
function btnChat2() {
  document.getElementById("table").style.display = "none";
  document.getElementById("btnChat").style.display = "";
  document.getElementById("btnChat2").style.display = "none";

}

function btnChat1() {

  let valueInput = document.getElementById("infoInput").value;
  

  const node = document.createElement("div");
  node.classList.add("ok");

  const node1 = document.createElement("div");
  node1.classList.add("contentMeCha");

  const Time = document.createElement("div");
  Time.classList.add("time")

  const person = document.createElement("div");
  person.classList.add("nameperson")

  const node2 = document.createElement("div");
  node2.classList.add("contentMe");

  
  const node10 = document.createElement("div");
  node10.classList.add("contentBotCha");

  const node3 = document.createElement("div");
  node3.classList.add("contentBoss");

  const node4 = document.createElement("div");
  node4.classList.add("nameBoss");
  console.log(node);

  node1.appendChild(Time);
  node1.appendChild(person);
  node1.appendChild(node2);
  node.appendChild(node1);


  // node10.appendChild(node4)
  // node10.appendChild(node3)
  // node.appendChild(node10);
  


 
  
 
    //  var textnamebot = document.createTextNode(`Vợ`)
    //   node4.appendChild(textnamebot);


    // var textnode = document.createTextNode(`${idbot}`);
    // node3.appendChild(textnode);

   
  
    
  
  
  

  var textnode1 = document.createTextNode(`${valueInput}`);

 

  var textnameperson = document.createTextNode(`${auth.currentUser.displayName}`);
      person.appendChild(textnameperson);
  var texttime = document.createTextNode(`${new Date().toLocaleString()}`);
      Time.appendChild(texttime)

  
  node2.appendChild(textnode1);
if(valueInput == ""){

}else{
  // document.getElementById("spaceChat").appendChild(node);
model.saveChat(valueInput,auth.currentUser.displayName,new Date().toLocaleString())
  document.getElementById("infoInput").value = "";
  

}



  let listChat = document.getElementById("spaceChat");
  listChat.scrollTop = listChat.scrollHeight;
}











