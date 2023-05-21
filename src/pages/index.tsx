import Head from 'next/head'
import Body from 'next/'
import React from 'react';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Swiftbuy</title>
        <meta name="description" content="Efficient Shopping Routes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="home">
            <h1>SwiftBuy</h1>
            <p>
                This app helps you create and manage your shopping list with ease.
                Simply add items to your list and keep track of them in your basket.
                Plan your shopping trip and stay organized!
            </p>
            <Link href="/shopping">
                <div className="createPlanButton">Create a Shopping Plan</div>
            </Link>
        </div>
    </>
  )
}
