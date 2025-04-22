import google.generativeai as genai
import os
from dotenv import load_dotenv
from data import preimage_data
load_dotenv()
# from PIL import Image
import ast

prompt = """

**Prompt for Vision GPT (with JSON output):**

"You are a recipe generation AI. When given an image of a food dish, analyze the visual features (ingredients, texture, colors, presentation, etc.) to identify the dish and generate a complete recipe.  

Your output **must be in JSON format** with the following structure:

```json
{
  'dish_name': 'String - Name of the dish',
  'cuisine': 'String - Estimated cuisine (e.g., Italian, Indian)',
  'ingredients': [
    'List of main ingredients visually identified'
  ],
  'prep_time_minutes': Integer,
  'cook_time_minutes': Integer,
  'instructions': [
    'Step-by-step cooking instructions as a list of strings'
  ],
  'serving_suggestions': 'Optional string with serving ideas or sides',
  'tags': ['Optional dietary tags like vegan, gluten-free, spicy']
}
```

"""




class food_recipe_generator:

    def report(self,image):
        def input_file(uploaded_file=None, file_path=None):
            if uploaded_file:
                # Handle file upload
                bytes_data = uploaded_file.read()
                image_parts = {
                    "mime_type": uploaded_file.mimetype,
                    "data": bytes_data
                }
                return image_parts
            elif file_path:
                # Handle file path
                with open(file_path, 'rb') as f:
                    bytes_data = f.read()
                # Here you would need to determine the MIME type, but for simplicity, it's left as 'image/jpeg'
                # In a real-world scenario, you might use the `mimetypes` library to detect the MIME type.
                image_parts = {
                    "mime_type": 'image/jpeg',
                    "data": bytes_data
                }
                return image_parts
            else:
                return None
            
        
        image = input_file(file_path=image)
        
        load_dotenv()
        api_key = os.getenv('GOOGLE_API_KEY')
        genai.configure(api_key=api_key) 
        
        model = genai.GenerativeModel(model_name="gemini-1.5-flash")
        response = model.generate_content([image, prompt])
        
        response = response.text


        return response