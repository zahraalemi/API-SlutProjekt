import React,{ useState,useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import{ motion } from "framer-motion";


const Profile = () =>{
    let {userId} = useParams();
    let [user, setUser] = useState();
    useEffect(()=>{
        axios.get(`/api/products/profile/${userId}`)
        .then(res => setUser(res.data))
    },[userId])

    const [ name,setName ] = useState();
    const [ address,setAddress ] = useState();
    const [ city,setCity ] = useState();
    const [ number, setNumber] = useState();
    const [ cardName, setCardName] = useState();
    const [ date, setDate] = useState();
    const [ cvv, setCvv] = useState();
    const [ vendor, setVendor] = useState();
    
    const submitProfile = () => {
        
        axios.patch(`/api/products/profile/addDetails/${userId}`,{
            name : name,
            address : address,
            city : city,
            cardNumber : number,
            cardname : cardName,
            carddate: date,
            cardcvv: cvv,
            cardvendor: vendor
        })
        
    
    }
    const handleChangeNumber = (e) => {
        if(e.target.value.length <= 19)
        {
         const cardNumber = e.target.value.replace(/[^0-9]/g, "").replace(/(\d{4})/g, "$1 ").trim();
            setNumber(cardNumber);
        }
    }
    const handleChangeDate = (e) =>{
    
        if(e.target.value.length <= 5){
            let datavalue = e.target.value.replace(/[^0-9]/g, "").replace(/(\d{2})(\d{1})/, "$1/$2")
            let firstNumberMonth = datavalue.slice(0, 1) 
            let month = datavalue.slice(0, 2) 
            firstNumberMonth > 1 && firstNumberMonth <10 ? datavalue  = "0"+ firstNumberMonth : month > 12 ? datavalue = 12 : console.log(datavalue);
            setDate(datavalue)
        }    
    }
    
    const handleChangeCvv = (e) =>{
    if(e.target.value.length <= 3)
    {
        e.target.value=e.target.value.replace(/[^0-9]/g, "")
        setCvv(e.target.value)
    } 
    }
    return (
        <motion.div initial={{ opacity : 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <div className="middle-box">
                <div className="left-box" style={{backgroundImage: "url(/images/basket.jpg)"}}></div>
                <div className="right-box">
                    <div className="title-page">Profile</div>
                    <div className="body-page">
                        <div className="profile-container">
                            <div className="details-profile">
                            {user && user.map((item,i)=>{
                                    return (
                                        <div key={i}>
                                            
                                            <div className="personla-details">
                                                <div><b>Email :</b> {item.email}</div>
                                                <p><b>Name :</b> {item.name == null ? "-----" : item.name} </p>
                                                <p><b>Address : </b>{item.address == null ? "-----" : item.address}</p>
                                                <p><b>City : </b>{item.city == null ? "-----" : item.city} </p>
                                            </div>
                                            <div className="card-details-box">
                                                <p className="card-number"> {item.cardNumber == null ? "**** **** **** ****" : item.cardNumber} </p>
                                                <p className="card-name">{item.cardName == null ? "your name" : item.cardName}</p>
                                                <p className="date-cvv">
                                                    <p>
                                                     {item.cardExpDate == null ? "MM/YY" : item.cardExpDate}</p>
                                                    <p> {item.cardCvv  == null ? "CVV" : item.cardCvv}</p>
                                                </p>    
                                                <p> {item.cardVendor == null ? "Bank Card" : item.cardVendor}</p>
                                                
                                            </div>
                                        </div>
                                        )
                                })}
                            </div>
                            <div className="edit-details-profile">
                                <form onSubmit={submitProfile}>
                                    
                                    <div>
                                    <div>
                                        
                                        <input placeholder="Change Name" type="text" name="name" onChange={(e)=>setName(e.target.value)}/>
                                    </div>
                                    <div>
                                        <input placeholder="Change Address" type="text" name="address" onChange={(e)=>setAddress(e.target.value)}/>
                                    </div>
                                    <div>
                                        
                                        <input placeholder="City" type="text" name="name" onChange={(e)=>setCity(e.target.value)}/>
                                    </div>
                                    <hr />
                                    <h4>Card Details</h4>
                                    <div className="card-details">
                                    <div>
                                        
                                        <input type="text" placeholder="Enter Your Card Number"  value={number} /*maxLength={19} onBlur={checkNumberVarible} */ onChange={handleChangeNumber}  />
                                    </div>
                                    <div>
                                        
                                        <input type="text" placeholder="Enter Your Name" value={cardName} onChange={(e)=>setCardName(e.target.value)} /* value={userName} *//>
                                    </div>
                                    <div className="dateandcvv-box">
                                        
                                        <input type="text" placeholder="Enter Expire Date"  value={date} onChange={handleChangeDate}/* onBlur={checkExpireVariable} */  />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Enter Cvv"  value={cvv} onChange={handleChangeCvv}/* onBlur={checkCvvVariable} */ />
                                    </div>
                                    <div>
                                        
                                        <input type="text" name="vendor" id="vendor" value={vendor} onChange={(e)=>setVendor(e.target.value)}/>
                                        
                                    </div>
                                    </div>
                                    </div>
                                
                                    <button className="btn">Submit</button>
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </motion.div>
    
    )
}

export default Profile