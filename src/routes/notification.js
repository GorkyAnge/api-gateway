const express = require('express');
const axios = require('axios');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Notification
 *   description: API para consumir notificaciones
 */

/**
 * @swagger
 * /notification/consume:
 *   post:
 *     summary: Consume una notificación
 *     tags: [Notification]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               exchange:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Notificación consumida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 */

router.post('/consume', async (req, res) => {
    try {
        const response = await axios.post('https://notification-appv2-j4ky6fi3uq-uw.a.run.app/api/consume', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { error: 'Unknown error' });
    }
});

module.exports = router;
