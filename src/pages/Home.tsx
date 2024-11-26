import React from 'react';
import { GridCards, Card } from '../components/templates';
import { Button } from '../components/atoms';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-bg">
      <div className="p-6">
        <h1 className="text-headline-l text-content-primary mb-8">SwAdmin Dashboard</h1>
      </div>

      <GridCards>
        <Card 
          title="Design System" 
          className="bg-primary/5 border-primary/20"
          to="/components"
        >
          <div className="space-y-4">
            <p>Explore our comprehensive design system including components, templates, and style guides.</p>
            <div className="flex flex-wrap gap-2">
              <Button
                as={Link}
                to="/components"
                variant="secondary"
                leadingIcon="widgets"
              >
                Components
              </Button>
              <Button
                as={Link}
                to="/molecules"
                variant="secondary"
                leadingIcon="science"
              >
                Molecules
              </Button>
              <Button
                as={Link}
                to="/templates"
                variant="secondary"
                leadingIcon="dashboard_customize"
              >
                Templates
              </Button>
            </div>
          </div>
        </Card>

        <Card 
          title="Two"
          to="/two"
        >
          <p>Second card content</p>
        </Card>

        <Card 
          title="Three"
          to="/three"
        >
          <p>Third card content</p>
        </Card>

        <Card 
          title="Four"
          to="/four"
        >
          <p>Fourth card content</p>
        </Card>

        <Card 
          title="Five"
          to="/five"
        >
          <p>Fifth card content</p>
        </Card>

        <Card 
          title="Six"
          to="/six"
        >
          <p>Sixth card content</p>
        </Card>
      </GridCards>
    </div>
  );
};

export default Home;
