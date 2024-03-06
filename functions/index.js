const cors = require('cors')({ allowedHeaders: true, maxAge: 100 });
const functions = require('firebase-functions'); // V1
const admin = require('firebase-admin');
admin.initializeApp();

exports.sayHello = functions.https.onRequest((request, response) => {
  functions.logger.info('DICIENDO HOLA');
  response.send('Hello from Firebase');
});

exports.createRandomData = functions.https.onRequest((request, response) => {
  // setRandomData()
  // TE QUEDASTE AQUI
  console.log('HERE IN FIREBASE FUNCTIONS');
});

exports.addMessage = functions.https.onRequest(async (req, res) => {
  console.log('addMessage fn');
  // console.log(req, res);
  console.log(req.query);

  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await admin
    .firestore()
    .collection('messages')
    .add({ original: original });
  // Send back a message that we've successfully written the message
  res.json({ result: `Message with ID: ${writeResult.id} added.` });
});

// Listens for new messages added to /messages/:documentId/original and creates an
// uppercase version of the message to /messages/:documentId/uppercase
exports.makeUppercase = functions.firestore
  .document('/messages/{documentId}')
  .onCreate((snap, context) => {
    console.log('UPPERCASING');
    // Grab the current value of what was written to Firestore.
    const original = snap.data().original;

    // Access the parameter `{documentId}` with `context.params`
    functions.logger.log('Uppercasing', context.params.documentId, original);

    const uppercase = original.toUpperCase();

    // You must return a Promise when performing asynchronous tasks inside a Functions such as
    // writing to Firestore.
    // Setting an 'uppercase' field in Firestore document returns a Promise.
    return snap.ref.set({ uppercase }, { merge: true });
  });

exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
  const stripe = require('stripe')(functions.config().stripe.secret_key); // Pero esta parece que se tiene que asignar primero a través de linea de comandos
  // const stripe = require('stripe')(STRIPE_WEBHOOK_SECRET); // y este parece que tendría que instalar .env en el proyecto de functions lo que se ve menos factible

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    success_url: 'http://localhost:5500/success',
    cancel_url: 'http://localhost:5500/cancel',
    shipping_address_collection: {
      allowed_countries: ['MX'],
    },
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: 'mxn',
          unit_amount: 10,
          product_data: {
            name: 'New camera',
          },
        },
      },
    ],
  });

  return {
    id: session.id,
  };
});

exports.stripeWebhook = functions.https.onRequest(async (request, response) => {
  let event;

  try {
    const stripe = require('stripe')(functions.config().stripe.token);
    const endpointSecret = require('stripe')(
      functions.config().stripe.payments_webhook_secret,
    );

    event = stripe.webhooks.constructEvent(
      request.rawBody,
      request.headers['stripe-signature'],
      endpointSecret,
    );
  } catch (err) {
    console.error('⚠️ Webhook signature verification failed.');
    return response.sendStatus(400);
  }

  // const dataObject = event.data.object;

  // await admin.firestore().collection('orders').doc().set({
  //   checkoutSessionId: dataObject.id,
  //   paymentStatus: dataObject.payment_status,
  //   shippingInfo: dataObject.shipping,
  //   amountTotal: dataObject.amount_total,
  // });

  // return res.sendStatus(200);

  return response.sendStatus(200);

  // cors(request, response, async () => {
  //   const stripe = require('stripe')(functions.config().stripe.token);
  //   const endpointSecret = require('stripe')(
  //     functions.config().stripe.payments_webhook_secret,
  //   );

  //   //este como que ni hace falta
  //   // response.set('Access-Control-Allow-Origin', '*');
  //   // response.set('Access-Control-Allow-Headers', '*');

  //   // console.log('Inside stripeWebhook');

  //   // // This is your Stripe CLI webhook secret for testing your endpoint locally.

  //   // const sig = request.headers['stripe-signature'];

  //   // console.log('request.body2:');
  //   // // console.log(request.rawBody);
  //   // console.log(request);

  //   // let event;

  //   // try {
  //   //   event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  //   // } catch (err) {
  //   //   console.log(`Webhook Error: ${err.message}`);
  //   //   response.status(400).send(`Webhook Error: ${err.message}`);
  //   //   return;
  //   // }

  //   // // Handle the event
  //   // switch (event.type) {
  //   //   case 'payment_intent.succeeded':
  //   //     const paymentIntentSucceeded = event.data.object;
  //   //     // Then define and call a function to handle the event payment_intent.succeeded
  //   //     break;
  //   //   // ... handle other event types
  //   //   default:
  //   //     console.log(`Unhandled event type ${event.type}`);
  //   // }

  //   // // Return a 200 response to acknowledge receipt of the event
  //   // response.send();
  //   return response.sendStatus(200);
  // });
});
