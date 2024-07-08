const express = require('express');
const axios = require('axios');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Shak Multas
 *   description: API para gestionar multas
 */

/**
 * @swagger
 * /shak-multas/multas:
 *   post:
 *     summary: Crea una nueva multa
 *     tags: [Shak Multas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               valor:
 *                 type: number
 *               descripcion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Multa creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 mensaje:
 *                   type: string
 */

router.post('/multas', async (req, res) => {
    try {
        const response = await axios.post('https://shak-multas.onrender.com/multas', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { error: 'Unknown error' });
    }
});

/**
 * @swagger
 * /shak-multas/multas/pagar:
 *   post:
 *     summary: Paga una multa existente
 *     tags: [Shak Multas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               multaId:
 *                 type: string
 *               paymentDetails:
 *                 type: object
 *                 properties:
 *                   app_name:
 *                     type: string
 *                   service:
 *                     type: string
 *                   customer_email:
 *                     type: string
 *                   card_type:
 *                     type: string
 *                   card_holder_name:
 *                     type: string
 *                   card_number:
 *                     type: string
 *                   expiryMonth:
 *                     type: string
 *                   expiryYear:
 *                     type: string
 *                   cvv:
 *                     type: string
 *                   amount:
 *                     type: string
 *                   currency:
 *                     type: string
 *     responses:
 *       200:
 *         description: Pago realizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                 response:
 *                   type: object
 *                   properties:
 *                     success:
 *                       type: boolean
 *                     message:
 *                       type: string
 *                     data:
 *                       type: object
 *                       properties:
 *                         data:
 *                           type: object
 *                           properties:
 *                             message:
 *                               type: string
 */

router.post('/multas/pagar', async (req, res) => {
    try {
        const response = await axios.post('https://shak-multas.onrender.com/multas/pagar', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { error: 'Unknown error' });
    }
});

/**
 * @swagger
 * /shak-multas/multas/{identifier}:
 *   get:
 *     summary: Obtiene multas por identificador
 *     tags: [Shak Multas]
 *     parameters:
 *       - in: path
 *         name: identifier
 *         schema:
 *           type: string
 *         required: true
 *         description: Identificador único
 *     responses:
 *       200:
 *         description: Lista de multas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   identifier:
 *                     type: string
 *                   descripcion:
 *                     type: string
 *                   fecha:
 *                     type: string
 *                   valor:
 *                     type: number
 *                   pagada:
 *                     type: boolean
 */

router.get('/multas/:identifier', async (req, res) => {
    try {
        const response = await axios.get(`https://shak-multas.onrender.com/multas/${req.params.identifier}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { error: 'Unknown error' });
    }
});

module.exports = router;
