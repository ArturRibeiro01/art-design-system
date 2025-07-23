import type { Meta, StoryObj } from '@storybook/react';
import { ExternalLink } from 'lucide-react';

const Page = () => (
  <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
    <h1 style={{ fontSize: 32, fontWeight: 600 }}>What is a Design System?</h1>
    <p style={{ fontSize: 18, marginTop: 16 }}>
      A design system is a collection of reusable components, guided by clear standards...
    </p>
    
    <div style={{ marginTop: 32 }}>
      <h2>📦 Included in this system</h2>
      <ul>
        <li>🧩 React Components</li>
        <li>🎨 Design Tokens (colors, typography, spacing)</li>
        <li>📚 Documentation</li>
      </ul>
    </div>
    
    <div style={{ marginTop: 32 }}>
      <h2>🔗 Useful Links</h2>
      <p>
        <a href="https://www.figma.com" target="_blank" rel="noreferrer">
          Open Figma file <ExternalLink size={20} style={{ marginLeft: 4 }} />
        </a>
      </p>
    </div>
  </div>
);

const meta: Meta<typeof Page> = {
  title: 'Getting Started/What is Design System',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};