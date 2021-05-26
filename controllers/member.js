import firebase from '../firebase/db.js';
const firestore = firebase.firestore();
const users = await firestore.collection('users');

export const signUp = (req,res) =>{
    const newUser = {
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    };
    
    let id, userId;
    
    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
      
    .then((data) =>{
      userId = data.user.uid;
      return data.user.uid;
    })
    .then((idToken) => {
      id = idToken;
      const userCredentials = {
        email : newUser.email,
        createDate: new Date().toISOString(),
        userId
      };
      return users.doc(userId).set(userCredentials)
    
    })
    .then(() =>{
      return res.status(201).json({ id });
    })
    .catch(err=>{
      if(err.code === "auth/email-already-in-use"){
        return res.status(400).json({email: 'Email is already is use'})
      }else{
      console.log(err)
      return res.status(500).json({error: err.code});
      }
    })
}

export const login = (req,res)=>{
  const user = {
    email: req.body.email,
    password : req.body.password
  };
  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then(data =>{
    return data.user.uid;
  })
  .then(id=>{
    return res.json({ id });
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
export const userDetails = async (req,res) =>{
    
    const user = await users.get();
    const userArray = [];
    user.forEach(item =>{
      if(req.params.userId == item.data().userId){
        const userEmail = item.data().email;
        const userName = item.data().name;
        const userAddress = item.data().address;
        const userCity = item.data().city;
        const userCardNumber = item.data().cardNumber;
        const userCardName = item.data().cardname;
        const userCardExpDate = item.data().carddate;
        const userCardCvv = item.data().cardcvv;
        const userCardVendor = item.data().cardvendor;
        userArray.push({
          email: userEmail,
          name: userName,
          address : userAddress,
          city: userCity,
          cardNumber : userCardNumber,
          cardName : userCardName,
          cardExpDate : userCardExpDate,
          cardCvv : userCardCvv,
          cardVendor : userCardVendor
        })
      }
    })
    res.send(userArray)

}

export const addUserDetails = async (req,res) =>{

    const id = req.params.userId;
    const newDetails = req.body;
    const user = users.doc(id);
    await user.update(newDetails)

    res.send(`User Updated`) 
}