// src/components/Badge/Badge.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    backgrounds: { default: "arkem-base" },
    docs: {
      description: {
        component: `# Badge

Badges are small status indicators used to display user roles, categories, or labels.

## Features

- **Variant support**: Admin and user variants with distinct styling
- **Token-based styling**: All styles use design tokens (no hardcoded values)
- **Accessible**: Semantic HTML with proper contrast
- **Flexible content**: Accepts any React node as children

## Usage

Badges are perfect for:
- User role indicators (admin, user)
- Status labels
- Category tags
- Access level indicators

The badge automatically applies lowercase text transformation for consistent styling.`,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["admin", "user"],
      description: "Visual variant of the badge",
      table: {
        category: "Appearance",
      },
    },
    children: {
      control: "text",
      description: "Badge content (automatically lowercased)",
      table: {
        category: "Content",
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
      table: {
        category: "Advanced",
      },
    },
  },
  args: {
    variant: "user",
    children: "user",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Playground story - interactive with all controls
export const Playground: Story = {};

// Default user badge
export const User: Story = {
  args: {
    variant: "user",
    children: "user",
  },
};

// Admin badge
export const Admin: Story = {
  args: {
    variant: "admin",
    children: "admin",
  },
};

// Badge with custom text
export const CustomText: Story = {
  args: {
    variant: "admin",
    children: "superuser",
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
      <Badge variant="admin">admin</Badge>
      <Badge variant="user">user</Badge>
      <Badge variant="admin">superuser</Badge>
      <Badge variant="user">guest</Badge>
    </div>
  ),
};

// In context - user list
export const InContext: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "200px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ color: "var(--semantic-text-primary)" }}>Sarah Chen</span>
        <Badge variant="admin">admin</Badge>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ color: "var(--semantic-text-primary)" }}>Marcus Johnson</span>
        <Badge variant="user">user</Badge>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ color: "var(--semantic-text-primary)" }}>Emily Rodriguez</span>
        <Badge variant="user">user</Badge>
      </div>
    </div>
  ),
};

