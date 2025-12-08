import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface RequirementsForm {
  featureName: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<RequirementsForm>();

  const onSubmit: SubmitHandler<RequirementsForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setError(null); // Clear any previous error
      reset(); // Reset form after submission
      setLoading(false);
    }, 2000).catch((err) => {
      setError('An unexpected error occurred.');
      setLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 bg-white rounded-lg shadow-md">
      {error && <div role="alert" aria-live="assertive" className="mb-4 text-red-500">{error}</div>}
      <div className="mb-4">
        <label htmlFor="featureName" className={twMerge("block mb-2 text-sm font-medium")}>Feature Name</label>
        <input
          type="text"
          id="featureName"
          {...register('featureName', { required: 'This field is required' })}
          className={twMerge(
            "w-full px-3 py-2 bg-white border rounded-lg",
            errors.featureName && "border-red-500 focus:border-red-500"
          )}
        />
        <p role="alert" aria-live="polite" className={errors.featureName ? 'mt-1 text-sm text-red-500' : 'hidden'}>
          {errors.featureName?.message}
        </p>
      </div>

      <div className="mb-4">
        <label htmlFor="description" className={twMerge("block mb-2 text-sm font-medium")}>Description</label>
        <textarea
          id="description"
          {...register('description', { required: 'This field is required' })}
          rows={4}
          className={twMerge(
            "w-full px-3 py-2 bg-white border rounded-lg",
            errors.description && "border-red-500 focus:border-red-500"
          )}
        />
        <p role="alert" aria-live="polite" className={errors.description ? 'mt-1 text-sm text-red-500' : 'hidden'}>
          {errors.description?.message}
        </p>
      </div>

      <div className="mb-4">
        <label htmlFor="priority" className={twMerge("block mb-2 text-sm font-medium")}>Priority</label>
        <select
          id="priority"
          {...register('priority', { required: 'This field is required' })}
          className={twMerge(
            "w-full px-3 py-2 bg-white border rounded-lg",
            errors.priority && "border-red-500 focus:border-red-500"
          )}
        >
          <option value="">Select priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <p role="alert" aria-live="polite" className={errors.priority ? 'mt-1 text-sm text-red-500' : 'hidden'}>
          {errors.priority?.message}
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={twMerge(
          "w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none",
          loading && "opacity-50 cursor-not-allowed"
        )}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface RequirementsForm {
  featureName: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<RequirementsForm>();

  const onSubmit: SubmitHandler<RequirementsForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setError(null); // Clear any previous error
      reset(); // Reset form after submission
      setLoading(false);
    }, 2000).catch((err) => {
      setError('An unexpected error occurred.');
      setLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 bg-white rounded-lg shadow-md">
      {error && <div role="alert" aria-live="assertive" className="mb-4 text-red-500">{error}</div>}
      <div className="mb-4">
        <label htmlFor="featureName" className={twMerge("block mb-2 text-sm font-medium")}>Feature Name</label>
        <input
          type="text"
          id="featureName"
          {...register('featureName', { required: 'This field is required' })}
          className={twMerge(
            "w-full px-3 py-2 bg-white border rounded-lg",
            errors.featureName && "border-red-500 focus:border-red-500"
          )}
        />
        <p role="alert" aria-live="polite" className={errors.featureName ? 'mt-1 text-sm text-red-500' : 'hidden'}>
          {errors.featureName?.message}
        </p>
      </div>

      <div className="mb-4">
        <label htmlFor="description" className={twMerge("block mb-2 text-sm font-medium")}>Description</label>
        <textarea
          id="description"
          {...register('description', { required: 'This field is required' })}
          rows={4}
          className={twMerge(
            "w-full px-3 py-2 bg-white border rounded-lg",
            errors.description && "border-red-500 focus:border-red-500"
          )}
        />
        <p role="alert" aria-live="polite" className={errors.description ? 'mt-1 text-sm text-red-500' : 'hidden'}>
          {errors.description?.message}
        </p>
      </div>

      <div className="mb-4">
        <label htmlFor="priority" className={twMerge("block mb-2 text-sm font-medium")}>Priority</label>
        <select
          id="priority"
          {...register('priority', { required: 'This field is required' })}
          className={twMerge(
            "w-full px-3 py-2 bg-white border rounded-lg",
            errors.priority && "border-red-500 focus:border-red-500"
          )}
        >
          <option value="">Select priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <p role="alert" aria-live="polite" className={errors.priority ? 'mt-1 text-sm text-red-500' : 'hidden'}>
          {errors.priority?.message}
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={twMerge(
          "w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none",
          loading && "opacity-50 cursor-not-allowed"
        )}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;