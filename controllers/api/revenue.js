const router = require("express").Router();
const {User, Income } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const incomeData = await Income.findAll({
            attributes: [
                'id',
                'income_name',
                'user_income_id',
                'amount',
                'description',
                'category',
                'date'
            ],
            include: [
                {
                model: User,
                attributes: [
                    'id',
                    'username'
                ]
            }
        ],
        });
        res.json(incomeData);
    } catch (err) {
        res.status(500).json(err);
    }

})

router.get('/:id', async (req, res) => {
    try {
        const incomeData = findOne({
            attributes: [
                'id',
                'income_name',
                'user_income_id',
                'amount',
                'description',
                'category',
                'date'
            ],
            where: {
                id: req.params.id
            },
            include: [
                {
                model: User,
                attributes: [
                    'id',
                    'username'
                ]
            }
        ],
        });
        res.json(incomeData);
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