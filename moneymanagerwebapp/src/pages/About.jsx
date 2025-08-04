import React from "react";

const About = () => (
  <div style={{ maxWidth: 900, margin: "0 auto", padding: "3rem 1rem" }}>
    <h1 style={{ color: "#7a0dfa", fontWeight: 700, textAlign: "center", marginBottom: "1rem" }}>
      About Money Manager
    </h1>
    <p style={{ textAlign: "center", marginBottom: "2rem", fontSize: "1.2rem" }}>
      Money Manager is a modern expense tracking platform that helps you take full control of your finances.
      Easily track your <span style={{ color: "#7a0dfa", fontWeight: 500 }}>expenses</span>,
      <span style={{ color: "#14a800", fontWeight: 500 }}> income</span>, and visualize your transactions with beautiful charts.
    </p>
    <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
      <div style={{ background: "#f3edfa", borderRadius: 16, padding: 24, flex: 1, minWidth: 240 }}>
        <h3>📊 Expense & Income Tracking</h3>
        <p>Log your daily expenses and income with ease. Categorize them for better clarity and management.</p>
      </div>
      <div style={{ background: "#f3edfa", borderRadius: 16, padding: 24, flex: 1, minWidth: 240 }}>
        <h3>🗂 Category Management</h3>
        <p>Create and manage custom categories to personalize your budget and spending goals.</p>
      </div>
      <div style={{ background: "#f3edfa", borderRadius: 16, padding: 24, flex: 1, minWidth: 240 }}>
        <h3>🥧 Pie Charts & 📈 Line Charts</h3>
        <p>Understand your financial health with dynamic charts and make smarter decisions.</p>
      </div>
      <div style={{ background: "#f3edfa", borderRadius: 16, padding: 24, flex: 1, minWidth: 240 }}>
        <h3>📑 Transaction Overview</h3>
        <p>See all of your transactions at a glance with totals, filters, and breakdowns in one place.</p>
      </div>
    </div>
  </div>
);

export default About;
