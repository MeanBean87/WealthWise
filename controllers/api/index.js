const router = require('express').Router();
const userRoutes = require('./user.js');
const revenueRoutes = require('./revenue');
const expenseRoutes = require('./expense');
const createBudgetRoutes = require('../dashboard.js');
const budgetRoutes = require('./budget');
const sessionRoutes = require('./session');
const analysisRoutes = require('./analysis');


router.use('/user', userRoutes);
router.use('/revenue', revenueRoutes);
router.use('/expense', expenseRoutes);
router.use('/create', createBudgetRoutes);
router.use('/budget', budgetRoutes);
router.use('/session', sessionRoutes);
router.use('/analysis', analysisRoutes);


module.exports = router;
