import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [result, setResult] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const onChange = (event) =>
    setForm((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setResult("");

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    formData.append("access_key", "644a3314-4740-4744-a402-3f329176c2b6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setShowForm(false);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setIsSending(false);
  };
  return (
    <div className="flex items-center justify-center bg-blue-950 min-h-screen" id='contact'>
      {showForm && (
        <form onSubmit={onSubmit} className="border-2 border-gray-700 p-4 rounded-md mb-4 flex flex-col items-center">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-center">
              <div>
                <h1 className="text-2xl font-bold text-center">Contact Me</h1>
                <p className="text-center">Send me a message if you have any questions or want to discuss something.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">
                  Name:
                </label>
                <input type="text" name="name" value={form.name} onChange={onChange} placeholder="Your Name" required className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 placeholder-gray-400" />
              </div>
              <div>
                <label className="block mb-2">
                  Email:
                </label>
                <input type="email" name="email" value={form.email} onChange={onChange} placeholder="Your Email" required className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 placeholder-gray-400" />
              </div>
            </div>
            <div>
              <label className="block mb-2">
                Message:
              </label>
              <textarea name="message" value={form.message} onChange={onChange} placeholder="Your Message" required className="w-full px-4 py-2 text-xl text-blue-950 bg-blue-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 placeholder-gray-400"></textarea>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>

        </form>
      )}
      <span className="text-center text-xl">{result}</span>

    </div>
  );
};

export default ContactForm;



