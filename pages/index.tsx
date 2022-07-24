import { NextPage } from "next";
import React from "react";
import InvoiceGenerator from "../components/InvoiceGenerator";

const Home: NextPage = () => {
  return (
    <main className="container">
      <InvoiceGenerator />
    </main>
  );
};

export default Home;
