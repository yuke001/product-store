# Product Store

This is a simple full-stack e-commerce application built with React, Vite, Chakra UI, Node.js, Express, and MongoDB.  It allows users to view, create, update, and delete product listings.

## Features

*   **Browse Products:**  View a list of available products with their names, prices, and images.
*   **Create Products:** Add new products to the store by providing a name, price, and image URL.
*   **Update Products:** Modify existing product information such as name, price, and image.
*   **Delete Products:** Remove products from the store.
*   **Responsive Design:**  The application is designed to be responsive and work well on various screen sizes.
*   **Dark/Light Mode:** Toggle between light and dark themes.

## Technologies Used

*   **Frontend:**
    *   React
    *   Vite
    *   Chakra UI
    *   React Router
    *   Zustand (for state management)
*   **Backend:**
    *   Node.js
    *   Express
    *   MongoDB (with Mongoose)
    *   dotenv
    *   nodemon (for development)

## Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yuke001/product-store.git
    cd product-store
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure environment variables:**

    *   Create a `.env` file in the root directory.
    *   Add the following variables:

        ```
        PORT=5000  # Or your preferred port
        MONGO_URI=<Your MongoDB Connection String>
        ```
        Replace `<Your MongoDB Connection String>` with your actual MongoDB connection string.  You can get this from MongoDB Atlas or your local MongoDB instance.

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    This will start both the frontend (on port 3000) and the backend (on port 5000) in development mode with hot reloading.

5.  **Access the application:**

    Open your web browser and go to `http://localhost:3000`.

## Building for Production

1.  **Build the frontend:**

    ```bash
    npm run build
    ```

    This command installs dependencies for both the backend and the frontend, builds the frontend, and places the built files in the `frontend/dist` directory.

2.  **Start the production server:**

    ```bash
    npm start
    ```

    This will start the backend server in production mode, serving the built frontend files.  Make sure your `.env` file is correctly configured before running this command.

## API Endpoints

The backend API provides the following endpoints:

*   `GET /api/products`:  Retrieves a list of all products.
*   `POST /api/products`:  Creates a new product.  Requires a JSON body with `name`, `price`, and `image` fields.
*   `PUT /api/products/:id`:  Updates an existing product.  Requires the product ID in the URL and a JSON body with the updated fields.
*   `DELETE /api/products/:id`:  Deletes a product.  Requires the product ID in the URL.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

## Contributing

Contributions are welcome!  Please feel free to submit pull requests with bug fixes, new features, or improvements to the documentation.
