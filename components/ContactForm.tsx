"use client";

import { type FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-thank-you" role="status" aria-live="polite">
        <p className="kicker">Submitted</p>
        <h2>Thank You</h2>
        <p>We have received your enquiry and will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" action="#" method="post" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          First Name
          <input type="text" name="first-name" autoComplete="given-name" required />
        </label>
        <label>
          Last Name
          <input type="text" name="last-name" autoComplete="family-name" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" autoComplete="tel" />
        </label>
      </div>
      <label>
        Inquiry Type
        <select name="inquiry-type" defaultValue="Brand campaign">
          <option>Brand campaign</option>
          <option>Location availability</option>
          <option>Partnership</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        Message
        <textarea name="message" rows={6} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
