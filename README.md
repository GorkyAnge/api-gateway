## Description

The API Gateway acts as a single entry point for various services, including:
- Fake Payment Portal: Simulates card payments.
- Shak Tarjetas: Manages registration, recharges, and charges for unique identifiers.
- Shak Multas: Manages creation and payment of fines.

## Requirements

- Node.js (version 12 or higher)
- npm (version 6 or higher)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/GorkyAnge/api-gateway.git
    cd api-gateway
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Usage

To start the server, run:

```bash
node src/app.js
```
The server will run at http://localhost:3000.


## Endpoints

### Fake Payment Portal

**POST /fake-payment-portal/payment/card**

Simulates a card payment.

Request Body:

```json
{
    "app_name": "ABC",
    "service": "Electronic Items",
    "customer_email": "gorkyange2@gmail.com",
    "card_type": "VISA",
    "card_holder_name": "Example",
    "card_number": "4242424242424242",
    "expiryMonth": "01",
    "expiryYear": "2020",
    "cvv": "123",
    "amount": "5000.00",
    "currency": "USD"
}
```
Response:

```json
{
    "success": true,
    "message": "Transaction is successful.",
    "data": {
        "data": {
            "message": "transaction is successful"
        }
    }
}
```
### Shak Tarjetas
**POST /shak-tarjetas/register**

Registers a unique identifier.

Request Body:

```json
{
    "identifier": "PBO1234"
}
```
Response:

```json
{
    "message": "Identificador registrado",
    "identifier": "PBO1234"
}
```

**POST /shak-tarjetas/recharge**

Recharges a unique identifier.

Request Body:

```json
{
    "app_name": "MyApp",
    "service": "Recarga de Identificador",
    "customer_email": "gorkyange2@gmail.com",
    "card_type": "VISA",
    "card_holder_name": "John Doe",
    "card_number": "4242424242424242",
    "expiryMonth": "12",
    "expiryYear": "2024",
    "cvv": "123",
    "amount": "150.00",
    "currency": "USD",
    "identifier": "PBO1234"
}
```
Response:

```json
{
    "message": "Recarga exitosa",
    "newBalance": 150
}
```
**POST /shak-tarjetas/charge**

Charges an amount from a unique identifier.

Request Body:

```json
{
    "identifier": "PBO1234",
    "amount": 75.00
}
```
Response:

```json
{
    "message": "Cobro realizado",
    "identifier": "PBO1234",
    "newBalance": 75
}
```
**POST /shak-tarjetas/checkIdentifier**

Checks if an identifier exists.

Request Body:

```json
{
    "identifier": "PBO1234"
}
```
Response:

```json
{
    "message": "Identificador existe",
    "identifier": "PBO1234"
}
```
### Shak Multas
**POST /shak-multas/multas**

Creates a new fine.

Request Body:

```json
{
    "id": "PBO1234",
    "valor": 5000,
    "descripcion": "Mal estacionado"
}
```
Response:

```json
{
    "id": "nNjh0jU3QjDcOvgqGJfR",
    "mensaje": "Multa creada con éxito"
}
```
**POST /shak-multas/multas/pagar**

Pays an existing fine.

Request Body:

```json
{
    "multaId": "nNjh0jU3QjDcOvgqGJfR",
    "paymentDetails": {
        "app_name": "ABC",
        "service": "Electronic Items",
        "customer_email": "shalithax@gmail.com",
        "card_type": "VISA",
        "card_holder_name": "Example",
        "card_number": "4242424242424242",
        "expiryMonth": "01",
        "expiryYear": "2020",
        "cvv": "123",
        "amount": "5000.00",
        "currency": "USD"
    }
}
```
Response:

```json
{
    "mensaje": "Pago realizado con éxito",
    "response": {
        "success": true,
        "message": "Transaction is successful.",
        "data": {
            "data": {
                "message": "transaction is successful"
            }
        }
    }
}
```
**GET /shak-multas/multas/{identifier}**

Gets fines by identifier.

Response:

```json
[
    {
        "id": "SnuZjGu8EmxFv804kuJa",
        "identifier": "12345",
        "descripcion": "Estacionamiento indebido",
        "fecha": "2024-07-07T06:28:28.967Z",
        "valor": 100,
        "pagada": true
    },
    {
        "id": "dj0Fhj3bM3liokBaEuvg",
        "identifier": "12345",
        "descripcion": "Estacionamiento indebido",
        "fecha": "2024-07-07T06:45:25.666Z",
        "valor": 100,
        "pagada": true
    },
    {
        "id": "iPhLPFPtjStCvOvxZGfk",
        "identifier": "12345",
        "descripcion": "Estacionamiento indebido",
        "fecha": "2024-07-07T06:26:49.011Z",
        "valor": 100,
        "pagada": true
    }
]
```

## Shak-Notificator

# Queue Manager API

Este proyecto es un gestor de colas que utiliza RabbitMQ para manejar mensajes y colas. La API proporciona varios endpoints para crear y eliminar colas, consumir mensajes y enviar mensajes a través de un intercambio fanout.


## Endpoints
Crear Intercambio
```http
POST /createExchange
```
Crea un intercambio fanout.

Request Body
```json
{
    "exchange": "exchange_name"
}
```
Response
```json
{
    "message": "Fanout exchange exchange_name created successfully."
}
```
Eliminar Cola
```http
DELETE /deleteQueue/:queue
```
Elimina una cola especificada.

URL Params
- queue: El nombre de la cola a eliminar.
Response
```json
{
    "message": "Queue queue_name deleted successfully."
}
```
Enviar Mensaje
```http
POST /sendMessage
```
Envía un mensaje a un intercambio.

Request Body
```json
{
    "exchange": "exchange_name",
    "message": "your_message"
}
```
Response
```json
{
    "message": "Message published to exchange exchange_name successfully."
}
```
Consumir Mensajes
```http
POST /consumeMessages
```
Consume mensajes de un intercambio y los envía por correo electrónico.

Request Body
```json
{
    "exchange": "exchange_name",
    "email": "email@example.com"
}
```
Response
```json
{
    "message": "Consuming messages from exchange exchange_name and sending to email@example.com."
}
```
Estructura del Proyecto
```plaintext
src/
├── rabbitmq/
│   ├── config.js
│   ├── rabbitmq.js
├── routes/
│   ├── createExchange.js
│   ├── deleteQueue.js
│   ├── sendMessage.js
│   ├── consumeMessages.js
├── app.js
```

## Swagger Documentation

Swagger documentation is available at http://localhost:3000/api-docs. This provides an interactive interface to explore and test the endpoints available in the API Gateway.
Project Structure
markdown
Copy code
## Project Structure

```bash
api-gateway/
│
├── src/
│   ├── routes/
│   │   ├── fakePaymentPortal.js
│   │   ├── shakTarjetas.js
│   │   └── shakMultas.js
│   ├── app.js
│   └── swagger/
│          ├── swagger.json
│          └── swaggerSpec.js
├── package.json
└── package-lock.json
```
This README provides clear project description, installation instructions, list of endpoints, details on Swagger documentation, and project structure.
