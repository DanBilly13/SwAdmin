type ClassValue = string | number | boolean | undefined | null | { [key: string]: boolean };

export function classNames(...classes: ClassValue[]): string {
  return classes
    .filter(Boolean)
    .map((cls) => {
      if (typeof cls === 'object') {
        return Object.entries(cls)
          .filter(([_, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ');
      }
      return String(cls);
    })
    .join(' ');
}
