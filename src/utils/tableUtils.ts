interface ColumnSpan {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

interface ResponsivePosition {
  sm: boolean;
  md: boolean;
  lg: boolean;
}

interface Column {
  span: ColumnSpan;
}

export const getColumnSpanClasses = (span: ColumnSpan): string => {
  const classes: { [key: string]: boolean } = {
    // Extra small screens (mobile)
    "col-span-0": span.xs === 0,
    "col-span-1": span.xs === 1,
    "col-span-2": span.xs === 2,
    "col-span-3": span.xs === 3,
    "col-span-4": span.xs === 4,
    "col-span-5": span.xs === 5,
    "col-span-6": span.xs === 6,
    "col-span-7": span.xs === 7,
    "col-span-8": span.xs === 8,
    "col-span-9": span.xs === 9,
    "col-span-10": span.xs === 10,
    "col-span-11": span.xs === 11,
    "col-span-12": span.xs === 12,
    "col-span-13": span.xs === 13,
    "col-span-14": span.xs === 14,
    "col-span-15": span.xs === 15,
    "col-span-16": span.xs === 16,

    // Small screens
    "sm:col-span-0": span.sm === 0,
    "sm:col-span-1": span.sm === 1,
    "sm:col-span-2": span.sm === 2,
    "sm:col-span-3": span.sm === 3,
    "sm:col-span-4": span.sm === 4,
    "sm:col-span-5": span.sm === 5,
    "sm:col-span-6": span.sm === 6,
    "sm:col-span-7": span.sm === 7,
    "sm:col-span-8": span.sm === 8,
    "sm:col-span-9": span.sm === 9,
    "sm:col-span-10": span.sm === 10,
    "sm:col-span-11": span.sm === 11,
    "sm:col-span-12": span.sm === 12,
    "sm:col-span-13": span.sm === 13,
    "sm:col-span-14": span.sm === 14,
    "sm:col-span-15": span.sm === 15,
    "sm:col-span-16": span.sm === 16,

    // Medium screens
    "md:col-span-0": span.md === 0,
    "md:col-span-1": span.md === 1,
    "md:col-span-2": span.md === 2,
    "md:col-span-3": span.md === 3,
    "md:col-span-4": span.md === 4,
    "md:col-span-5": span.md === 5,
    "md:col-span-6": span.md === 6,
    "md:col-span-7": span.md === 7,
    "md:col-span-8": span.md === 8,
    "md:col-span-9": span.md === 9,
    "md:col-span-10": span.md === 10,
    "md:col-span-11": span.md === 11,
    "md:col-span-12": span.md === 12,
    "md:col-span-13": span.md === 13,
    "md:col-span-14": span.md === 14,
    "md:col-span-15": span.md === 15,
    "md:col-span-16": span.md === 16,

    // Large screens
    "lg:col-span-0": span.lg === 0,
    "lg:col-span-1": span.lg === 1,
    "lg:col-span-2": span.lg === 2,
    "lg:col-span-3": span.lg === 3,
    "lg:col-span-4": span.lg === 4,
    "lg:col-span-5": span.lg === 5,
    "lg:col-span-6": span.lg === 6,
    "lg:col-span-7": span.lg === 7,
    "lg:col-span-8": span.lg === 8,
    "lg:col-span-9": span.lg === 9,
    "lg:col-span-10": span.lg === 10,
    "lg:col-span-11": span.lg === 11,
    "lg:col-span-12": span.lg === 12,
    "lg:col-span-13": span.lg === 13,
    "lg:col-span-14": span.lg === 14,
    "lg:col-span-15": span.lg === 15,
    "lg:col-span-16": span.lg === 16,
  };

  return Object.entries(classes)
    .filter(([_, value]) => value)
    .map(([className]) => className)
    .join(" ");
};

export const isFirstInRow = (
  cellIndex: number,
  columns: Column[],
  totalCells: number
): ResponsivePosition => {
  let currentColXs = 0;
  let currentColSm = 0;
  let currentColMd = 0;
  let currentColLg = 0;

  // Calculate if this cell starts a new row at each breakpoint
  for (let i = 0; i <= cellIndex; i++) {
    const col = columns[i];
    currentColXs += col.span.xs || 0;
    currentColSm += col.span.sm || 0;
    currentColMd += col.span.md || 0;
    currentColLg += col.span.lg || 0;
  }

  return {
    sm: (currentColSm - (columns[cellIndex].span.sm || 0)) === 0,
    md: (currentColMd - (columns[cellIndex].span.md || 0)) === 0,
    lg: (currentColLg - (columns[cellIndex].span.lg || 0)) === 0
  };
};

export const isLastInRow = (
  cellIndex: number,
  columns: Column[],
  totalCells: number
): ResponsivePosition => {
  let currentColXs = 0;
  let currentColSm = 0;
  let currentColMd = 0;
  let currentColLg = 0;

  // Calculate if this cell ends a row at each breakpoint
  for (let i = 0; i <= cellIndex; i++) {
    const col = columns[i];
    currentColXs += col.span.xs || 0;
    currentColSm += col.span.sm || 0;
    currentColMd += col.span.md || 0;
    currentColLg += col.span.lg || 0;
  }

  return {
    sm: currentColSm === 16 || cellIndex === totalCells - 1,
    md: currentColMd === 16 || cellIndex === totalCells - 1,
    lg: currentColLg === 16 || cellIndex === totalCells - 1
  };
};
