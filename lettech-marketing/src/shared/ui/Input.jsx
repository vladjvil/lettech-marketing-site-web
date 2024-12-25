import React from 'react';
import { cn } from '../lib/cn';

export const Input = React.forwardRef(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          className={cn(
            "w-full px-6 py-3 text-gray-900 rounded-lg border border-gray-300",
            "placeholder:text-gray-500 focus:outline-none focus:ring-2",
            "focus:ring-blue-600 focus:border-transparent transition-all duration-200",
            "dark:bg-gray-800 dark:text-white dark:border-gray-700",
            "dark:placeholder:text-gray-400",
            error && "border-red-500 focus:ring-red-500",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="absolute -bottom-6 left-0 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
