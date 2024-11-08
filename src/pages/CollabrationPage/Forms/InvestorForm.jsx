import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { countryList } from '../../../utils/CountryList';
import emailjs from 'emailjs-com';
import { investorTemplate } from '../../../utils/forms-formats/InvestorFormat';

const InvestorForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);

    const formattedData = investorTemplate(data);

    try {
      const response = await emailjs.send(
        'service_8hdasd9',
        'template_2dn1ftd',
        { message: formattedData },
        'E0y6p0_LBMpPkmoYG'
      );
      console.log('SUCCESS!', response.status, response.text);
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error('FAILED...', err);
      setError('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-xl p-6 mx-auto text-center bg-white rounded shadow-md">
        <h3 className="text-2xl font-semibold text-green-600">Thank you for your submission!</h3>
        <p className="mt-4 text-gray-700">We will review your application and get back to you shortly.</p>
      </div>
    );
  }

  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center h-64">
          <div className="loader">Loading...</div> {/* Customize your loader here */}
        </div>
      )}

      {!loading && (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-full p-6 mx-auto space-y-6 bg-white rounded shadow-md" encType="multipart/form-data">
          <input type="hidden" {...register('type')} value="investors" />

          {/* Investor's Name and Organization */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Investor's Name*</label>
              <input
                {...register('investor_name', { required: "Investor's Name is required" })}
                className={`form-input w-full p-2 border ${errors.investor_name ? 'border-red-500' : 'border-gray-300'} rounded`}
                type="text"
                placeholder="Investor's Name"
              />
              {errors.investor_name && <p className="mt-1 text-xs text-red-500">{errors.investor_name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Organization*</label>
              <input
                {...register('organization', { required: 'Organization is required' })}
                className={`form-input w-full p-2 border ${errors.organization ? 'border-red-500' : 'border-gray-300'} rounded`}
                type="text"
                placeholder="Organization"
              />
              {errors.organization && <p className="mt-1 text-xs text-red-500">{errors.organization.message}</p>}
            </div>
          </div>

          {/* Country and Email */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Country*</label>
              <select
                {...register('country', { required: 'Country is required' })}
                className={`form-select w-full p-2 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded`}
              >
                <option value="" disabled>Select Country</option>
                {countryList.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
              {errors.country && <p className="mt-1 text-xs text-red-500">{errors.country.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email*</label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Email is invalid' }
                })}
                className={`form-input w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
                type="email"
                placeholder="Email"
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>
          </div>

          {/* Phone and Address */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone*</label>
              <input
                {...register('phone', { required: 'Phone is required' })}
                className={`form-input w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded`}
                type="text"
                placeholder="Phone"
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Address*</label>
              <input
                {...register('address', { required: 'Address is required' })}
                className={`form-input w-full p-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded`}
                type="text"
                placeholder="Address"
              />
              {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address.message}</p>}
            </div>
          </div>

          {/* City and State/Province */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">City*</label>
              <input
                {...register('city', { required: 'City is required' })}
                className={`form-input w-full p-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded`}
                type="text"
                placeholder="City"
              />
              {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">State/Province*</label>
              <input
                {...register('state', { required: 'State/Province is required' })}
                className={`form-input w-full p-2 border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded`}
                type="text"
                placeholder="State/Province"
              />
              {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state.message}</p>}
            </div>
          </div>

          {/* Postal Code and How did you hear about us? */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Postal Code*</label>
              <input
                {...register('postal', { required: 'Postal Code is required' })}
                className={`form-input w-full p-2 border ${errors.postal ? 'border-red-500' : 'border-gray-300'} rounded`}
                type="text"
                placeholder="Postal Code"
              />
              {errors.postal && <p className="mt-1 text-xs text-red-500">{errors.postal.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">How did you hear about us?</label>
              <input
                {...register('hear_about')}
                className="w-full p-2 border border-gray-300 rounded form-input"
                type="text"
                placeholder="How did you hear about us?"
              />
            </div>
          </div>

          {/* Organizational Website Link and Team Size */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Organizational Website Link:</label>
              <input
                {...register('org_link')}
                className="w-full p-2 border border-gray-300 rounded form-input"
                type="text"
                placeholder="Organizational Website Link (if any)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Team Size*</label>
              <select
                {...register('team_count', { required: 'Team size is required' })}
                className={`form-select w-full p-2 border ${errors.team_count ? 'border-red-500' : 'border-gray-300'} rounded`}
              >
                <option value="" disabled>Select Team Size</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              {errors.team_count && <p className="mt-1 text-xs text-red-500">{errors.team_count.message}</p>}
            </div>
          </div>

          {/* Investment Plan */}
          <div>
            <label className="block text-sm font-medium text-gray-700">How can we fit into your investment plan?</label>
            <textarea
              {...register('plan')}
              className="w-full p-2 mt-2 border border-gray-300 rounded form-textarea"
              cols="30"
              rows="5"
              placeholder="How can we fit into your investment plan?"
            />
          </div>

          {/* Loading, Error, and Submit Button */}
          {loading && <p className="text-blue-500">Submitting...</p>}
          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:bg-blue-400"
            disabled={loading}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default InvestorForm;
