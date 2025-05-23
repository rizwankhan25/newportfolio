"use client" 
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from './ui/Button';

export default function Contact() {
  const form = useRef();
  emailjs.init('CO5tpObSRqY-ZVLuh');
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_pw1exij', // Replace with your EmailJS service ID
        'template_pnqlizo', // Replace with your EmailJS template ID
        form.current,
        {
          publicKey: 'CO5tpObSRqY-ZVLuh', // Replace with your EmailJS public key
        }
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send the message, please try again.');
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-clip-text">
            Get In Touch
          </span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-xl">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Subject of your message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div className="flex justify-center">
                <Button type="submit" className="bg-gold-400 hover:bg-gold-300">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
