var express = require('express');
var router = express.Router();
var multer = require('multer');
const path = require('path');
const colors= require("colors");

//Set the Storage engine
const Storage = multer.diskStorage({
  destination:'./files/',
  filename: function(req,file,cb){
      cb(null,file.filename + "-" + Date.now() + path.extname(file.originalname));

  }
  });




//Init upload to files folder
const sizeLimit = 1024*1024*5;
const upload = multer({

    storage:Storage,
    limits:{fileSize:sizeLimit},
    fileFilter: function(req,file,cb){
        checkFileType(file,cb);
    }
}).single("myfile");



// Check File Type
function checkFileType(file,cb){
  //Allowed ext
  const  fileTypes = /wav|mp3|mp4|ogg/;

  //Check ext
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());

  //Check mime
  const mimetype = fileTypes.test(file.mimetype);

  if(mimetype && extname){
     return cb(null,true);
  }else{
      cb("AUDIO FILE ONLY");
  }

}





//Homepage
router.get("/",async function(req,res,next){

  res.redirect("http://localhost:4200");
});


//Adding new audio file - hizruz
router.post("/getHizruzim",async (req,res,next) =>{

  upload(req,res,(err)=>{


    if(err){
      console.log("ERROR IN UPLOADING, DETAILS: "+err);
        res.end("ERROR IN UPLOADING.  Details:  "+err);
    }
    else{
        if(req.file == undefined)
        {
          console.log("ERROR: NO FILE SELECTED");
            res.end("ERROR: NO FILE SELECTED");
        }
        else{
           console.log("File uploaded successfuly!".yellow);
            res.redirect("http://localhost:4200/",200);
        }
    }

});//end of Upload object defintion



});
module.exports = router;
