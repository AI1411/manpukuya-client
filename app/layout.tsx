import {Nunito} from 'next/font/google';

import './globals.css'
import Navbar from "@/app/components/Navbar";
import React from "react";
import axios from "axios";

export const metadata = {
  title: 'まん福家',
  description: '中古CDショップ',
}

const getGenres = async () => {
  const res = await axios.post('http://localhost:8080/proto.genre.v1.GenreService/ListGenres', {}, {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  return res.data.genres;
}


const font = Nunito({subsets: ['latin']});

export default async function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode
  }) {
  const genres = await getGenres();
  return (
    <html lang="en">
    <body className={font.className}>
    <Navbar genres={genres}/>
    {children}
    </body>
    </html>
  )
}
