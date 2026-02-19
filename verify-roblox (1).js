
import axios from 'axios'

export default async function handler(req,res){
 const {username}=req.body
 const r=await axios.post(
  'https://users.roblox.com/v1/usernames/users',
  {usernames:[username],excludeBannedUsers:true}
 )
 res.status(200).json({valid:r.data.data.length>0})
}
