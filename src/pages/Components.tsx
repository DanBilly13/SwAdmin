import React, { useState } from 'react';
import {
  Button,
  Input,
  InlineInput,
  Avatar,
  Badge,
  Chip,
  Thumbnail,
  HorizontalSpacer,
  VerticalSpacer,
  Modal
} from '../components/atoms';

export const Components = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errorValue, setErrorValue] = useState('');
  const [inlineValue, setInlineValue] = useState('');

  return (
    <div className="space-y-12">
      {/* Input Section */}
      <div>
        <h2 className="text-headline-m mb-8">Inputs</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-headline-s mb-6">Standard Input</h3>
            <div className="space-y-4 max-w-md">
              <Input
                label="Default Input"
                placeholder="Enter some text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label="Error Input"
                placeholder="Enter some text"
                value={errorValue}
                onChange={(e) => setErrorValue(e.target.value)}
                error="This field is required"
              />
              <Input
                label="Disabled Input"
                placeholder="Enter some text"
                disabled
              />
            </div>
          </div>

          <div>
            <h3 className="text-headline-s mb-6">Inline Input</h3>
            <div className="space-y-4 max-w-md">
              <InlineInput
                value={inlineValue}
                onChange={(e) => setInlineValue(e.target.value)}
                placeholder="Enter text inline"
              />
              <InlineInput
                value={inlineValue}
                onChange={(e) => setInlineValue(e.target.value)}
                placeholder="Search..."
                leadingIcon="search"
                onLeadingIconClick={() => console.log('Search clicked')}
              />
              <InlineInput
                value={inlineValue}
                onChange={(e) => setInlineValue(e.target.value)}
                placeholder="Enter text..."
                trailingIcon="close"
                onTrailingIconClick={() => setInlineValue('')}
              />
            </div>
          </div>

          <div>
            <h3 className="text-headline-s mb-6">Inline Input Variations</h3>
            <div className="space-y-4 max-w-md">
              <InlineInput
                label="Search"
                value={inlineValue}
                onChange={(e) => setInlineValue(e.target.value)}
                placeholder="Search..."
                leadingIcon="search"
                onLeadingIconClick={() => console.log('Search clicked')}
              />
              <InlineInput
                label="Clear"
                value={inlineValue}
                onChange={(e) => setInlineValue(e.target.value)}
                placeholder="Type something..."
                trailingIcon="close"
                onTrailingIconClick={() => setInlineValue('')}
              />
              <InlineInput
                label="Password"
                type="password"
                value={inlineValue}
                onChange={(e) => setInlineValue(e.target.value)}
                placeholder="Enter password"
                leadingIcon="lock"
                trailingIcon="visibility"
                onTrailingIconClick={() => console.log('Toggle password')}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div>
        <h2 className="text-headline-m mb-8">Buttons</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-headline-s mb-6">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
            </div>
          </div>

          <div>
            <h3 className="text-headline-s mb-6">Sizes</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </div>
          </div>

          <div>
            <h3 className="text-headline-s mb-6">States</h3>
            <div className="flex flex-wrap gap-4">
              <Button disabled>Disabled</Button>
              <Button>Default</Button>
            </div>
          </div>

          <div>
            <h3 className="text-headline-s mb-6">With Icons</h3>
            <div className="flex flex-wrap gap-4">
              <Button leadingIcon="add">Add New</Button>
              <Button leadingIcon="search" variant="secondary">Search</Button>
              <Button leadingIcon="delete" variant="tertiary">Delete</Button>
              <Button leadingIcon="edit" size="small">Edit</Button>
              <Button leadingIcon="download" size="large">Download</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Avatar Section */}
      <div>
        <h2 className="text-headline-m mb-8">Avatars</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-headline-s mb-6">Sizes</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Avatar size="small" src="https://i.pravatar.cc/300" />
              <Avatar size="medium" src="https://i.pravatar.cc/300" />
              <Avatar size="large" src="https://i.pravatar.cc/300" />
            </div>
          </div>

          <div>
            <h3 className="text-headline-s mb-6">Fallbacks</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Avatar size="medium" name="John Doe" />
              <Avatar size="medium" />
            </div>
          </div>
        </div>
      </div>

      {/* Badge Section */}
      <div>
        <h2 className="text-headline-m mb-8">Badges</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-headline-s mb-6">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Badge variant="success" />
              <Badge variant="error" />
              <Badge variant="edit" />
            </div>
          </div>
        </div>
      </div>

      {/* Chip Section */}
      <div>
        <h2 className="text-headline-m mb-8">Chips</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-headline-s mb-6">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Chip variant="primary">Primary</Chip>
              <Chip variant="success">Success</Chip>
              <Chip variant="warning">Warning</Chip>
              <Chip variant="error">Error</Chip>
              <Chip variant="info">Info</Chip>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Section */}
      <div>
        <h2 className="text-headline-m mb-8">Thumbnails</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-headline-s mb-6">Sizes</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Thumbnail type="teamBadge" size="large" src="/images/team-badges/svff.jpg" alt="SVFF" />
              <Thumbnail type="teamBadge" size="medium" src="/images/team-badges/DIF.png" alt="DIF" />
              <Thumbnail type="teamBadge" size="small" src="/images/team-badges/IFK-Stockholm.png" alt="IFK Stockholm" />
              <Thumbnail type="teamBadge" size="tiny" src="/images/team-badges/Gif.png" alt="GIF" />
            </div>
          </div>

          <div>
            <h3 className="text-headline-s mb-6">Team Badge Examples</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Thumbnail type="teamBadge" size="medium" src="/images/team-badges/Bromma.jpg" alt="Bromma" />
              <Thumbnail type="teamBadge" size="medium" src="/images/team-badges/Flemingsberg.png" alt="Flemingsberg" />
              <Thumbnail type="teamBadge" size="medium" src="/images/team-badges/HammenhogsIF.jpg" alt="Hammenhogs IF" />
              <Thumbnail type="teamBadge" size="medium" src="/images/team-badges/skellefteaFF.png" alt="Skelleftea FF" />
              <Thumbnail type="teamBadge" size="medium" src="/images/team-badges/IFK_Umea.png" alt="IFK Umea" />
              <Thumbnail type="teamBadge" size="medium" src="/images/team-badges/YstadsIFFF.jpg" alt="Ystads IFFF" />
            </div>
          </div>

          <div>
            <h3 className="text-headline-s mb-6">Regular Image Examples</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Thumbnail type="image" size="medium" src="https://picsum.photos/200" alt="Random Image 1" />
              <Thumbnail type="image" size="medium" src="https://picsum.photos/201" alt="Random Image 2" />
              <Thumbnail type="image" size="medium" src="/images/avatars/TheRock.jpg" alt="The Rock" />
            </div>
          </div>
        </div>
      </div>

      {/* Spacers Section */}
      <div>
        <h2 className="text-headline-m mb-8">Spacers</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-headline-s mb-6">Horizontal Spacers</h3>
            <div className="space-y-4 bg-surface/20 w-full p-4 rounded-lg">
              <div className="flex items-center">
                <div className="w-16 text-sm text-content-secondary">xs (4px)</div>
                <HorizontalSpacer size="xs" className="bg-primary/20" />
              </div>
              <div className="flex items-center">
                <div className="w-16 text-sm text-content-secondary">sm (8px)</div>
                <HorizontalSpacer size="sm" className="bg-primary/20" />
              </div>
              <div className="flex items-center">
                <div className="w-16 text-sm text-content-secondary">md (16px)</div>
                <HorizontalSpacer size="md" className="bg-primary/20" />
              </div>
              <div className="flex items-center">
                <div className="w-16 text-sm text-content-secondary">lg (24px)</div>
                <HorizontalSpacer size="lg" className="bg-primary/20" />
              </div>
              <div className="flex items-center">
                <div className="w-16 text-sm text-content-secondary">xl (32px)</div>
                <HorizontalSpacer size="xl" className="bg-primary/20" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-headline-s mb-6">Vertical Spacers</h3>
            <div className="inline-flex flex-col bg-surface/20 p-4 rounded-lg">
              <div className="text-sm text-content-secondary">xs (4px)</div>
              <VerticalSpacer size="xs" className="bg-primary/20" />
              <div className="text-sm text-content-secondary">sm (8px)</div>
              <VerticalSpacer size="sm" className="bg-primary/20" />
              <div className="text-sm text-content-secondary">md (16px)</div>
              <VerticalSpacer size="md" className="bg-primary/20" />
              <div className="text-sm text-content-secondary">lg (24px)</div>
              <VerticalSpacer size="lg" className="bg-primary/20" />
              <div className="text-sm text-content-secondary">xl (32px)</div>
              <VerticalSpacer size="xl" className="bg-primary/20" />
              <div className="text-sm text-content-secondary">End</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Section */}
      <div>
        <h2 className="text-headline-m mb-8">Modal</h2>
        <div className="space-y-8">
          <div>
            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Example Modal"
            >
              <div className="space-y-4">
                <p>This is an example modal with some content.</p>
                <Button onClick={() => setIsModalOpen(false)}>Close Modal</Button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
