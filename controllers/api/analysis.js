const router = require("express").Router();
const sequelize= require ("sequelize")
const { Model } = require("sequelize");
const { User, Expense, Income, Budget } = require("../../models");
const { useAuth } = require("../../utils/auth");
// for each id, I need expenses by category
// to test need to remove useauth
router.get('/:id', async (req, res) => {
    try {
        const findCategoryExpense = await Expense.findAll({
            // attributes: [
            //     'user_expense_id',
            //     'category',
            //     'amount',
                
            //     'user'
                //user table
                //  [sequelize.fn('SUM', sequelize.col('amount')), 'total_amount'],
            // ],
            // group:['category'],
            // where: {
            //     user_expense_id: req.params.id,
            // },
            // include: [
            //     {
            //     model: User,// join with user data model
                // attributes: [
                //     'id',
                //     'username'
                // ]
            // }
        // ],
        });
        console.log(findCategoryExpense);
        res.json(findCategoryExpense);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', useAuth, async (req, res) => {
    try {
        const findCategoryRevenue = await Income.findAll({
            attributes: [
                'amount',
                'category',
            ],
            where: {
                id: req.params.id,
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
        console.log(findCategoryRevenue);
        res.json(findCategoryRevenue);
    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router;