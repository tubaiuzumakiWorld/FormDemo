import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[form1Data,setForm1Data]=useState(
    {firstName:"",lastName:"", Email:"", Country:"",streetAddress:"", City:"", State:"", postalCode:"",Comment:false,Candidates:false,Offers:false,notiMode:""}
  )
  console.log(form1Data)
  function changeHandler(event){
    const{type,name,value,checked}=event.target;
    setForm1Data(prevForm1Data=> {
      return{
        ...prevForm1Data,
        [name]:type==="checkbox" ?checked:value
      }
    })
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("finally the form datas are printing......")
    console.log(form1Data)
  }


  return (
    <div className='flex justify-center'>
      <div className='w-3/6 flex flex-col items-center shadow-xl' >
      <form onSubmit={submitHandler}  className=' w-11/12  mt-8 mr-5 ml-7 mb-8 text-sm font-medium '>
        <lebel htmlFor="firstName" className=''>First name</lebel>
        <br />
        <input
          type='text'
          placeholder= 'Subhodeep' 
          onChange={changeHandler}
          name='firstName' 
          id='firstName' 
          value={form1Data.firstName}
          className='w-full pt-2 pb-2 pl-2 rounded-lg border-2 border-blue-200 mt-2 text-base font-normal'
        ></input>
        <br />
        <lebel htmlFor="lastName">Last name</lebel>
        <br/>
        <input
          type='text'
          placeholder= 'Mukherjee' 
          onChange={changeHandler}
          name='lastName'
          id='lastName'  
          value={form1Data.lastName}
          className='w-full pt-2.5 pb-2.5 rounded-md border-2 border-blue-200 pl-2 mt-2 text-base font-normal'
        ></input>
        <br />
        <lebel htmlFor="Email">Email address</lebel>
        <br/>
        <input
          type='text'
          placeholder= 'abc@gmail.com' 
          onChange={changeHandler}
          name='Email' 
          id='Email' 
          value={form1Data.Email}
          className='w-full pt-2.5 pb-2.5 rounded-md border-2 border-blue-200 pl-2 mt-2 text-base font-normal'
        ></input>
        <br />
        <lebel htmlFor="Country">Country</lebel>
        <br />
        <select 
          onChange={changeHandler}
          name='Country'
          id='Country'
          value={form1Data.Country}
          className='w-full pt-2.5 pb-2.5 rounded-md border-2 border-blue-200 pl-2 mt-2 text-base font-normal'>
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>

        </select>
        <br />
        <lebel htmlFor="streetAddress">Last name</lebel>
        <br/>
        <input
          type='text'
          placeholder= '1234 Main Street' 
          onChange={changeHandler}
          name='streetAddress' 
          id='streetAddress' 
          value={form1Data.streetAddress}
          className='w-full pt-2.5 pb-2.5 rounded-md border-2 border-blue-200 pl-2 mt-2 text-base font-normal'
        ></input>
        <br />
        <lebel htmlFor="City">City</lebel>
        <br/>
        <input
          type='text'
          placeholder= 'Asansol' 
          onChange={changeHandler}
          name='City' 
          id='City' 
          value={form1Data.City}
          className='w-full pt-2.5 pb-2.5 rounded-md border-2 border-blue-200 pl-2 mt-2 text-base font-normal'
        ></input>
        <br />
        <lebel htmlFor="State">State / Province</lebel>
        <br/>
        <input
          type='text'
          placeholder= 'West Bengal' 
          onChange={changeHandler}
          name='State' 
          id='State' 
          value={form1Data.State}
          className='w-full pt-2.5 pb-2.5 rounded-md border-2 border-blue-200 pl-2 mt-2 text-base font-normal'
        ></input>
        <br />
        <lebel htmlFor="postalCode">ZIP / Postal code</lebel>
        <br />
        <input
          type='text'
          placeholder= '711102' 
          onChange={changeHandler}
          name='postalCode' 
          id='postalCode' 
          value={form1Data.postalCode}
          className='w-full pt-2.5 pb-2.5 rounded-md border-2 border-blue-200 pl-2 mt-2 mb-2 text-base font-normal '
        ></input>
        <br />
     
        <fieldset>
        <lebel htmlFor="byEmail">By Email</lebel>
        <br />
        <br />
        <div className='flex mb-3'>
        <input type='checkbox'onChange={changeHandler} name="Comment" id="Comment" checked={form1Data.Comment} className='w-4 h-4 mt-0.5'>
         </input>
         <div className='flex flex-col pl-3'>
         <lebel htmlFor='comment'className='mb-1' >Comments</lebel >
         <p className='text-gray-500 font-normal'>Get notified when someones posts a comment on a posting.</p>
         </div>
        </div>
        <div className='flex mb-3'>
        <input type='checkbox'onChange={changeHandler} name="Candidates" id="Candidates" checked={form1Data.Candidates} className='w-4 h-4 mt-0.5'>
         </input>
         <div className='flex flex-col pl-3'>
         <lebel htmlFor='Candidates' className='mb-1' >Candidates</lebel>
         <p className='text-gray-500 font-normal'>Get notified when a candidate applies for a job.</p>
         </div>
        </div>
        <div className='flex'>
        <input type='checkbox'onChange={changeHandler} name="Offers" id="Offers" checked={form1Data.Offers} className='w-4 h-4 mt-0.5'>
         </input>
         <div className='flex flex-col pl-3'>
         <lebel htmlFor='Offers' className='mb-1' >Offers</lebel>
         <p className='text-gray-500 font-normal'>Get notified when a candidate accepts or rejects an offer.</p>
         </div>
        </div>
        </fieldset>
        <br />
        <fieldset>
          <lebel htmlFor='Push Notifications'>Push Notifications</lebel>
          <p className='text-gray-500 font-normal'>These are delivered via SMS to your mobile phone.</p>
          <br />
          <div className='flex flex-col'>
            <div className='mb-2.5 flex items-center'>
              <input 
                type="radio"
                onChange={changeHandler}
                name='notiMode'
                value="Everything"
                id='Everything'
                checked={form1Data.notiMode==="Everything"}
                className='w-4 h-4 '
                />
                <lebel htmlFor='Everything' className='pl-3 '>Everything</lebel>
            </div>
            <div className='mb-2.5 flex items-center'>
                  <input 
                  type="radio"
                  onChange={changeHandler}
                  name='notiMode'
                  value="Same-as-email"
                  id='Same-as-email'
                  checked={form1Data.notiMode==="Same-as-email"}
                  className='w-4 h-4 '
                  
                  />
                  <lebel htmlFor='Same-as-email' className='pl-3'>Same as email</lebel>
            </div>
            <div className='mb-2.5 flex items-center'>
              <input 
                type="radio"
                onChange={changeHandler}
                name='notiMode'
                value="No-push-notifications"
                id='No-push-notifications'
                checked={form1Data.notiMode==="No-push-notifications"}
                className='w-4 h-4 '
                />
                <lebel htmlFor='No-push-notifications' className='pl-3'>No push notifications</lebel>
            </div>
              

          </div>
        </fieldset>
         
        <div className='flex justify-start'>
      <button className='text-white bg-blue-500 hover:bg-blue-700 font-bold rounded-md text-md px-4 py-2 me-2 mb-2 '>Save</button>
        </div>


      </form>
      
      </div>
      
      

    </div>
  );
  
}

export default App;
