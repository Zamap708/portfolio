"use client";
import React from "react";
// import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  function handleChange(event: any) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    setIsSubmitted((isSubmitted) => !isSubmitted);
    console.log(event);
    // emailjs.send('service_fiys2dr', 'template_iz54nkt', formData, 'kDJTFrwZ2QKQ2yuPZ')
    // .then((result) => {
    //     console.log(result.text);
    // }, (error) => {
    //     console.log(error.text);
    // });
  }

  return (
    <div className="h-screen w-full p-24 flex justify-center items-center">
      {isSubmitted ? (
        <div className="thank-you">
          <p className="thank-heading">MESSAGE RECEIVED!</p>
        </div>
      ) : (
        <div className="w-full border rounded flex p-8">
          <div className="flex flex-col gap-4">
            <p className="text-6xl">Contact Me</p>
            <p className="text-xl">
              Interested in working with me?
              <br />
              Get in touch with this form and I'll get back to you as soon as
              possible
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-1/2">
            <div className="w-full flex flex-col justify-center items-center gap-4 px-8">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border p-2 rounded focus:border-0"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border p-2 rounded"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border p-2 rounded"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={10}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border p-2 rounded"
              />
              <button className="border px-4 py-2 rounded">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
