# Git History

## December 12, 2023

### ea0b18f - fix: thumbnail type error and display for all post types
- Fixed TypeScript type error with thumbnail.src property
- Ensured thumbnails display correctly for all post types (comment, video, matchEvent, image)
- Added proper handling of video indicator for video posts

## December 16, 2023

### 522130f - feat: implement full-width accordion in table cells with improved layout
- Added full-width support for accordion components in table cells
- Updated table cell layout and styling for better accordion integration
- Improved responsive column spans in Lagroller table
- Added support for multiple accordions per row

## December 16, 2023

### a3aab52 - feat: implement synchronized accordions on larger screens
- Added isOpen prop to TableCell and Accordion components
- Implemented screen-size-dependent accordion behavior
- Synchronized accordion states on md+ screens
- Maintained independent accordion states on smaller screens

## December 19, 2023

###  - fix: border color configuration
- Fixed border color configuration in Tailwind
  - Moved `borderColor` configuration to correct level in `theme.extend`
  - Removed redundant `border-border-*` configuration
  - Updated all component border color classes to use simpler `border-*` pattern
  - Added documentation comments in tailwind.config.js

## December 20, 2023

###  - refactor: design system consistency updates
- Updated Card component to use `border-secondary` for consistent border styling
- Changed TableHead background to use correct surface token `bg-surface-secondary`
- Standardized placeholder text colors across form components to use `fill-tertiary`

## December 20, 2023

###  - feat: enhance SectionCard and color documentation
- Added description prop to SectionCard component
- Enhanced color system documentation with detailed descriptions:
  - Surface colors: Component backgrounds and elevated elements
  - Fill colors: Interactive element backgrounds
  - Border colors: Component outlines and separators
  - On colors: Content on filled components
- Added questions and notes about content color usage

## December 20, 2023

###  - feat: enhance design system components and documentation
- Added description prop to SectionCard component
- Enhanced color system documentation with detailed descriptions
- Fixed Input component size prop type conflict
- Updated StructuredContent to use correct title props (titleSmall/titleLarge)
- Resolved branch conflicts by creating clean main from working state

###  - chore: git branch restructuring
- Created clean main branch from stable color-palette implementation
- Preserved old main as main-backup
- Streamlined deployment process for GitHub Pages

## January 7, 2024

### - fix: update overlay opacity and color tokens
- Fixed overlay opacity in GridWithNav using Tailwind's modern opacity syntax (`bg-black/50`)
- Updated color tokens in GridWithNav for better consistency
- Changed surface background color to use primary token

### - chore: cleanup configuration files
- Removed old Tailwind config backup files
- Streamlined configuration to single source of truth
- Maintained clean main branch structure

## January 9, 2025

### - refactor: update Colors page layout and styling
- Updated color block heights for more compact display
- Changed grid layout from 6 to 4 columns for better readability
- Temporarily commented out Brand Colors section
- Fixed background color classes to use correct Tailwind tokens
- Updated hex code display styling
- Adjusted color mappings for background colors to use neutral palette

## January 13, 2025

### - Working on Dropdown component and related UI components
- Improvements to InlineInput component
- Updates to design system and template components

## January 13, 2025

### 2025-01-13 15:01:58 +0100

- Updated Radio component styling to match success badge
- Fixed icon weight and color in Radio component using fontVariationSettings
- Aligned Radio component visual design with design system
