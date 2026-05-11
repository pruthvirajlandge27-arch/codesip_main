import React, { forwardRef } from 'react';

const Input = forwardRef(({ label, error, className = '', ...props }, ref) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {label && <label className="text-sm font-medium text-gray-300">{label}</label>}
      <input
        ref={ref}
        className={`w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-white transition-all ${
          error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
        } ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
