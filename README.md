# SwAdmin

A modern, responsive admin interface built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI components built with Tailwind CSS
- 📱 Fully responsive design
- 🔍 Type-safe development with TypeScript
- 🧩 Component-based architecture following Atomic Design principles
- 📊 Interactive tables with sorting and filtering capabilities
- 👤 User management with status indicators
- 🎯 Customizable avatar components with badge support
- 🖼️ Centralized asset management with dynamic path resolution

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/DanBilly13/SwAdmin.git
cd SwAdmin
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## Project Structure

```
src/
  ├── components/
  │   ├── atoms/       # Basic building blocks
  │   ├── molecules/   # Combinations of atoms
  │   └── organisms/   # Complex components
  ├── data/            # Static data and mock datasets
  ├── pages/           # Application pages
  ├── utils/           # Utility functions and helpers
  │   └── paths.ts     # Asset path management utility
```

## Asset Management

SwAdmin uses a centralized asset management approach:

- Assets are hosted in a separate GitHub repository: `DanBilly13/sw-admin-assets`
- Dynamic path resolution with `getAssetPath()` utility
- Supports multiple asset types: avatars, team badges, thumbnails
- Flexible URL generation for different environments

### Asset Path Example

```typescript
// Dynamically generate asset URLs
const avatarUrl = getAssetPath('avatars/TheRock.jpg');
const teamBadgeUrl = getAssetPath('team-badges/svff.jpg');
```

## Deployment

The project uses GitHub Actions for continuous deployment:
- Automatic deployment to GitHub Pages on push to `main` branch
- Build process configured in `.github/workflows/deploy.yml`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Daniel Billingham - [Your Email or LinkedIn]

Project Link: [https://github.com/DanBilly13/SwAdmin](https://github.com/DanBilly13/SwAdmin)
