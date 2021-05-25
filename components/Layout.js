import React from "react";
import Head from "next/head";
import { GoogleFonts } from "next-google-fonts";

export default function Layout({ title, children }) {
  return (
    <div>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" />
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto max-w-5xl">{children}</main>
    </div>
  );
}
