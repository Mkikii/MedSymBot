// import { NextResponse } from "next/server"
// import Stripe from "stripe"

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2023-10-16",
// })

// export async function POST(req: Request) {
//   try {
//     const { amount, currency = "usd", paymentMethodType = "card" } = await req.json()

//     // Create a PaymentIntent with the order amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: Math.round(amount * 100), // Stripe expects amounts in cents
//       currency,
//       payment_method_types: [paymentMethodType],
//       metadata: {
//         orderId: `order-${Date.now()}`,
//       },
//     })

//     return NextResponse.json({
//       clientSecret: paymentIntent.client_secret,
//     })
//   } catch (error) {
//     console.error("Error creating payment intent:", error)
//     return NextResponse.json({ error: "Failed to create payment intent" }, { status: 500 })
//   }
// }

