# SwAdmin Design System

## Overview
This document provides a comprehensive guide to our design system, ensuring consistency and efficiency in component development.

## Color System

### Color Palette

Our color system is meticulously designed to provide consistency, accessibility, and visual hierarchy across the application. The color tokens are categorized into several semantic groups:

#### 1. Gray Scale
- `gray-950`: #222222 - Darkest gray, primary text color
- `gray-650`: #767676 - Medium gray, secondary text
- `gray-450`: #AFAFAF - Light gray, tertiary text
- `gray-200`: #E2E2E2 - Very light gray, disabled states
- `gray-white`: #FFFFFF - Pure white, background and highlights

#### 2. Content Colors
Semantic colors for text and content elements:

- **Primary Content**
  - `color-content`: #222222 - Main text color
  - `color-content-secondary`: #767676 - Secondary text
  - `color-content-tertiary`: #AFAFAF - Tertiary text

- **State Colors**
  - `color-content-disabled`: #E2E2E2 - Disabled text
  - `color-content-error`: #FF0000 - Error text
  - `color-content-success`: #4BB543 - Success text
  - `color-content-caution`: #FF9500 - Warning text
  - `color-content-info`: #222222 - Informational text

#### 3. Surface Colors
Background colors for different states and components:

- `color-surface`: #FFFFFF - Default surface
- `color-surface-error`: #F9DEDC - Error surface
- `color-surface-success`: #C0EECC - Success surface
- `color-surface-caution`: #FFE7C6 - Caution surface
- `color-surface-info`: #F5F5F5 - Informational surface

#### 4. Fill Colors
Colors for interactive elements and fills:

- `color-fill-primary`: #222222 - Primary fill
- `color-on-fill`: #FFFFFF - Text on fill

#### 5. Border Colors
Colors for borders and dividers:

- `color-border`: #E2E2E2 - Default border
- `border-caution`: #FFE7C6 - Caution border
- `border-error`: #F9DEDC - Error border
- `border-success`: #C0EECC - Success border

#### 6. Background Colors
- `color-bg`: #F5F5F5 - Global background

### Color Usage Guidelines

#### Principles
1. **Consistency**: Always use predefined color tokens
2. **Accessibility**: Ensure sufficient color contrast
3. **Semantic Meaning**: Use colors to communicate state and hierarchy

#### Best Practices
```typescript
// Correct: Use semantic tokens
className="text-content-secondary bg-surface-success"

// Avoid: Direct color values
className="text-[#767676] bg-[#C0EECC]"
```

#### Accessibility Considerations
- Maintain WCAG 2.1 color contrast ratios
- Test color combinations for readability
- Consider color-blind users in your design

### Color Application

#### Text Colors
- Primary text: `text-content`
- Secondary text: `text-content-secondary`
- Disabled text: `text-content-disabled`

#### Backgrounds
- Default background: `bg-surface`
- Error states: `bg-surface-error`
- Success states: `bg-surface-success`

#### Interactive States
- Hover: Slightly darker shade of primary color
- Active: More saturated version of the base color
- Disabled: Use `color-content-disabled`

### Customization and Extensibility

While these color tokens provide a comprehensive base, the design system allows for:
- Easy theme switching
- Dark/light mode support
- Custom color palette extensions

## Typography System

### Type Scale Overview
Our typography system is designed to create clear visual hierarchies, improve readability, and maintain consistency across the application.

### Typography Tokens

#### 1. Display Styles
Largest and most impactful text styles, typically used for marketing or hero sections:

- `text-display-l`: 
  - Size: 80px
  - Line Height: 80px
  - Letter Spacing: -0.5px
  - Use: Significant headlines, hero text

- `text-display-m`:
  - Size: 64px
  - Line Height: 64px
  - Letter Spacing: -0.25px
  - Use: Major section headers

- `text-display-s`:
  - Size: 44px
  - Line Height: 44px
  - Letter Spacing: -0.25px
  - Use: Subsection headers

#### 2. Headline Styles
Used for primary section and page titles:

- `text-headline-l`:
  - Size: 36px
  - Line Height: 40px
  - Weight: Semibold
  - Use: Main page titles

- `text-headline-m`:
  - Size: 30px
  - Line Height: 36px
  - Weight: Semibold
  - Use: Section titles

- `text-headline-s`:
  - Size: 24px
  - Line Height: 32px
  - Weight: Semibold
  - Use: Subsection titles

#### 3. Title Styles
For component and card titles:

- `text-title-l`:
  - Size: 20px
  - Line Height: 24px
  - Weight: Medium
  - Use: Card and component main titles

- `text-title-m`:
  - Size: 16px
  - Line Height: 24px
  - Letter Spacing: +0.15px
  - Weight: Semibold
  - Use: Smaller component titles

- `text-title-s`:
  - Size: 14px
  - Line Height: 20px
  - Letter Spacing: +0.10px
  - Weight: Semibold
  - Use: Subtle or secondary titles

#### 4. Label Styles
For form elements, buttons, and small annotations:

- `text-label-l`:
  - Size: 16px
  - Line Height: 20px
  - Weight: Medium
  - Use: Primary form labels, button text

- `text-label-m`:
  - Size: 14px
  - Line Height: 16px
  - Weight: Medium
  - Use: Secondary form labels

- `text-label-s`:
  - Size: 12px
  - Line Height: 16px
  - Letter Spacing: +0.25px
  - Weight: Semibold
  - Use: Tertiary labels, metadata

#### 5. Body Styles
For main content text:

- `text-body-l`:
  - Size: 16px
  - Line Height: 24px
  - Weight: Regular
  - Use: Long-form content, paragraphs

- `text-body-m`:
  - Size: 16px
  - Line Height: 22px
  - Weight: Regular
  - Use: Standard body text

- `text-body-s`:
  - Size: 14px
  - Line Height: 20px
  - Weight: Regular
  - Use: Smaller content areas, captions

### Typography Usage Guidelines

#### Principles
1. **Hierarchy**: Use type styles to create clear visual hierarchy
2. **Readability**: Prioritize legibility and comfortable reading
3. **Consistency**: Stick to predefined type tokens

#### Best Practices
```typescript
// Correct: Use semantic type tokens
<h1 className="text-headline-l">Main Title</h1>
<p className="text-body-m">Body content</p>

// Avoid: Direct styling
<h1 style={{ fontSize: '36px', fontWeight: 600 }}>Main Title</h1>
```

#### Accessibility Considerations
- Maintain sufficient color contrast
- Use appropriate line heights
- Ensure text is selectable and screen-reader friendly

### Responsive Typography
- Type sizes may adjust slightly on smaller screens
- Maintain relative proportions
- Prioritize readability across devices

### Customization
- Base font: System default or custom font
- Supports easy theme and font variations
- Extendable type scale

### Font Weights
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Performance Optimization
- Use system fonts or subset custom fonts
- Implement font-display: swap
- Minimize font variations

## Atoms (Basic Components)

### Available Atoms
1. **Interactive Components**
   - Button
   - Input
   - Radio
   - Dropdown
   - SearchBar

2. **Display Components**
   - Avatar
   - Badge
   - Card
   - Chip
   - Icon
   - Thumbnail

3. **Layout Components**
   - Spacer
   - ContentContainer
   - Modal

4. **Navigation**
   - Breadcrumb
   - NavButton
   - IconButton

5. **Data Display**
   - TableCell
   - TableHead

## Molecules (Composite Components)

### Available Molecules
1. **Navigation**
   - AnvandareNav
   - DesignSystemNav

2. **Content Presentation**
   - MainContentHead
   - PageHeader
   - NotificationsCard
   - LinkCard

3. **User-related**
   - UserProfile
   - TeamProfile

4. **Data Management**
   - FilterAndSearch
   - GridTableRow
   - TableRow

## Best Practices

### Component Development
- Always use predefined design tokens
- Follow atomic design principles
- Ensure responsive and accessible design
- Maintain consistent naming conventions

### Token Usage
```typescript
// Good: Use predefined tokens
className="text-content-secondary bg-gray-450"

// Avoid: Direct color specifications
className="text-[#767676]"
```

## Contribution Guidelines
1. Propose new components through design review
2. Use existing tokens and components
3. Document any new design patterns
4. Maintain consistency with existing design language

## Tools & Resources
- Figma Design System Library
- Storybook Component Documentation
- Design Token Management

## Contact
For design system questions or improvements, contact the design team.
