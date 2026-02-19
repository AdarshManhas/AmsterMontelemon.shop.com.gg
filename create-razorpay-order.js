
import Razorpay from 'razorpay'

export default async function handler(req,res){
 const razorpay=new Razorpay({
  key_id:process.env.RAZORPAY_KEY_ID,
  key_secret:process.env.RAZORPAY_KEY_SECRET
 })
 const order=await razorpay.orders.create({
  amount:req.body.amount*100,
  currency:'INR'
 })
 res.status(200).json(order)
}
