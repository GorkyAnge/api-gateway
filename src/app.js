const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger/swaggerSpec');
const fakePaymentPortalRoutes = require('./routes/fakePaymentPortal');
const shakTarjetasRoutes = require('./routes/shakTarjetas');
const shakMultasRoutes = require('./routes/shakMultas');
const notificationRoutes = require('./routes/notification'); // Importa la nueva ruta

const app = express();

app.use(express.json());

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes setup
app.use('/fake-payment-portal', fakePaymentPortalRoutes);
app.use('/shak-tarjetas', shakTarjetasRoutes);
app.use('/shak-multas', shakMultasRoutes);
app.use('/notification', notificationRoutes); // Añade la nueva ruta

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});

module.exports = app;
