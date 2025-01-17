# SwAdmin Git Commit History

## Overview
This document tracks the Git commit history of the SwAdmin project, providing insights into the project's evolution and development decisions.

## Recent Changes (January 2025)

### January 13, 2025
- `commit-hash` - fix: update error styling in form components
  - Fix InlineInput error border color
  - Standardize error message typography between Dropdown and InlineInput
  - Update DataInput page examples

### December 19, 2024
- `2ad3eb7` - feat: initial color palette implementation
  - Update atomic components with new color system
  - Add theme directory with color palettes
  - Update tailwind config with new colors
  - Created feature branch `feature/color-palette-implementation` for systematic color system updates

### December 18, 2024
- `54f1b65` - refactor: code formatting and structural improvements
  - Format AccordionHybrid component for better readability
  - Update Lagroller table headers and styling
  - Restore git-history.md to correct date format
  - Clean up code structure and spacing
- `825c07a` - refactor: update Users page to use ContentContainerSlots and add user management actions
  - Replace ContentContainer with ContentContainerSlots
  - Add user management actions to MainContentHead
  - Add showSpacer to FilterAndSearch
  - Maintain existing functionality and responsive design
- `4e21a44` - refactor: update table components and page implementations
  - Update TableCell component and related types
  - Improve CellContent and ContentText components
  - Update table implementations across user pages
  - Enhance table structure in design system
- `3518deb` - feat: show accordion preview content when collapsed
  - Modified AccordionHybrid to always show content
  - Updated DivisionsAccordion and TeamStaffAccordion to show first 2 items
  - Added showPreview prop to accordion components
  - Improved UX by showing preview of content before expansion
- `commit-hash` - fix: restore second reporter NotificationsCard display
  - Fixed issue with second reporter card not being displayed
  - Updated CellContent to properly handle multiple reporter cards
  - Maintained existing functionality while adding support for second reporter
  - Added vertical stacking with proper spacing between cards

### December 16, 2024
- `commit-hash` - fix: maintain consistent icon type (string) in TableCell and CellContent components
  - Fixed type inconsistency between TableCell and CellContent components
  - Ensured icon property remains as string type throughout the component hierarchy
  - Resolved type errors in InlaggOchKommentarer component by maintaining consistent typing

### December 12, 2024
- `cb0f35d` - docs: add surface-secondary color to design system
- `7dd3db4` - feat: add color-surface-secondary to color palette
- `ea0b18f` - fix: thumbnail type error and display for all post types

### December 11, 2024
- `538d5a2` - chore: update video thumbnail to use Goal.png
- `b93dc25` - refactor: update thumbnail types and post type handling
- `0e63290` - refactor: update InlaggOchKommentarer page with new table structure and add uploads data
- `205a6e4` - fix: update responsive alignment to use correct Tailwind breakpoint pattern
- `3c60b5d` - feat: add responsive alignment support to TableCell component

### December 10, 2024
- `194055d` - Update InskickadeRapporter filters, table headers, and minor UI adjustments
- `18809a5` - refactor: simplify TableCell padding logic and remove unused isFirst prop
- `0b576f9` - Add variant='header' to Users table headers for consistent styling
- `f8bd15a` - Update InskickadeRapporter responsive layout and header handling

### December 9, 2024
- `d7a0386` - Fix TypeScript type compatibility for TableRowData and chip variants
- `12aa5b8` - Enhance NotificationsCard rendering in CellContent with full width and error border

### December 4, 2024
- `e3bda71` - Refactor: Update TableCellData to use optional title and move text to description
- `17181b6` - Remove non-existent template imports from Templates.tsx
- `845c6aa` - Add comprehensive error logging to GitHub Actions workflow
- `e1de79d` - Update GitHub Actions workflow to use docs directory
- `461bc93` - Add verbose logging to GitHub Actions workflow
- `6478222` - Update GitHub Actions workflow to use dist directory and add workflow documentation
- `9d3743c` - Add design system page template and standardize page layouts
- `a28ae6d` - Fix CodeBlock margin and remove prism-override.css

### December 3, 2024
- `c84c5f4` - Update SwAdmin project
- `2b4ef79` - Fix MenuType export ambiguity in atoms index
- `95ac55d` - Add syntax highlighting to CodeBlock component using Prism.js
- `b8defd5` - Update README with comprehensive project details and asset management information
- `e8e73ab` - Refactor asset path management using getAssetPath utility across components
- `218bf5b` - Trigger GitHub Pages deployment with latest changes
- `6cf3146` - Update DesignSystemNav: Alphabetize atoms and fix navigation links

### December 2, 2024
- `4276500` - Update GitHub Actions workflow with more detailed build steps
- `484f078` - Add GitHub Pages deployment workflow
- `288dfff` - Update image API base URL to GitHub Pages
- `6f8062d` - Initial commit of SwAdmin project

## Project Setup and Early Development (November 2024)

### November 30, 2024
- `fa06a5b` - fix: improve table cell padding and responsiveness

### November 29, 2024
- `5caac5f` - feat: implement global menu context and refine table styles
- `ab1ae48` - fix: Update Chip props in Tables component to use children instead of label

### November 28, 2024
- `48933ec` - feat: update table grid to 16 columns and improve responsive layout
- `70c8480` - chore: update build output to docs directory for GitHub Pages
- `9f7e85d` - fix: update vite config and rebuild for GitHub Pages
- `0b4ec12` - chore: build for deployment
- `1fce10c` - refactor(Badge): enhance icon styling
- `ac60f0d` - refactor: standardize size naming convention to xsm/sm/md/lg for Avatar and Thumbnail components

### November 27, 2024
- `2066900` - feat(Modal): add description support and enhance styling
- `d482daf` - feat: Major design system updates

### November 26, 2024
- Initial project setup and configuration
- Multiple commits focusing on fixing asset paths and deployment setup
- `a32439f` - Initial commit: SwAdmin React TypeScript project

## Key Development Themes
1. **Design System Evolution**
   - Standardization of component sizes and styles
   - Implementation of responsive layouts
   - Enhancement of table components and cell handling

2. **GitHub Actions & Deployment**
   - Setup and refinement of GitHub Pages deployment
   - Comprehensive error logging implementation
   - Asset path management improvements

3. **Component Refactoring**
   - Table structure improvements
   - TypeScript type refinements
   - Navigation and menu system enhancements

4. **Asset Management**
   - Fixed image paths for development and production
   - Implemented consistent asset path handling
   - Updated thumbnail and media handling

## Latest Updates
The most recent changes focus on:
- Video thumbnail updates
- Table structure refinements
- Responsive layout improvements
- TypeScript type compatibility fixes
- Thumbnail type error fixes
- Icon type consistency in TableCell and CellContent components
- Accordion preview content display when collapsed
- Second reporter NotificationsCard display restoration
- Initial color palette implementation
- Error styling updates in form components
