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
