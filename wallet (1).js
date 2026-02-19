
import {useState} from 'react'
import Navbar from '../components/Navbar'

export default function Wallet(){
const [amount,setAmount]=useState(500)

const addFunds=async()=>{
 const res=await fetch('/api/create-razorpay-order',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({amount})
 })
 const data=await res.json()
 alert("Razorpay Order Created: "+data.id)
}

return(
<div>
<Navbar/>
<div style={{padding:40}}>
<h2>Wallet</h2>
<input type="number" value={amount} onChange={e=>setAmount(e.target.value)} />
<button onClick={addFunds}>Deposit Money</button>
</div>
</div>
)}
