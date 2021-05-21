import firebase from '../firebase/db.js';
const firestore = firebase.firestore();
const users = await firestore.collection('users');

export const signUp = (req,res) =>{
    const newUser = {
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      handle:req.body.handle
    };
    
    let token, userId;
    users.doc(newUser.handle).get()
    .then((doc) =>{
      if(doc.exists){
        return res.status(400).json({handle: `this handle is already taken`});
      }else{
        return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        }
    })
    .then((data) =>{
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((idToken) => {
      token = idToken;
      const userCredentials = {
        handle : newUser.handle,
        email : newUser.email,
        createDate: new Date().toISOString(),
        userId
      };
      return users.doc(newUser.handle).set(userCredentials)
    
    })
    .then(() =>{
      return res.status(201).json({ token });
    })
    .catch(err=>{
      if(err.code === "auth/email-already-in-use"){
        return res.status(400).json({email: 'Email is already is use'})
      }else{
      console.log(err)
      return res.status(500).json({error: err.code});
      }
    })




    
  
    /* firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

    firebase.auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
              .then(({ user }) => {
                return user.getIdToken().then((idToken) => {
                  return fetch("/addMember", {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                      "CSRF-Token": Cookies.get("XSRF-TOKEN"),
                    },
                    body: JSON.stringify({ idToken }),
                  });
                });
              })
              .then(() => {
                return firebase.auth().signOut();
              })
              .then(() => {
                window.location.assign("/profile");
              }); */ 
}

export const login = (req,res)=>{
  const user = {
    email: req.body.email,
    password : req.body.password
  };
  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then(data =>{
    return data.user.getIdToken();
  })
  .then(token=>{
    return res.json({ token });
  })
  .catch(err =>{
    console.log(err);
    if(err.code === 'auth/wrong-password'){
      return res.status(403).json({ general: 'Wrong credentials, please try again'});
    }else{
    return res.status(500).json({ error: err.code })    
    }
  
  })
}