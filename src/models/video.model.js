import mongoose, {Schema} from "mongoose"; 

const videoSchema = new Schema(
    {
       videoFile : {
        type : String, // cloudinary
        require : true
       },
       thumbnail : {
        type : String, // cloudinary
        require : true
       }, 
       title : {
        type : String,
        require : true
       },
       description : {
        type : String,
        require : true
       },
       duration : {
        type : Number,   //cloudinary
        require : true,
       },
       views : {
        type : Number,
        default : 0
       },
       isPublished : {
        type : Boolean,
        default : true,
       },
       owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
       }
    },
    {
        timestamps : true
    }
)

export const Video = mongoose.model("Video" , videoSchema);