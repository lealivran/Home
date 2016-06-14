import React from 'react'
import Annonce from '../../../components/Annonce'
import classes from './AnnonceView.scss'

export const AnnonceView = () => (
  <div>
    <p>coucou</p>
  </div>
)

export default AnnonceView

// router.post('/view/:restaurant_id', function(req,res){
// 	Restaurants
// 		.findOne({ restaurant_id: req.params.restaurant_id})
// 		.then((restaurant) => {
// 			const commentToCreate = Object.assign({},req.body,{restaurant})
// 			return Comments.create(commentToCreate,(err, comment) => {
// 							if(err) console.log('ERROR :', err)
// 						});
// 		})
// 		.then((comment) => {
// 			// Need to find a proper way to return the updated restaurant
// 			Restaurants
// 				.update(
// 				  { restaurant_id: req.params.restaurant_id},
// 				  { $push:{ "comments": comment._id}},
// 				  { upsert:true }
// 				 )
// 				.exec()
// 			Restaurants
// 				.findOne({ restaurant_id: req.params.restaurant_id})
// 				.populate('comments')
// 				.then(
// 					(restaurant) => res.render('restaurant/index', {restaurant}),
// 					(err) => console.log(err)
// 				);
// 		})
// })
