import React from "react";
import { Routes, Route, NavLink, Link, Outlet, useParams, useSearchParams } from "react-router-dom";
import { getInvoices, getInvoice } from "./data";

// Search params
export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />}>
                <Route path='expenses' element={<Expenses />}></Route>
                <Route path='invoices' element={<Invoices />}>
                    <Route
                        index
                        element={
                        <main style={{ padding: "1rem" }}>
                            <p>Select an invoice</p>
                        </main>
                        }
                    />
                    <Route path=":invoiceId" element={<Invoice />}/>
                </Route>
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
                <Link to="/expenses">Expenses</Link>
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
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);
    return (
        <div style={{display: 'flex'}}>
            <nav
                style={{
                borderRight: "solid 1px",
                padding: "1rem"
            }}
            >
                <input 
                    value={searchParams.get("filter") || ""}
                    // 这里的filter可以用任何字段
                    onChange={event => {
                        let filter = event.target.value;
                        if(filter) {
                            setSearchParams({filter})
                        } else {
                            setSearchParams({})
                        }
                    }}
                />
                {invoices
                    .filter(invoice => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let name = invoice.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map((invoice) => (
                        <NavLink
                            style={({ isActive }) => {
                                return {
                                    display: "block",
                                    margin: "1rem 0",
                                    color: isActive ? "red" : "blue"
                                }
                            }}
                            to={`/invoices/${invoice.number}`}
                            key={invoice.number}
                        >
                            {invoice.name}
                        </NavLink>
                    ))
                }
            </nav>
            <Outlet />
        </div>
    );
}

function Invoice() {
    let params = useParams();
    console.log(params);
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    return (
        <main>
            <h2>Total Due: {invoice.amount}</h2>
            <p>{invoice.name}: {invoice.number}</p>
            <p>Due Date: {invoice.due}</p>
        </main>
    )
}