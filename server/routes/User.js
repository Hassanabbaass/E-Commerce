const router = require("express").Router();

const categorySchema = require('../models/Category');
const itemSchema = require('../models/Item');
const cartSchema = require('../models/Cart');

// Get all categories
router.get("/getCategories", async (req,res) => {
    try{
        const allCategories = await categorySchema.find();
        res.status(200).json(allCategories)
    } catch(err) {
        console.log("error at user get categories route")
        res.status(500).json(err)
    }
})
// Get all categories with all items in each category
router.get("/getCategoriesWithItems", async (req, res) => {
    try{
        const allCategoriesWithItems = await categorySchema.find().populate('items');
        res.status(200).json(allCategoriesWithItems)
    } catch(err) {
        console.log("error at user get categories with all items in each category route")
        res.status(500).json(err)
    }
})
// Get specific category with its items
router.get("/getSpecificCategoryWithItems/:catId", async (req,res) => {
    try{
        const specificCategoryWithItems = await categorySchema.findById(req.params.catId).populate('items');
        res.status(200).json(specificCategoryWithItems)
    } catch(err) {
        console.log("error at user get specific category with it's items route")
        res.status(500).json(err)
    }
})
// Get Item
router.get("/getItem/:itemId", async (req,res) => {
    try{
        const itemFound = await itemSchema.findById(req.params.itemId)
        res.status(200).json(itemFound)
    } catch(err) {
        console.log("error at user get item route")
        res.status(500).json(err)
    }
})


// Get User Cart 
router.get("/getCart/:userId", async (req,res) => {
    try{
        const cartFound = await cartSchema.findOne(
            {userId: req.params.userId}
        );
        const cartWithItems = await cartFound.populate('addedToCart')
        res.status(200).json(cartWithItems)
    } catch(err) {
        console.log("error at user get cart route")
        res.status(500).json(err)
    }
})
// Add to cart 
router.put("/addToCart/:itemId/:userId", async (req,res) => {
    try{
        const itemFound = await itemSchema.findById(req.params.itemId)
        const addToCart = await cartSchema.findOneAndUpdate(
            {userId: req.params.userId},
            {$push: {addedToCart: itemFound}},
            {new: true}
        )

        res.status(200).json(addToCart)
    } catch(err) {
        console.log("error at user add to cart route")
        res.status(500).json(err)
    }
});
// Remove From Cart 
router.put("/removeFromCart/:itemId/:userId", async (req,res) => {
    try{ 
        const cartWithoutItem = await cartSchema.findOneAndUpdate(
            {userId: req.params.userId},
            {$pull: {addedToCart: req.params.itemId}},
            {new: true}
        )
        res.status(200).json(cartWithoutItem)
    } catch(err) {
        console.log("error at user remove from cart route")
        res.status(500).json(err)
    }
})




module.exports = router