import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

// Outlet, 路由嵌套

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />}>
                <Route path='expenses' element={<Expenses />}></Route>
                <Route path='invoices' element={<Invoices />}></Route>
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
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Invoices</h2>
      </main>
    );
  }