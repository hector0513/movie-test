import {Request, Response} from 'express';
import { Model,} from 'sequelize/types';

import Movie,{MovieAttributes,MovieCreationsAttributes} from "../models/movies"
import Review from "../models/reviews"
export async function CreateMovie(req: Request, res: Response){
   try {
        const {title,description}=req.body
        const movie =await Movie.findOne({where:{title}})
    if(!movie){
        const newMovie =await Movie.create({
            title,
           description ,
           enabled   : true,
        },{fields:["title","description","enabled",]})
        if(newMovie){
            return res.json({message:"Movie created  successfully",data:newMovie})
        }
    }else{
        return res.status(503).json({message:"Movie sasaa failed"})
    }
   } catch (error) {
       return res.status(503).json({message:"Movie created failed"})
   }
};
export async function DisableMovie(req: Request, res: Response){
    try {
         const {title}=req.body
         const movie =await Movie.findOne({where:{title,enabled:true}})
     if(movie){
   
        movie.set("enabled",false)
        movie.save()
        return res.json({message:"Movie disabled  successfully"})

     }else {
        return res.status(400).json({message:"Movie deleted or not created"})
     }
    } catch (error) {
        return res.status(503).json({message:"Movie created failed"})
    }
 };
 export async function GetMovie(req: Request, res: Response){
    try {
         const {title}=req.params
         const movie =await Movie.findOne({where:{title,enabled:true}})

     if(movie){
   
        return res.json({message:"Get movie  successfully",data:movie})

     }else {
        return res.status(400).json({message:"Movie deleted or not created"})
     }
    } catch (error) {
        return res.status(503).json({message:"Movie created failed"})
    }
 };
 export async function NewReview(req: Request, res: Response){
    try {
         const {title, titleReview,
          review,
          author,
          }=req.body 
         const movie =await Movie.findOne({where:{title,enabled:true}})
        
     if(movie){
   
        const newReview=await Review.create({
            enabled:true,movieid:movie.get().id,
            title:titleReview,review,author

        })
        if(newReview){
            return res.json({message:"Get created  successfully",data:newReview})

        }else {
            return res.status(503).json({message:"Review no empty"})
        }
     }else {
        return res.status(400).json({message:"Movie deleted or not created"})
     }
    } catch (error) {
        return res.status(503).json({message:"Movie created failed"})
    }
 };
 export async function GetReviews(req: Request, res: Response){
    try {
         const {title}=req.params
         const movie =await Movie.findOne({where:{title,enabled:true}})
console.log(req.body)
console.log(movie)
     if(movie){
   
        const reviews=await Review.findAll({where:{movieid:movie.get().id}})
        return res.json({message:"Get reviews  successfully",data:reviews})
     }else {
        return res.status(400).json({message:"Movie deleted or not created"})
     }
    } catch (error) {
        return res.status(503).json({message:"Movie created failed"})
    }
 };
 function compare(a:Model<MovieAttributes, MovieCreationsAttributes>,b:Model<MovieAttributes, MovieCreationsAttributes>,sort:string):number{
      switch (sort){
        case "title":

        return a.get().title.length-b.get().title.length
        case "description":

        return a.get().description.length-b.get().description.length
        case "id":

        return a.get().id-b.get().id
        default:
            
        return 0
      }
    
 }

 export async function GetMovies(req: Request, res: Response){
    try {
        const {sort}=req.params
        const where=req.body
        const limit=Number.parseInt(req.params.limit)
        const movies =(await Movie.findAll({limit:req.params.limit?limit:undefined
            ,where:{...where,enabled:true}}))
        .sort((a,b)=>compare(a,b,sort))
        return res.json({message:"Get movies  successfully",data:movies})
  
    } catch (error) {
        return res.status(503).json({message:"Movie created failed"})
    }
 };
 