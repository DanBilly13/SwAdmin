# Design System Page Template

## Overview
This template provides a standardized structure for creating new design system documentation pages in the SwAdmin project.

## Usage

### Creating a New Design System Page

1. Copy the `DesignSystemPageTemplate.tsx` file
2. Rename it to match your component (e.g., `YourComponent.tsx`)
3. Replace the following placeholders:
   - Page title
   - Breadcrumb paths
   - GitHub source link
   - Component description
   - Example sections

### Template Structure

The template includes:
- Mobile-friendly layout with drawer toggle
- Consistent breadcrumb navigation
- "View Source" action button
- Structured content with `SectionCard` components
- Sections for:
  - Basic Example
  - Variants
  - Advanced Usage

### Best Practices

- Keep descriptions concise and informative
- Showcase different variants and use cases
- Provide clear, readable examples
- Maintain consistent styling with existing design system pages

## Example Customization

```tsx
// Replace generic content with your specific component details
<PageTitle
  title="Your Component Name"
  description="Specific description of your component's purpose and functionality."
/>
```

## Contribution

When adding a new design system page:
1. Follow the template structure
2. Ensure consistency with existing pages
3. Provide comprehensive component documentation
