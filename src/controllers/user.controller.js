import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { json } from "express";
const registerUser = asyncHandler(async (req , res)=> {
    //get user detail from frontend
    //validation - not empty
    //check if user already exist : username , email 
    //check for image check for avatar
    //upload them on coludinary : 
    //remove password and refresh token field from response
    //check the user creation
    // return res

   const {fullname , email , password , username } = req.body
   console.log("email :",email)
   console.log("password :",password)

   // beginner friendly
//    if(email === "") {
//       throw new ApiError(400 , "all fields are require");
//    } else {
//       res.send("success")
// }


// industry level
 if(
   [fullname , email , password , username].some((field)=> field?.trim() === "") 
  ) {
   throw new ApiError(400 , "all fields are require")
  }

  const existedUser = User.findOne({
    $or : [{username} , {email}]
    
  })
  console.log(existedUser)
    
  if(existedUser) {
      throw new ApiError(409 , "user with email or username already exist")
      console.log(existedUser)
    }
  

   const avatarLocalPath = req.files?.avatar[0]?.path;
   const coverImageLocalPath =   req.files?.coverImage[0]?.path;


   if(!avatarLocalPath) {
         throw new ApiError(400 , "Avatar is require")
   }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

   const user = await User.create({
      fullname ,
      avatar : avatar.url,
      coverImage : coverImage?.url || "",
      email,
      password,
      username : username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(" -password -refreshToken ")

    if(!createdUser) {
      throw ApiError(500 , "somthing went wrong while registring a User")
    }

   return res.status(201).json(
      new ApiResponse(200 , createdUser , "user registerd successfully")
  )
    
})



export  {registerUser} ;