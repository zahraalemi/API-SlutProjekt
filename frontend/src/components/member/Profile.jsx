import React,{ useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Profile = () =>{
    let history = useHistory();

    const [name,setName] = useState();
    const [address,setAddress] = useState();
    const [city,setCity] = useState();
    const [ number, setNumber] = useState();
    const [ cardName, setCardName] = useState();
    const [ date, setDate] = useState();
    const [ cvv, setCvv] = useState();
    const [ vendor, setVendor] = useState();

    const submitProfile = () => {
        const userDetails ={
            name : name,
            address : address,
            city : city,
            cardname : cardName,
            carddate: date,
            cardcvv: cvv,
            cardvendor: vendor
        }
        axios.post('/api/products/addprofile',userDetails)
        .then((res)=>{
            console.log(res.data);
            history.push("/");
        }).catch((err)=>{
            console.log(err)
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
        <div>
            <div className="middle-box">
                <div className="left-box" style={{backgroundImage: "url(/images/basket.jpg)"}}></div>
                <div className="right-box">
                    <h2>Profile</h2>
                    <form onSubmit={submitProfile}>
                        <div>
                            <label>Name</label>
                            <input type="text" name="name" onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div>
                            <label>address</label>
                            <textarea type="text" name="address" onChange={(e)=>setAddress(e.target.value)}/>
                        </div>
                        <div>
                            <label>City</label>
                            <input type="text" name="name" onChange={(e)=>setCity(e.target.value)}/>
                        </div>
                        <hr />
                        <h4>Card Details</h4>
                        <div className="card-details">
                        <div>
                            <input type="text" placeholder="Enter Your Card Number"  value={number} /*maxLength={19} onBlur={checkNumberVarible} */ onChange={handleChangeNumber}  />
                        </div>
                        <div>
                            <input type="text" placeholder="Enter Your Name" onChange={(e)=>setCardName(e.target.value)} /* value={userName} *//>
                        </div>
                        <div className="dateandcvv-box">
                            <input type="text" placeholder="Enter Expire Date"  value={date} onChange={handleChangeDate}/* onBlur={checkExpireVariable} */  />
                            <input type="text" placeholder="Enter Cvv"  value={cvv} onChange={handleChangeCvv}/* onBlur={checkCvvVariable} */ />
                        </div>
                        <div>
                            <select name="vendor" id="vendor" onChange={(e)=>setVendor(e.target.value)} /* value={vendor} onChange={handleChangeVendor} onBlur={checkDropDownVariable} */ >
                                <option></option>
                                <option value="1">Visa</option>
                                <option value="2">Mastercard</option>
                                <option value="3">AmericanExpress</option>
                                <option value="4">Other</option>
                            </select>
                        </div>
                        </div>
                    <button>Submit</button>
                    </form> 
                </div>
            </div>
            
        </div>
    
    )
}

export default Profile