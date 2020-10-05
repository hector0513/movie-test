import {Router }from "express"
import { CreateMovie,DisableMovie,GetMovie,GetReviews,NewReview,GetMovies } from "../controlers";
const router=Router();

router.post("/new-movie",CreateMovie)
router.post("/new-review-movie",NewReview)
router.get("/get-movies/:limit/:sort",GetMovies)
router.get("/get-movie/:title",GetMovie)
router.get("/get-reviews/:title",GetReviews)
router.post("/disable-movie",DisableMovie)

export default router