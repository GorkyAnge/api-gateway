const express = require('express');
const axios = require('axios');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Fake Payment Portal
 *   description: API para simular pagos con tarjeta
 */

/**
 * @swagger
 * /fake-payment-portal/payment/card:
 *   post:
 *     summary: Simula pagos con tarjeta
 *     tags: [Fake Payment Portal]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               app_name:
 *                 type: string
 *               service:
 *                 type: string
 *               customer_email:
 *                 type: string
 *               card_type:
 *                 type: string
 *               card_holder_name:
 *                 type: string
 *               card_number:
 *                 type: string
 *               expiryMonth:
 *                 type: string
 *               expiryYear:
 *                 type: string
 *               cvv:
 *                 type: string
 *               amount:
 *                 type: string
 *               currency:
 *                 type: string
 *     responses:
 *       200:
 *         description: Transacción exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     data:
 *                       type: object
 *                       properties:
 *                         message:
 *                           type: string
 */

router.post('/payment/card', async (req, res) => {
    try {
        const response = await axios.post('https://fake-paymentportal.onrender.com/api/v1/payment/card', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { error: 'Unknown error' });
    }
});

module.exports = router;
