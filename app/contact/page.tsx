"use client";
import axios from "axios";
import React, { useState } from "react";
export const runtime = "edge";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  let spaceId = process.env.NEXT_PUBLIC_SPACE_ID;
  let cmaToken = process.env.NEXT_PUBLIC_CMA_TOKEN;

  const resetForm = () => {
    setName(" ");
    setEmail(" ");
    setSubject(" ");
    setMsg(" ");
  };

  const handleSubmit = async () => {
    if (name == "" || email == "" || subject == "" || msg == "") {
      return alert("All fields are required");
    }

    try {
      const url = `https://api.contentful.com/spaces/${spaceId}/environments/master/entries`;

      //Auth Token can be saved in local storage.
      let headers = {
        Authorization: `Bearer ${cmaToken}`,
        "Content-Type": "application/vnd.contentful.management.v1+json",
        "X-Contentful-Content-Type": "contact",
      };

      let data = {
        fields: {
          name: {
            "en-US": name,
          },
          email: {
            "en-US": email,
          },
          subject: {
            "en-US": subject,
          },
          message: {
            "en-US": msg,
          },
        },
      };

      const res = await axios.post(url, data, { headers });
      if (res.status === 201) {
        alert("Data Submitted Successfully");
      } else {
        alert("Error! Please try again");
      }

      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-4 w-50">
      <h2>Contact Us</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            className="form-control"
            id="subject"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            id="message"
            className="form-control"
            aria-label="With textarea"
          ></textarea>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
