"use client";

import { type FormEvent, useState } from "react";
import { locations } from "@/lib/locations";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState("Brand campaign");
  const [preferredLocation, setPreferredLocation] = useState("");

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
      <label>
        Inquiry Type
        <select name="inquiry-type" value={inquiryType} onChange={(event) => setInquiryType(event.target.value)}>
          <option>Brand campaign</option>
          <option>Location availability</option>
          <option>Partnership</option>
        </select>
      </label>
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
      <div className="form-row">
        <label>
          Preferred Location
          <select name="preferred-location" value={preferredLocation} onChange={(event) => setPreferredLocation(event.target.value)}>
            <option value="">No preference yet</option>
            {locations.map((location) => (
              <option key={location.slug}>{location.name}</option>
            ))}
          </select>
        </label>
        <label>
          Ideal Start
          <select name="ideal-start" defaultValue="As soon as available">
            <option>As soon as available</option>
            <option>This month</option>
            <option>Next month</option>
            <option>Planning ahead</option>
          </select>
        </label>
      </div>
      <label>
        Approximate Campaign Budget
        <select name="campaign-budget" defaultValue="Still working it out">
          <option>Still working it out</option>
          <option>Under $2,500</option>
          <option>$2,500 - $5,000</option>
          <option>$5,000+</option>
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          rows={6}
          placeholder={`${inquiryType}: tell us your campaign goal, timing, and what success looks like.`}
        />
      </label>
      <p className="form-helper">
        {preferredLocation
          ? `${inquiryType} enquiry for ${preferredLocation}. This will be sent to Kobe and Nic.`
          : `${inquiryType} enquiry. Pick a location if you already have one in mind.`}
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}
