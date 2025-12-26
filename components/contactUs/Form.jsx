import React, { useState } from 'react';

const countryCodes = [
  { code: '+1', country: 'United States', flag: '🇺🇸' },
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+82', country: 'South Korea', flag: '🇰🇷' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷' },
  { code: '+52', country: 'Mexico', flag: '🇲🇽' },
  { code: '+7', country: 'Russia', flag: '🇷🇺' },
  { code: '+39', country: 'Italy', flag: '🇮🇹' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
  { code: '+46', country: 'Sweden', flag: '🇸🇪' },
  { code: '+47', country: 'Norway', flag: '🇳🇴' },
  { code: '+45', country: 'Denmark', flag: '🇩🇰' },
  { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
  { code: '+43', country: 'Austria', flag: '🇦🇹' },
  { code: '+32', country: 'Belgium', flag: '🇧🇪' },
  { code: '+48', country: 'Poland', flag: '🇵🇱' },
  { code: '+420', country: 'Czech Republic', flag: '🇨🇿' },
  { code: '+36', country: 'Hungary', flag: '🇭🇺' },
  { code: '+351', country: 'Portugal', flag: '🇵🇹' },
  { code: '+30', country: 'Greece', flag: '🇬🇷' },
  { code: '+90', country: 'Turkey', flag: '🇹🇷' },
  { code: '+20', country: 'Egypt', flag: '🇪🇬' },
  { code: '+27', country: 'South Africa', flag: '🇿🇦' },
  { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
  { code: '+254', country: 'Kenya', flag: '🇰🇪' },
  { code: '+852', country: 'Hong Kong', flag: '🇭🇰' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
  { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
  { code: '+63', country: 'Philippines', flag: '🇵🇭' },
  { code: '+66', country: 'Thailand', flag: '🇹🇭' },
  { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
  { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
  { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
  { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+977', country: 'Nepal', flag: '🇳🇵' },
  { code: '+354', country: 'Iceland', flag: '🇮🇸' },
  { code: '+358', country: 'Finland', flag: '🇫🇮' },
  { code: '+504', country: 'Honduras', flag: '🇭🇳' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
];

const managementOptions = [
  'Work & project management',
  'Sales & CRM',
  'Email marketing',
  'Product management',
  'Software development',
  'Ticketing & service management',
  'Other'
];

const companySizes = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1000+ employees'
];

export default function SalesContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    countryCode: '+91',
    phone: '',
    companyName: '',
    companySize: '',
    management: [],
    consent: false
  });

  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showManagementDropdown, setShowManagementDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleManagementToggle = (option) => {
    setFormData(prev => ({
      ...prev,
      management: prev.management.includes(option)
        ? prev.management.filter(item => item !== option)
        : [...prev.management, option]
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const filteredCountries = countryCodes.filter(country =>
    country.country.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.includes(countrySearch)
  );

  const selectedCountry = countryCodes.find(c => c.code === formData.countryCode);

  return (
    <div className="min-h-screen py8 px-4">
      <div className="flex gap-4 flex-col border border-gray-300 bg-white max-w-lg px-10 mx-auto p-8 rounded-lg">
        <h2 className="text-xl font-semibold text-center mb-2">Contact our sales team</h2>
        
        {/* First Name and Last Name */}
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              id="firstName"
              type="text"
              placeholder="First name*"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full rounded-lg p-2.5 px-4 border border-gray-300 focus:border-teal-500 focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <input
              id="lastName"
              type="text"
              placeholder="Last name*"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full rounded-lg p-2.5 px-4 border border-gray-300 focus:border-teal-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Work Email */}
        <div>
          <input
            id="email"
            type="email"
            placeholder="Work email*"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg p-2.5 px-4 border border-gray-300 focus:border-teal-500 focus:outline-none"
          />
        </div>

        {/* Job Title */}
        <div>
          <input
            id="jobTitle"
            type="text"
            placeholder="Job title"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full rounded-lg p-2.5 px-4 border border-gray-300 focus:border-teal-500 focus:outline-none"
          />
        </div>

        {/* Phone with Country Code */}
        <div className="relative">
          <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:border-teal-500">
            <button
              type="button"
              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
              className="flex items-center gap-1 px-3 bg-white border-r border-gray-300 hover:bg-gray-50"
            >
              <span className="text-xl">{selectedCountry?.flag}</span>
              <span className="text-xs text-gray-600">▼</span>
            </button>
            <input
              id="phone"
              type="tel"
              placeholder="+91"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 p-2.5 px-4 outline-none"
            />
          </div>
          {/* <p className="text-xs text-red-500 mt-1">Required</p> */}

          {/* Country Dropdown */}
          {showCountryDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-64 overflow-y-auto">
              <div className="p-2 sticky top-0 bg-white border-b">
                <input
                  type="text"
                  placeholder="search"
                  value={countrySearch}
                  onChange={(e) => setCountrySearch(e.target.value)}
                  className="w-full p-2 border border-teal-400 rounded outline-none focus:border-teal-600"
                />
              </div>
              {filteredCountries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, countryCode: country.code }));
                    setShowCountryDropdown(false);
                    setCountrySearch('');
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 hover:bg-teal-50 text-left"
                >
                  <span className="text-xl">{country.flag}</span>
                  <span className="text-sm">{country.country}</span>
                  <span className="text-sm text-gray-500 ml-auto">{country.code}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Company Name and Company Size */}
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              id="companyName"
              type="text"
              placeholder="Company name*"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full rounded-lg p-2.5 px-4 border border-gray-300 focus:border-teal-500 focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <select
              id="companySize"
              value={formData.companySize}
              onChange={handleChange}
              className="w-full rounded-lg p-2.5 px-4 border border-gray-300 bg-white focus:border-teal-500 focus:outline-none"
            >
              <option value="">Company size*</option>
              {companySizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        </div>

        {/* What would you like to manage */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowManagementDropdown(!showManagementDropdown)}
            className="w-full text-left rounded-lg p-2.5 px-4 border-2 border-teal-500 bg-white flex justify-between items-center hover:border-teal-600"
          >
            <span className={formData.management.length > 0 ? 'text-black' : 'text-gray-400'}>
              {formData.management.length > 0
                ? `${formData.management.length} selected`
                : 'What would you like to manage?*'}
            </span>
            <span className="text-xs text-gray-600">▼</span>
          </button>

          {/* Management Dropdown */}
          {showManagementDropdown && (
            <div className="mt-2 bg-teal-50 border border-teal-200 rounded-lg p-4">
              {managementOptions.map((option) => (
                <label key={option} className="flex items-center gap-3 py-2 cursor-pointer hover:bg-teal-100 px-2 rounded">
                  <input
                    type="checkbox"
                    checked={formData.management.includes(option)}
                    onChange={() => handleManagementToggle(option)}
                    className="w-4 h-4 accent-teal-600"
                  />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Consent Checkbox */}
        <div className="mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              id="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="w-4 h-4 accent-teal-600"
            />
            <span className="text-xs text-gray-600">
              By clicking submit, I acknowledge monday.com's{' '}
              <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center flex-col">
          <button
            onClick={handleSubmit}
            className="text-base mt-4 lg:text-lg bg-teal-600 hover:bg-teal-700 text-white tracking-widest border-2 border-teal-600 px-6 lg:px-8 py-3 lg:py-3 inline-block duration-200 rounded-lg cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}