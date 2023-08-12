const router = require("express").Router();
const {User, Income } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const incomeData = await Income.findAll({
            attributes: [
                'id',
                'income_name',
                ''
            ]
        })
    } catch (err) {
        res.status(500).json(err);
    }

})

router.get('/:id', async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json(err);
    }

})

router.post('/', async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json(err);
    }

})

router.put('/', async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json(err);
    }

})

router.delete('/', async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json(err);
    }

})