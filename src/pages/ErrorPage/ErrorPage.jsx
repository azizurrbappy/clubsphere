import React from 'react';
import { useRouteError, useNavigate } from 'react-router';
import { AlertCircle, Home, RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error(error);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden text-center"
      >
        <div className="p-8">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-red-500" />
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops!</h1>
          <p className="text-gray-500 mb-6">
            Sorry, an unexpected error has occurred.
          </p>

          <div className="bg-gray-50 rounded-xl p-4 mb-8 text-left overflow-auto max-h-48 border border-gray-100">
            <code className="text-sm text-red-500 font-mono block">
              {error.statusText || error.message}
            </code>
            {error.stack && (
              <pre className="text-xs text-gray-400 mt-2 overflow-x-auto">
                {error.stack}
              </pre>
            )}
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={() => navigate('/')}
              className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors"
            >
              <Home size={18} />
              Go Home
            </button>
            <button
              onClick={() => window.location.reload()}
              className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              <RefreshCcw size={18} />
              Try Again
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
