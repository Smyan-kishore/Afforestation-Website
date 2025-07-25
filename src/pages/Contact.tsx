import { useState } from 'react';
import ContactForm from '../components/contact/ContactForm';
import SocialLinks from '../components/contact/SocialLinks';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>smyanavkj5@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+91 9968543214</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Connect With Us</h2>
              <p className="text-gray-600 mb-6">
                Have questions about our mission or how you can contribute? 
                Reach out through the form or connect with us on social media.
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}