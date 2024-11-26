import React from 'react';

const TypographyExample = ({ className, name, specs }: { className: string; name: string; specs: string }) => (
  <div className="mb-8">
    <div className="flex items-baseline gap-4 mb-2">
      <span className={className}>The quick brown fox</span>
      <span className="text-label-m text-content-secondary">{name}</span>
    </div>
    <span className="text-body-s text-content-secondary">{specs}</span>
  </div>
);

const Typography = () => {
  return (
    <div>
      <h1 className="text-headline-l mb-8">Typography</h1>

      <section className="mb-12">
        <h2 className="text-headline-s mb-6">Display</h2>
        <TypographyExample
          className="text-display-l"
          name="Display L"
          specs="80/80, -0.5px"
        />
        <TypographyExample
          className="text-display-m"
          name="Display M"
          specs="64/64, -0.25px"
        />
        <TypographyExample
          className="text-display-s"
          name="Display S"
          specs="44/44, -0.25px"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-headline-s mb-6">Headlines</h2>
        <TypographyExample
          className="text-headline-l"
          name="Headline L"
          specs="36/40, 0px, Semibold"
        />
        <TypographyExample
          className="text-headline-m"
          name="Headline M"
          specs="30/36, 0px, Semibold"
        />
        <TypographyExample
          className="text-headline-s"
          name="Headline S"
          specs="24/32, 0px, Semibold"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-headline-s mb-6">Titles</h2>
        <TypographyExample
          className="text-title-l"
          name="Title L"
          specs="20/24, 0px, Medium"
        />
        <TypographyExample
          className="text-title-m"
          name="Title M"
          specs="16/24, +0.15px, Semibold"
        />
        <TypographyExample
          className="text-title-s"
          name="Title S"
          specs="14/20, +0.10px, Semibold"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-headline-s mb-6">Labels</h2>
        <TypographyExample
          className="text-label-l"
          name="Label L"
          specs="16/20, 0px, Medium"
        />
        <TypographyExample
          className="text-label-m"
          name="Label M"
          specs="14/16, 0px, Medium"
        />
        <TypographyExample
          className="text-label-s"
          name="Label S"
          specs="12/16, +0.25px, Semibold"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-headline-s mb-6">Body</h2>
        <TypographyExample
          className="text-body-l"
          name="Body L"
          specs="16/24, Regular"
        />
        <TypographyExample
          className="text-body-m"
          name="Body M"
          specs="16/22, Regular"
        />
        <TypographyExample
          className="text-body-s"
          name="Body S"
          specs="14/20, Regular"
        />
      </section>
    </div>
  );
};

export default Typography;
