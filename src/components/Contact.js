import React from "react";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send</button>
      </form>
    </section>
  );
}
