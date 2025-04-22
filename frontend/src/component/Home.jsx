import React from "react";
import "./home.css";

const Home = ({ data }) => {
  return (
    <div className="flex flex-col h-[100vh] bg-cover bg-black" style={{ backgroundImage: "url('/back4.jpg')" }}>
      {/* Navbar */}
      

      {/* Form Section */}
      <div className="flex flex-col items-center text-center text-white mt-10">
        <h1 className="text-5xl font-lobster typing-animation">MEAL MAGICIAN</h1>
        <h4 className="text-xl font-macondo mt-4 mb-16 animate-fadeIn">An AI powered Recipe Generator Web App to assist you in cooking.</h4>

        <form action="/home" method="POST" encType="multipart/form-data" className="flex flex-col items-center space-y-6">
          <input
            type="file"
            name="image"
            accept="image/*"
            required
            className="w-full text-white border-4 border-white rounded bg-gradient-to-b from-pink-600 to-purple-800 font-macondo"
          />
          <button
            type="submit"
            className="px-10 py-3 bg-blue-300 text-black font-macondo font-bold text-xl rounded hover:bg-blue-700 hover:text-white transition"
          >
            Upload and Generate
          </button>
        </form>
      </div>

      {/* Output Section */}
      {data && (
        <div className="w-full mt-10 bg-cover bg-center py-10 px-4" style={{ backgroundImage: "url('/files/wallpaper.jpeg')" }}>
          <div className="max-w-4xl mx-auto bg-blue-200 text-gray-900 p-6 rounded-lg border-4 border-white font-macondo">
            <h2 className="text-3xl font-bold mb-4">{data.dish_name}</h2>
            <p><strong>Cuisine:</strong> {data.cuisine}</p>
            <p><strong>Prep Time:</strong> {data.prep_time_minutes} minutes</p>
            <p><strong>Cook Time:</strong> {data.cook_time_minutes} minutes</p>

            <h4 className="text-xl font-semibold mt-4">Ingredients:</h4>
            <ul className="list-disc list-inside">
              {data.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <h4 className="text-xl font-semibold mt-4">Instructions:</h4>
            <ol className="list-decimal list-inside">
              {data.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>

            <h4 className="text-xl font-semibold mt-4">Serving Suggestions:</h4>
            <p>{data.serving_suggestions}</p>

            <h4 className="text-xl font-semibold mt-4">Tags:</h4>
            <ul className="flex flex-wrap gap-2">
              {data.tags.map((tag, index) => (
                <li key={index} className="bg-purple-600 text-white px-3 py-1 rounded-full">{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;