import React from 'react';
import { GridCards, Card } from '../components/templates';
import { Button } from '../components/atoms';
import { Link } from 'react-router-dom';
import { ContentContainer } from '../components/atoms/ContentContainer/ContentContainer';
import { MainContentHead } from '../components/molecules/MainContentHead/MainContentHead';
import { PageTitle } from '../components/atoms/PageTitle/PageTitle';

const Home = () => {
  return (
    <div className="min-h-screen bg-bg">
      <ContentContainer>
        <MainContentHead
          breadcrumbs={[
            { label: "Home", href: "/" },
          ]}
        >
          <PageTitle 
            title="SwAdmin Design System" 
            description="A comprehensive design system for building modern web applications."
          />
        </MainContentHead>

        <GridCards>
          <Card 
            title="Design System" 
            className="bg-primary/5 border-primary/20"
            to="/molecules"
          >
            <div className="space-y-4">
              <p>Explore our comprehensive design system including components, templates, and style guides.</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  as={Link}
                  to="/molecules"
                  variant="secondary"
                  leadingIcon="radio_button_checked"
                >
                  Molecules
                </Button>
                <Button
                  as={Link}
                  to="/data-input"
                  variant="secondary"
                  leadingIcon="input"
                >
                  Data Input
                </Button>
                <Button
                  as={Link}
                  to="/data-display"
                  variant="secondary"
                  leadingIcon="data_object"
                >
                  Data Display
                </Button>
              </div>
            </div>
          </Card>

          <Card 
            title="Style Guide"
            className="bg-secondary/5 border-secondary/20"
            to="/typography"
          >
            <div className="space-y-4">
              <p>Learn about our design principles, color system, typography, and spacing guidelines.</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  as={Link}
                  to="/typography"
                  variant="secondary"
                  leadingIcon="text_fields"
                >
                  Typography
                </Button>
                <Button
                  as={Link}
                  to="/colors"
                  variant="secondary"
                  leadingIcon="palette"
                >
                  Colors
                </Button>
                <Button
                  as={Link}
                  to="/spacers"
                  variant="secondary"
                  leadingIcon="space_bar"
                >
                  Spacers
                </Button>
              </div>
            </div>
          </Card>
        </GridCards>
      </ContentContainer>
    </div>
  );
};

export default Home;
