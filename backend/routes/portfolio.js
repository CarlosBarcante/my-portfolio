const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let data = [{
        _id: 1,
        name: 'My first project',
        createAt: '2022-06-13'
    },
    {
        _id: 2,
        name: 'My second project',
        createAt: '2022-06-13'
    },
    {
        _id: 3,
        name: 'My third project',
        createAt: '2022-06-13'
    }
    ];
    res.json({
        success: true,
        data
    });
})

module.exports = router;