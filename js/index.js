window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      view.setScreenActive("wellcomePage");
      view.showName(auth.currentUser.displayName);
      
     
    } else {
      view.setScreenActive("registerPage");
    }
  });

}
firebase.firestore().collection("listMessage").doc("fiaXwXGbzts4umwdHlRB")
.onSnapshot((doc)=>{
  view.renderList(doc.data().message)
})