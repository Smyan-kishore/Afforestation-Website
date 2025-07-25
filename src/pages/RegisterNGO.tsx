import { useState } from 'react';
import RegistrationForm from '../components/registration/RegistrationForm';
import RegistrationGuide from '../components/registration/RegistrationGuide';

export default function RegisterNGO() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Register Your NGO</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <RegistrationForm />
          </div>
          <div>
            <RegistrationGuide />
          </div>
        </div>
      </div>
    </div>
  );
}