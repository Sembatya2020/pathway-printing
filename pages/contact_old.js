import Layout from '../components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <h1 className="text-4xl font-bold text-brand-800">Contact Pathway Printing and Graphics</h1>
        <p className="mt-3 text-slate-700">We’re ready to help with your next print and brand project.</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="section-card">
            <h2 className="text-xl font-semibold text-slate-800">Contact information</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><strong>Email:</strong> <a href="mailto:info@pathway-printing.net" className="text-brand-700">info@pathway-printing.net</a></li>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/256755960836" className="text-brand-700">+256755960836</a></li>
              <li><strong>Call:</strong> <a href="tel:+256782897255" className="text-brand-700">+256782897255</a></li>
              <li><strong>Location:</strong> Bwaise, Kampala, along Bombo Road</li>
            </ul>
            <p className="mt-4 text-sm text-slate-500">Office hours: Monday–Saturday, 8am–6pm</p>
          </div>

          <div className="section-card">
            <h2 className="text-xl font-semibold text-slate-800">Quick contact form</h2>
            <form className="mt-4 space-y-4">
              <input type="text" placeholder="Name" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
              <input type="email" placeholder="Email" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
              <input type="tel" placeholder="Phone" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
              <textarea rows="4" placeholder="Project details" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"></textarea>
              <button type="submit" className="btn-brand w-full py-2.5">Send Request</button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
