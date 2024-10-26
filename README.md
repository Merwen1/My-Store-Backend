the first thing you must do is run:
npm install

then you must create a .env file in the root directory with the following content:
DATABASE_URL="mysql://newUser:123456@localhost:3306/store"

then set Up the Database:
npx prisma migrate dev --name init
npx prisma generate

then Run the Server:
node server.js or using nodemon server.js

---------------------------------------------------------------
Project Structure
my-crud-app
├── prisma
│   └── schema.prisma      # Defines models and database connection details
├── routes
│   └── itemRoutes.js      # Contains CRUD routes for the Item model
├── config
│   └── db.js              # (Optional) Additional configurations
├── .env                   # Environment variables (database URL, port, etc.)
├── package.json           # Project dependencies and scripts
├── server.js              # Main server file to initialize Express and routes
└── README.md              # Project documentation

Description of Key Files
prisma/schema.prisma: Contains the database schema for the Item model and configures the MySQL datasource.
routes/itemRoutes.js: Defines CRUD operations for managing Item entries.
server.js: Sets up the Express server, connects routes, and configures middleware.
.env: Stores sensitive information like the database URL and server port, which are used throughout the application but know its just contain this variable:
DATABASE_URL="mysql://newUser:123456@localhost:3306/store"


API Endpoints
Method	Endpoint	Description
POST	/api/items	Create a new item
GET	/api/items	Retrieve all items
GET	/api/items/:id	Retrieve a single item by ID
PUT	/api/items/:id	Update an item by ID
DELETE	/api/items/:id	Delete an item by ID


please note that you must use port 5000 on the server.


