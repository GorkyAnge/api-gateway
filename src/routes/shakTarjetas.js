const express = require('express');
const axios = require('axios');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Shak Tarjetas
 *   description: API para gestionar tarjetas y recargas
 */

/**
 * @swagger
 * /shak-tarjetas/register:
 *   post:
 *     summary: Registra un identificador único
 *     tags: [Shak Tarjetas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               identifier:
 *                 type: string
 *     responses:
 *       200:
 *         description: Identificador registrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 identifier:
 *                   type: string
 */

router.post('/register', async (req, res) => {
    try {
        const response = await axios.post('https://shak-tarjetas.onrender.com/api/register', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { error: 'Unknown error' });
    }
});

/**
 * @swagger
 * /shak-tarjetas/recharge:
 *   post:
 *     summary: Recarga un identificador único
 *     tags: [Shak Tarjetas]
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
 *               identifier:
 *                 type: string
 *     responses:
 *       200:
 *         description: Recarga exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 newBalance:
 *                   type: number
 */

router.post('/recharge', async (req, res) => {
    try {
        const response = await axios.post('https://shak-tarjetas.onrender.com/api/recharge', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { error: 'Unknown error' });
    }
});

/**
 * @swagger
 * /shak-tarjetas/charge:
 *   post:
 *     summary: Cobra un monto de un identificador único
 *     tags: [Shak Tarjetas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               identifier:
 *                 type: string
 *               amount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Cobro realizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 identifier:
 *                   type: string
 *                 newBalance:
 *                   type: number
 */

router.post('/charge', async (req, res) => {
    try {
        const response = await axios.post('https://shak-tarjetas.onrender.com/api/charge', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { error: 'Unknown error' });
    }
});

/**
 * @swagger
 * /shak-tarjetas/checkIdentifier:
 *   post:
 *     summary: Verifica si un identificador existe
 *     tags: [Shak Tarjetas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               identifier:
 *                 type: string
 *     responses:
 *       200:
 *         description: Identificador existe
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 identifier:
 *                   type: string
 */

router.post('/checkIdentifier', async (req, res) => {
    try {
        const response = await axios.post('https://shak-tarjetas.onrender.com/checkIdentifier', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { error: 'Unknown error' });
    }
});

module.exports = router;
