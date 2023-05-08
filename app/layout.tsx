import {Nunito} from 'next/font/google';

import './globals.css'
import Navbar from "@/app/components/Navbar";
import React from "react";

export const metadata = {
  title: 'まん福家',
  description: '中古CDショップ',
}

const font = Nunito({subsets: ['latin']});

export default function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
    <body className={font.className}>
    <Navbar/>
    {children}
    </body>
    </html>
  )
}
