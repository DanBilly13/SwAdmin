# SwAdmin GitHub Workflows Documentation

## Overview
This document provides detailed information about the GitHub Actions workflows used in the SwAdmin project.

## Deployment Workflow

### Workflow Configuration
- **File Location**: `.github/workflows/deploy.yml`
- **Trigger Events**: 
  - Pushes to `main` branch
  - Manual workflow dispatch

### Environment Specifications
- **Operating System**: Ubuntu Latest
- **Node.js Version**: 18
- **Package Manager**: npm

### Workflow Steps

1. **Repository Checkout**
   - Uses `actions/checkout@v3`
   - Retrieves the latest code from the main branch

2. **Node.js Environment Setup**
   - Configures Node.js version 18
   - Enables npm caching to improve build performance

3. **Dependency Management**
   - Runs `npm install`
   - Installs all project dependencies
   - Caches dependencies to speed up future builds

4. **Project Build**
   - Executes `npm run build`
   - Generates production-ready assets
   - Outputs build artifacts to `./docs` directory

5. **GitHub Pages Deployment**
   - Uploads build artifacts
   - Deploys directly to GitHub Pages

### Permissions
- `contents: read` - Access to repository contents
- `pages: write` - Ability to publish to GitHub Pages
- `id-token: write` - Generate deployment ID tokens

## Local Development Equivalent

To simulate the CI/CD process locally:

```bash
# Install dependencies
npm install

# Build the project
npm run build
```

## Troubleshooting

### Common Issues
- Ensure Node.js and npm versions match project requirements
- Verify all dependencies are correctly installed
- Check GitHub Actions tab for detailed build logs

### Debugging Steps
1. Review workflow run logs
2. Verify local build process works
3. Check dependency compatibility

## Best Practices
- Always pull the latest changes before pushing
- Run local builds before committing
- Use meaningful commit messages
- Keep the `main` branch stable

## Contact
For issues with the GitHub workflow, contact the project maintainers.
