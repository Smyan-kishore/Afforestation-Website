import { useState } from 'react';
import { ContactFormData } from './types';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (name: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
      <FormInput
        label="Name"
        id="name"
        value={formData.name}
        onChange={(value) => handleChange('name', value)}
        required
      />

      <FormInput
        label="Email"
        id="email"
        type="email"
        value={formData.email}
        onChange={(value) => handleChange('email', value)}
        required
      />

      <FormInput
        label="Mobile Number"
        id="mobile"
        type="tel"
        value={formData.mobile}
        onChange={(value) => handleChange('mobile', value)}
        required
      />

      <FormTextArea
        label="Message"
        id="message"
        value={formData.message}
        onChange={(value) => handleChange('message', value)}
        required
      />

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}