import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-red-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-red-600 mb-4">🍽️ About MealMagicianAI</h1>
        <p className="text-gray-700 text-lg mb-6">
          <strong>MealMagicianAI</strong> is a college final year project developed to assist users in planning meals efficiently. Built using Flask and Python, it leverages Flask-WTF and WTForms for form handling and validation.
        </p>
        <h2 className="text-2xl font-semibold text-red-500 mb-2">🔧 Technologies Used</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Python</li>
          <li>Flask</li>
          <li>Flask-WTF</li>
          <li>WTForms</li>
        </ul>
        <h2 className="text-2xl font-semibold text-red-500 mb-2">📁 Project Structure</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li><code>templates/</code> - HTML templates for rendering views</li>
          <li><code>static/</code> - Static assets like CSS and JavaScript files</li>
          <li><code>uploads/</code> - Directory for storing uploaded files</li>
        </ul>
        <h2 className="text-2xl font-semibold text-red-500 mb-2">🚀 Getting Started</h2>
        <ol className="list-decimal list-inside text-gray-700 mb-6">
          <li>Ensure Python is installed on your system.</li>
          <li>Install dependencies:
            <pre className="bg-gray-100 p-2 rounded mt-1">pip install flask flask_wtf wtforms</pre>
          </li>
          <li>Run the application:
            <pre className="bg-gray-100 p-2 rounded mt-1">python app.py</pre>
          </li>
        </ol>
        <p className="text-gray-700">
          For more details, visit the GitHub repository: <a href="https://github.com/mrKhanmk/Recipe" className="text-blue-500 underline">MealMagicianAI</a>
        </p>
      </div>
    </div>
  );
};

export default About;
