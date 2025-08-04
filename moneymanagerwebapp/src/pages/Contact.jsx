import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example: logic to send email/message can go here
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "3rem 1rem" }}>
      <h1 style={{ color: "#7a0dfa", fontWeight: 700, textAlign: "center", marginBottom: "1rem" }}>
        Contact Us
      </h1>
      <p style={{ textAlign: "center", marginBottom: "2rem", fontSize: "1.1rem" }}>
        Have a question, feedback, or feature request? We'd love to hear from you.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{ background: "#f3edfa", borderRadius: 16, padding: 32, display: "flex", flexDirection: "column", gap: "1.1rem" }}>
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          style={{ padding: "0.9rem", borderRadius: 8, border: "1px solid #ccc" }}
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          style={{ padding: "0.9rem", borderRadius: 8, border: "1px solid #ccc" }}
        />
        <textarea
          placeholder="Message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          style={{ padding: "0.9rem", borderRadius: 8, border: "1px solid #ccc", resize: "vertical" }}
        />
        <button
          type="submit"
          style={{
            background: "#7a0dfa",
            color: "white",
            border: "none",
            padding: "0.8rem",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: "1.1rem",
            marginTop: "0.5rem",
            cursor: "pointer"
          }}>
          Send Message
        </button>
        {sent && (
          <div style={{ color: "#14a800", marginTop: "0.5rem", textAlign: "center" }}>
            Thank you! Your message has been received.
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
