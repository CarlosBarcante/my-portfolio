const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

//Create
router.post('/', async (req, res) => {
    const portfolio = new Portfolio({
        title: req.body.title,
        description: req.body.description,
        longDescription: req.body.longDescription,
        image: req.body.image,
        technologies: req.body.technologies
    })
    try {
        let doc = await portfolio.save();
        res.json({
            success: true,
            data: doc
        })
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
})

//Read
router.get('/', async (req, res) => {
    try {
        let doc = await Portfolio.find();
        res.json({
            success: true,
            data: doc
        })
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
})

router.get('/:slug', async (req, res) => {
    try {
        const doc = await Portfolio.findOne({ slug: req.params.slug });
        res.json({
            success: true,
            data: doc
        })
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
})

//Update
router.patch('/:slug', async (req, res) => {
    try {
        const doc = await Portfolio.updateOne(
            { slug: req.params.slug },
            {
                title: req.body.title,
                description: req.body.description,
                longDescription: req.body.longDescription,
                image: req.body.image,
                slug: req.body.slug,
                technologies: req.body.technologies
            })
        res.json({
            success: true,
            updated: doc.modifiedCount
        })
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
})


//Delete
router.delete('/:slug', async (req, res) => {
    try {
        const doc = await Portfolio.deleteOne({ slug: req.params.slug });
        res.json({
            success: true,
            deleted: doc.deletedCount
        })
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router;