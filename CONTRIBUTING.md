# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:
1. Check if the issue already exists in the [GitHub Issues](https://github.com/orassayag/solutions-v1/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Error messages or logs (if applicable)
   - Your environment details (OS, Node version)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

#### Server-side (Node.js)
- Use ES6+ features where appropriate
- Follow existing code structure and patterns
- Use async/await for asynchronous operations
- Add proper error handling with try/catch blocks
- Keep functions small and focused

#### Client-side (React.js)
- Follow React best practices and patterns
- Use functional components where possible
- Keep component logic simple and readable
- Separate concerns (components, containers, HOCs)
- Use PropTypes for type checking

### Testing

Before submitting:

**Server (server-node):**
```bash
cd server-node
npm install
npm start
```
Test the endpoints using a tool like Postman or curl.

**Client (client-react-local-state):**
```bash
cd client-react-local-state
npm install
npm start
```
Test the application in your browser at http://localhost:3000

### Project Structure

When adding new features:

**Server-side:**
- Add API logic in `server-node/api/`
- Add core business logic in `server-node/core/`
- Add routes in `server-node/routes/`
- Add middleware in `server-node/middleware/`
- Add models in `server-node/models/`
- Update configuration in `server-node/config/`

**Client-side:**
- Add components in `client-react-local-state/src/components/`
- Add containers in `client-react-local-state/src/containers/`
- Add HOCs in `client-react-local-state/src/hoc/`
- Add utility functions in `client-react-local-state/src/utils/`
- Add API routes in `client-react-local-state/src/api/routes/`

### Coding Standards

1. **Naming conventions**: Use camelCase for variables and functions, PascalCase for components
2. **Error handling**: Always handle errors appropriately with meaningful messages
3. **Logging**: Use winston for server-side logging
4. **Configuration**: Use environment-based configuration files
5. **Comments**: Add comments for complex logic, but avoid obvious comments
6. **Dependencies**: Only add necessary dependencies and keep them updated

### Adding New Dependencies

When adding new packages:
- Prefer stable, well-maintained packages
- Check for security vulnerabilities
- Update both package.json and package-lock.json
- Document why the dependency is needed

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
