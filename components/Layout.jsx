// https://www.youtube.com/watch?v=RR2IMAwNxVU
import Link from 'next/link';
global.Link = Link

import { useRouter } from 'next/router'
global.useRouter = useRouter

import useTranslation from "next-translate/useTranslation";
global.useTranslation = useTranslation;

// import { useTranslation } from "react-i18next";
// import "../components/i18n";

import * as react from 'react';
Object.entries(react).forEach(([name, exported]) => { global[name] = exported });

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {

  // let router = useRouter();

  // console.log('LOCALES:', router.locales)

  return (<>
    <main>
      <Header>Hello</Header>
      {children}
      <hr />
      <Footer />
    </main>
  </>)
}
