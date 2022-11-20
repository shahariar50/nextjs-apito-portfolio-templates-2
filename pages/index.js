import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Project from "../components/Project";
import Resume from "../components/Resume";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <>
      <Nav />
      <About />
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
