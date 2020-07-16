import * as functions from 'firebase-functions';

const secret = functions.config().stripe.testkey;

export const getStripekey = functions.https.onCall((data, context) => {
    return { msg: secret };
});
