import Cors from 'micro-cors';
import stripeInit from 'stripe';
import verifyStripe from '@webdeveducation/next-verify-stripe';
import clientPromise from '../../../lib/mongodb';

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = stripeInit(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

const handler = async (req, res) => {
  if (req.method === 'POST') {
    let event;
    try {
      event = await verifyStripe({
        req,
        stripe,
        endpointSecret,
      });
    } catch (e) {
			res.status(500).json({ error: e.message })
      console.log('ERROR: ', e);
    }

    switch (event.type) {
      case 'payment_intent.succeeded': {
        const client = await clientPromise;
        const db = client.db('BlogBrain');

        const paymentIntent = event.data.object;
        const auth0Id = paymentIntent.metadata.sub;

        console.log('AUTH 0 ID: ', paymentIntent);
				console.log('paymentIntent: ', paymentIntent)
				console.log('auth0Id: ', auth0Id)

        const userProfile = await db.collection('users').updateOne(
          {
            auth0Id,
          },
          {
            $inc: {
              availableTokens: 10,
            },
            $setOnInsert: {
              auth0Id,
            },
          },
          {
            upsert: true,
          }
        );
				console.log('USER PROFILE: ', userProfile);
				break;
      }
      default:
        console.log('UNHANDLED EVENT: ', event.type);
				break;
    }
    res.status(200).json({ received: true });
  }
};

export default cors(handler);
