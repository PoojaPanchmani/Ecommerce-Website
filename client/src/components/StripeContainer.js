import React from "react";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import PaymentOnline from "./PaymentOnline";
const PUBLIC_KEY = "pk_test_51KaxlNSGmzQrXUvXkPrwHlBqVLtXvJ7UYxJuAk7Jb1sGYNprQ4MiAZhFDMovCm3cc7TVS1hgn4hm1cwdCgSJNxWA00YYGQAZA1";

const stripeTakePromise = loadStripe(PUBLIC_KEY);
const StripeContainer = () =>
{
    return(<Elements stripe={stripeTakePromise}>
         <PaymentOnline/>
    </Elements>);
}

export default StripeContainer;