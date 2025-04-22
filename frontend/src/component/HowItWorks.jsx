import React from 'react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto bg-red-50 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-red-600 mb-6">✨ How It Works</h1>
        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. User Input</h2>
            <p>Users provide input through intuitive forms built with Flask-WTF. This can include dietary preferences, available ingredients, or meal preferences.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Data Handling</h2>
            <p>The backend Flask application processes the input, performs necessary logic and validations using WTForms, and interacts with template views.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Meal Generation</h2>
            <p>Based on the user's input, the app generates meal suggestions or related results, which are then rendered dynamically through Jinja2 templates.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Output Display</h2>
            <p>Results are shown on the front-end with an easy-to-read format, making the meal planning process simple and user-friendly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
