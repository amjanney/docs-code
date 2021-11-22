import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { getInvoices } from "./data";

// reading-url-params
export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />}>
                <Route path='expenses' element={<Expenses />}></Route>
                <Route path='invoices' element={<Invoices />}></Route>
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    )
}

function Home() {
    return (
        <div>
            <h1>Bookkeeper</h1>
            <nav
            style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem"
              }}
            >
                <Link to="/invoices">Invoices</Link> |{" "}
        <        Link to="/expenses">Expenses</Link>
            </nav>
            <Outlet />
        </div>
    );
}

function Expenses() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Expenses</h2>
      </main>
    );
  }

  function Invoices() {
    let invoices = getInvoices();
    return (
      <div style={{display: 'flex'}}>
          <nav
            style={{
            borderRight: "solid 1px",
            padding: "1rem"
            }}
            >
                {
                    invoices.map((invoice) => (
                        <Link
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`/invoices/${invoice.number}`}
                        key={invoice.number}
                        >
                            {invoice.name}
                        </Link>
                    ))
                }
            </nav>
      </div>
    );
  }