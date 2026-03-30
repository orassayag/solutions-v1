# Instructions

## Setup Instructions

### Prerequisites

- Node.js (v8.11.3 or higher)
- npm (v6.1.0 or higher) or yarn
- Git
- A code editor (VSCode recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/orassayag/solutions-v1.git
   cd solutions-v1
   ```

2. Install server dependencies:
   ```bash
   cd server-node
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd ../client-react-local-state
   npm install
   ```

## Configuration

### Server Configuration (server-node)

The server uses environment-based configuration files located in `server-node/config/`:
- `config.development.json` - Development environment
- `config.production.json` - Production environment
- `config.test.json` - Test environment

#### Configuration Options:

```json
{
  "PORT": 3001,
  "URL": "https://jsonplaceholder.typicode.com/photos"
}
```

- `PORT`: The port number for the server (default: 3001)
- `URL`: External API endpoint for fetching photos

Set the environment variable:
```bash
export NODE_ENV=development  # or production, test
```

### Client Configuration (client-react-local-state)

Client settings are located in `client-react-local-state/src/settings/`:
- `settings.development.json` - Development environment settings
- `settings.production.json` - Production environment settings

The application automatically selects the appropriate configuration based on the build mode.

## Running the Application

### Running the Server

```bash
cd server-node
npm start
```

The server will start on the configured port (default: http://localhost:3001)

**Available endpoints:**
- `GET /api/photos` - Fetch all photos
- `GET /api/photos?count=10` - Fetch specific number of photos

### Running the Client

#### Development Mode

```bash
cd client-react-local-state
npm start
```

Opens the application in development mode at http://localhost:3000

**Features:**
- Hot module replacement
- Detailed error messages
- Source maps for debugging

#### Production Build

```bash
cd client-react-local-state
npm run build
```

Builds the app for production to the `build` folder with optimizations:
- Minified code
- Optimized bundle size
- Hashed filenames for caching

## Testing

### Server Testing

```bash
cd server-node
npm start
```

Test the API endpoints using:
- **Postman**: Import the endpoints and test
- **curl**: 
  ```bash
  curl http://localhost:3001/api/photos
  curl http://localhost:3001/api/photos?count=5
  ```
- **Browser**: Navigate to http://localhost:3001/api/photos

### Client Testing

```bash
cd client-react-local-state
npm test
```

Runs tests in interactive watch mode using Jest.

## Project Structure

### Server Structure (server-node)

```
server-node/
├── api/              # API logic for external services
├── config/           # Environment-based configuration files
├── core/             # Core business logic
├── datafile/         # JSON data files
├── helpers/          # Helper utilities (CacheService, validations)
├── middleware/       # Express middleware (CORS, error handling)
├── models/           # Data models
├── routes/           # API route definitions
├── startup/          # Application startup logic (logging, routes)
└── index.js          # Application entry point
```

### Client Structure (client-react-local-state)

```
client-react-local-state/
├── public/           # Static files
├── src/
│   ├── api/          # API configuration and routes
│   ├── components/   # React components
│   ├── containers/   # Container components
│   ├── hoc/          # Higher-Order Components
│   ├── settings/     # Application settings
│   ├── translate/    # Translation files
│   └── utils/        # Utility functions
├── config/           # Webpack and build configuration
└── scripts/          # Build and development scripts
```

## Features

### Server Features

1. **REST API**: Simple Express.js REST API
2. **Caching**: In-memory caching using node-cache (1-hour TTL)
3. **Data Sources**: 
   - External API (JSONPlaceholder)
   - Local JSON file
4. **CORS Support**: Cross-origin resource sharing enabled
5. **Logging**: Winston-based logging system
6. **Error Handling**: Centralized error handling middleware

### Client Features

1. **React Components**: Modular component architecture
2. **Routing**: React Router for navigation
3. **State Management**: Local state management (no Redux)
4. **API Integration**: Axios-based API communication
5. **Authentication**: Authentication component structure
6. **Internationalization**: Translation support
7. **Responsive UI**: Modern, responsive design

## Development Workflow

1. **Start the server** (terminal 1):
   ```bash
   cd server-node
   npm start
   ```

2. **Start the client** (terminal 2):
   ```bash
   cd client-react-local-state
   npm start
   ```

3. **Make changes** to the code
4. **Test changes** in the browser
5. **Commit** with meaningful messages

## Troubleshooting

### Common Issues

**Server won't start:**
- Check if the port is already in use
- Verify Node.js version (v8.11.3+)
- Ensure all dependencies are installed

**Client won't start:**
- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Clear browser cache
- Check for port conflicts

**API requests failing:**
- Verify the server is running
- Check CORS configuration
- Verify API base URL in client settings

### Cache Issues

The server caches API responses for 1 hour. To clear the cache:
- Restart the server
- Or modify the TTL in `server-node/core/photos.js`

## Building for Production

### Server

```bash
cd server-node
export NODE_ENV=production
npm start
```

### Client

```bash
cd client-react-local-state
npm run build
```

Deploy the contents of the `build` folder to your hosting service.

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
