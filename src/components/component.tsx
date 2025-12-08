import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpecForm {
  businessName: string;
  industryType: string;
  numberOfUsers: number;
  featuresRequired: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecForm>();

  const onSubmit: SubmitHandler<BusinessSpecForm> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/create-business', data);
      reset();
    } catch (err) {
      setError('An error occurred while creating the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Create Business Specification</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} aria-label="Business specification form">
        <div className="mb-4">
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
          <input
            type="text"
            id="businessName"
            {...register('businessName', { required: 'This is required' })}
            className={clsx(
              "mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
              errors.businessName && 'border-red-500'
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="industryType" className="block text-sm font-medium text-gray-700">Industry Type</label>
          <input
            type="text"
            id="industryType"
            {...register('industryType', { required: 'This is required' })}
            className={clsx(
              "mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
              errors.industryType && 'border-red-500'
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="numberOfUsers" className="block text-sm font-medium text-gray-700">Number of Users</label>
          <input
            type="number"
            id="numberOfUsers"
            {...register('numberOfUsers', { required: 'This is required' })}
            className={clsx(
              "mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
              errors.numberOfUsers && 'border-red-500'
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="featuresRequired" className="block text-sm font-medium text-gray-700">Features Required</label>
          <textarea
            id="featuresRequired"
            {...register('featuresRequired', { required: 'This is required' })}
            className={clsx(
              "mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
              errors.featuresRequired && 'border-red-500'
            )}
          />
        </div>
        <button type="submit" className={clsx(
          "w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
          loading && 'cursor-not-allowed opacity-75'
        )}
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpecForm {
  businessName: string;
  industryType: string;
  numberOfUsers: number;
  featuresRequired: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecForm>();

  const onSubmit: SubmitHandler<BusinessSpecForm> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/create-business', data);
      reset();
    } catch (err) {
      setError('An error occurred while creating the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Create Business Specification</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} aria-label="Business specification form">
        <div className="mb-4">
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
          <input
            type="text"
            id="businessName"
            {...register('businessName', { required: 'This is required' })}
            className={clsx(
              "mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
              errors.businessName && 'border-red-500'
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="industryType" className="block text-sm font-medium text-gray-700">Industry Type</label>
          <input
            type="text"
            id="industryType"
            {...register('industryType', { required: 'This is required' })}
            className={clsx(
              "mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
              errors.industryType && 'border-red-500'
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="numberOfUsers" className="block text-sm font-medium text-gray-700">Number of Users</label>
          <input
            type="number"
            id="numberOfUsers"
            {...register('numberOfUsers', { required: 'This is required' })}
            className={clsx(
              "mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
              errors.numberOfUsers && 'border-red-500'
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="featuresRequired" className="block text-sm font-medium text-gray-700">Features Required</label>
          <textarea
            id="featuresRequired"
            {...register('featuresRequired', { required: 'This is required' })}
            className={clsx(
              "mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
              errors.featuresRequired && 'border-red-500'
            )}
          />
        </div>
        <button type="submit" className={clsx(
          "w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
          loading && 'cursor-not-allowed opacity-75'
        )}
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;