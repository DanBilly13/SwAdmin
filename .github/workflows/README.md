# GitHub Actions Workflows

## Deployment Workflow

### Overview
This workflow automates the deployment of the SwAdmin project to GitHub Pages.

### Trigger
- **Event**: Pushes to the `main` branch
- **Manual Trigger**: Workflow dispatch enabled

### Workflow Steps

1. **Checkout**
   - Uses `actions/checkout@v3`
   - Retrieves the latest code from the main branch

2. **Node.js Setup**
   - Uses `actions/setup-node@v3`
   - Node.js version: 18
   - Caches npm dependencies

3. **Dependency Installation**
   - Runs `npm install`
   - Lists installed packages for verification

4. **Project Build**
   - Executes `npm run build`
   - Generates production-ready assets

5. **Artifact Upload**
   - Uploads build output to GitHub Pages
   - Deploys from `./docs` directory

### Configuration Details
- **Permissions**:
  - Read repository contents
  - Write to GitHub Pages
  - Write ID token

### Troubleshooting
- Check GitHub Actions tab for detailed logs
- Verify Node.js and npm versions match project requirements
- Ensure all dependencies are correctly installed

### Local Equivalent
To simulate the CI/CD process locally:
```bash
npm install
npm run build
```

### Customization
Modify `deploy.yml` to:
- Change Node.js version
- Add additional build steps
- Configure deployment settings
