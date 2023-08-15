const router = require("express").Router();
const { Model } = require("sequelize");
const { User, Expense, Income, Budget } = require("../../models");
const { useAuth } = require("../../utils/auth");
// for each id, I need expenses by category

router.get('/:id', useAuth, async (req, res) => {
    try {
        const findCategoryExpense = await Expense.findOne({
            attributes: [
                'amount',
                'category',
                [sequelize.fn('sum', sequelize.col('amount')), 'total_amount'],
            ],
            group:['category','user_budget_id'],
            where: {
                user_budget_id: req.params.id,
            },
            include: [
                {
                model: User,// join with user data model
                attributes: [
                    'id',
                    'username'
                ]
            }
        ],
        });
        console.log(findCategoryExpense);
        res.json(findCategoryExpense);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', useAuth, async (req, res) => {
    try {
        const findCategoryRevenue = await Income.findOne({
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