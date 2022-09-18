const express = require('express')
const app = express()

const cors = require('cors')

const uuid = require('uuid')


const baseUrl = 'http://localhost:3000'


const axios = require('axios').default;


app.use(cors())
app.use(express.json())
app.use(express.static('public'));
require("dotenv").config();
const bodyParser = require('body-parser')
const path = require('path')

const stripe = require('stripe')(process.env.SEC_KEY)
// app.post("/create-checkout-session", async (req, res) => {
//     console.log(req);
//     const { ticket, token } = req.body.data;
//     console.log("product", ticket);
//     console.log("price", ticket.ticketPrice);
//     // const idempontencyKey = uuid();

//     // return stripe.customers.create({
//     //     email: token.email,
//     //     source: token.id
//     // }).then(customer => {
//     //     stripe.charges.create({
//     //         amount: ticket.ticketPrice,
//     //         currency: 'inr',
//     //         customer: customer.id,
//     //         receipt_email: token.email,
//     //         description: ticket.name
//     //     })
//     // }).then(result => res.status(200).json(result))
//     //     .catch(err => console.log(err))
//     const session = await stripe.checkout.sessions.create({
//         line_items: [
//             {
//                 price: 'price_1LjFMySJqyX6PC1uqE0s1fu3',
//                 quantity: ticket.ticketPrice / 50,
//             },],
//         mode = 'payment',
//         success_url: `http://localhost:3001?success=true`,
//         cancel_url: `http://localhost:3001?canceled=true`,

//     })

// })
app.post('/create-checkout-session', async (req, res) => {
    const { ticket, token } = req.body.data;
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: 'price_1LjFMySJqyX6PC1uqE0s1fu3',
                quantity: ticket.ticketPrice / 50,
            },
        ],
        mode: 'payment',
        success_url: `${baseUrl}?success=true`,
        cancel_url: `${baseUrl}?canceled=true`,
    });

    res.redirect(303, session.url);
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})