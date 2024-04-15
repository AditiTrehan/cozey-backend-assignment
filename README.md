Warehouse Management System
An application designed to automate picking and packing tasks in the warehouse process.

Features
Picking List: A picking list for all items with their total quantities is generated based on all orders.

Packing List: A packing list for all orders with the respective Products, items and total quantities for each is generated.

Technology Stack
Backend: Node.js

Frontend: React.js

Getting Started
Prerequisites
Node.js & npm

Setting Up the Backend
Navigate to the root directory of the project.
Install required dependencies using: npm install
Start the backend server: npm run dev
Server will start on port http://localhost:8080
Setting Up the Frontend (Client)
Navigate to the frontend/frontend-assignment directory.
Install required dependencies using: npm install
Start the React development server: npm run dev
Navigate to http://localhost:3000 or the next available port.

Connecting Frontend with Backend
Ensure the backend server is running (default port is 8000). When the React development server is running, it will proxy requests to the backend
Development Notes
For local development, the React app communicates with the backend using a proxy to avoid CORS issues.
In a production environment, we might have to deploy the frontend and backend separately.
