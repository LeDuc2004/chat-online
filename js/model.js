const model = {}
const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyDg0gdvCdB8EvQRDNfaG7kUthK36oLyHtQ",
    authDomain: "model-b08f0.firebaseapp.com",
    projectId: "model-b08f0",
    storageBucket: "model-b08f0.appspot.com",
    messagingSenderId: "110105994792",
    appId: "1:110105994792:web:b82888be0b7cefd8c7771d",
    measurementId: "G-CEB6MRKJHE"
    /* Firebase config */ });
    const db = firebaseApp.firestore();
    const auth = firebaseApp.auth();
    model.register = async (data)=> {
        try {
         db.collection("user").add(data)
           let response = await auth.createUserWithEmailAndPassword(data.email,data.password);
           view.setScreenActive("loginPage");
           auth.currentUser.sendEmailVerification();
           await firebase.auth().currentUser.updateProfile({
            displayName:data.username
           })
           dataUser = auth.currentUser.displayName;
           
           view.dataUser(dataUser)
           console.log(dataUser);
        } catch (error) {
            alert("Tài khoản đã tồn tại")
        }   
    }
    model.login = async (data)=>{
        
        try {
            let userData = await db.collection("user").get();
            let userName = "";
            userData.docs.filter((doc)=>{
                if(doc.data().email==data.email){
                    userName = doc.data().username
                }
                
            })
            let response = await auth.signInWithEmailAndPassword(data.email,data.password);
            await auth.currentUser.updateProfile({
                displayName:userName
            })
            
        
        if (response) {
            
            view.setScreenActive("wellcomePage")
            view.showName(userName)
        }
        } catch (error) {
            alert("Tài khoản hoặc mật khẩu không chính xác");
        }   ;
    }
    model.saveChat = (data,dataname,time)=>{

        let checkMassage = {

            message:{
              time:time,
              owner: firebase.auth().currentUser.email,
               content:{
                text:data,
                nameuser:dataname
                
                 }
             }
         }

        const firestoreQueries = async () => {
            try {
                let response = await firebase.firestore()
                    .collection("listMessage")
                    .doc("fiaXwXGbzts4umwdHlRB")
                    .update({message : firebase.firestore.FieldValue.arrayUnion(checkMassage)})
                    
                    
                   
                
            } catch (error) {
                console.log(error);
            }
        }
    firestoreQueries()
}

    model.getChat = async ()=>{
      try {
        let response = await firebase.firestore()
        .collection("listMessage")
        .doc("fiaXwXGbzts4umwdHlRB")
        .get()
        let result = response.data().message;
        view.renderList(result)
        
view.renderList(result)
      } catch (error) {
        
      }
    }
    model.getChat()
    
    