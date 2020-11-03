import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema=mongoose.Schema({
    username:String,
    password:String
})
const User=mongoose.model('user',userSchema)

const PostSchema=mongoose.Schema({
  username:String,
  content:String,
  Date: String,
  auth:String
})
const Post=mongoose.model('post',PostSchema)

export const createPost=async(data)=>{
  try {
    return await Post(data).save()
  } catch (error) {
    console.log(error)
  }

}

export const getUser=async()=>{
  try {
    const g= await User.find()
    return g
  } catch (error) {
    throw new Error(error)
  }
}
export const register=async(username,password)=>{

      try{
        const g= await User.findOne({username :username})
        
        if (g) {
            console.log("ffddfdf ")
            return {
                username : "username exist"
            }
            
        } else {
            const p= await bcrypt.hash(password, 12);
            const e= await new User({username:username,password:p}).save()
            
            return e;
        }

      
      }catch(err){
        return err
      }
      
}

export const login=async(ur,p)=>{
  const u= await User.findOne({username :ur})
  if (u) {
      const pr= await bcrypt.compare(p,u.password)
        if (pr) {
             
             return "login successfull"
        } else {
            return "password not found"
        }
  } else {
      return "username not found"
  }
}

