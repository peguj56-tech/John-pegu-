'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function BlysterWebsite() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'contact@blyster.com',
        }
      );

      if (response.status === 200) {
        setSubmitMessage('✅ Message sent successfully! We will contact you soon.');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setSubmitMessage('❌ Failed to send message. Please try again.');
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-wide"
        >
          BLYSTER PRIVATE LIMITED
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-xl md:text-2xl max-w-3xl text-gray-100"
        >
          Empowering Brands with Smart Digital Marketing Solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 flex gap-4"
        >
          <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
            Get Started
          </button>

          <button className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 px-8 bg-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'SEO Optimization',
              text: 'Improve your website ranking and attract more organic traffic.',
            },
            {
              title: 'Social Media Marketing',
              text: 'Build strong engagement and grow your audience across all platforms.',
            },
            {
              title: 'Paid Advertising',
              text: 'Generate leads and maximize ROI through targeted ad campaigns.',
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.07, rotate: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-3xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-8 bg-gray-950 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">About Us</h2>

        <p className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">
          BLYSTER PRIVATE LIMITED COMPANY is a modern digital marketing agency helping businesses grow online with innovative marketing strategies, branding solutions, and performance-driven campaigns.
        </p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-8 bg-gray-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

          <p className="text-gray-300 mb-8">
            Ready to take your business to the next level? Let's connect.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="p-4 rounded-2xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="p-4 rounded-2xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500 transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="p-4 rounded-2xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500 transition"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-500 px-6 py-4 rounded-2xl font-semibold transition"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {submitMessage && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-4 text-sm"
              >
                {submitMessage}
              </motion.p>
            )}
          </form>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-8 text-center bg-black text-gray-500"
      >
        <p>© 2026 BLYSTER PRIVATE LIMITED COMPANY. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}
