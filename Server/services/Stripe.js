import Stripe from 'stripe';

const stripe = new Stripe(
  'sk_test_51HavCiC1nShCdeevg0ao9qiOTjIxRrj1WZqMYspnCgBUNEyCQGSah4XsGXp4UBlEiL1RUMBupLWSKtJKWt8R62c300bs30JjHv',
  {
    apiVersion: '2020-08-27',
  }
);

export default stripe;
