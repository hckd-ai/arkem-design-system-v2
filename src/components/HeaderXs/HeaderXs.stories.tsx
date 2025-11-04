// src/components/HeaderXs/HeaderXs.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { HeaderXs } from "./HeaderXs";

const meta: Meta<typeof HeaderXs> = {
  title: "Components/Header/XS",
  component: HeaderXs,
  parameters: {
    layout: "centered",
    backgrounds: { default: "arkem-base" },
    docs: {
      description: {
        component: `# Header - XS Variant

HeaderXs is a compact header component used within Toast notifications and other compact UI contexts. It provides semantic typography with optional leading icons and variant-based styling.

## Typography

- **Font size**: Semantic/lg (16px)
- **Line height**: 24px
- **Font weight**: Medium (500)
- **Ideal for**: Toast notification titles, compact section headers, inline headers

## Features

- Variant support: default, success, warning, error, info
- Optional leading icon with automatic variant-based icon selection
- Custom icon support via icon prop
- Token-based styling using semantic colors
- Consistent spacing and alignment

## Usage

HeaderXs is perfect for:
- Toast notification titles
- Compact section headers
- Inline component headers
- Status-based headers with color coding

\`\`\`tsx
// Basic header
<HeaderXs>Pattern Detected</HeaderXs>

// With variant and icon
<HeaderXs variant="warning" leadingIcon={true}>
  Pattern Detected
</HeaderXs>

// Custom icon
<HeaderXs variant="success" leadingIcon={true} icon="CheckCircle">
  Success Message
</HeaderXs>
\`\`\`

## Variants

- **default**: Primary text color
- **success**: Green feedback color
- **warning**: Orange/yellow feedback color
- **error**: Red feedback color
- **info**: Secondary text color

Use the **Playground** to customize all HeaderXs properties, or view the **States** story to see all variant and icon combinations.`,
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "Header text content",
    },
    variant: {
      control: "select",
      options: ["default", "success", "warning", "error", "info"],
      description: "Visual variant affecting text and icon color",
    },
    leadingIcon: {
      control: "boolean",
      description: "Show/hide leading icon (automatically selected based on variant)",
    },
    icon: {
      control: false,
      description: "Custom icon name from lucide-react (overrides variant default)",
    },
    className: {
      control: false,
      description: "Additional CSS class names",
    },
  },
  args: {
    children: "Pattern Detected",
    variant: "default",
    leadingIcon: false,
  },
};

export default meta;
type Story = StoryObj<typeof HeaderXs>;

// Playground story - interactive with all controls
export const Playground: Story = {
  render: (args) => <HeaderXs {...args}>{args.children}</HeaderXs>,
};

// Default variant
export const Default: Story = {
  tags: ['!dev'],
  args: {
    children: "Pattern Detected",
    variant: "default",
    leadingIcon: false,
  },
};

// With icon
export const WithIcon: Story = {
  tags: ['!dev'],
  args: {
    children: "Pattern Detected",
    variant: "default",
    leadingIcon: true,
  },
};

// All variants without icon
export const AllVariants: Story = {
  tags: ['!dev'],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
      <HeaderXs variant="default">Default Variant</HeaderXs>
      <HeaderXs variant="success">Success Variant</HeaderXs>
      <HeaderXs variant="warning">Warning Variant</HeaderXs>
      <HeaderXs variant="error">Error Variant</HeaderXs>
      <HeaderXs variant="info">Info Variant</HeaderXs>
    </div>
  ),
};

// All variants with icon
export const AllVariantsWithIcon: Story = {
  tags: ['!dev'],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
      <HeaderXs variant="default" leadingIcon={true}>Default Variant</HeaderXs>
      <HeaderXs variant="success" leadingIcon={true}>Success Variant</HeaderXs>
      <HeaderXs variant="warning" leadingIcon={true}>Warning Variant</HeaderXs>
      <HeaderXs variant="error" leadingIcon={true}>Error Variant</HeaderXs>
      <HeaderXs variant="info" leadingIcon={true}>Info Variant</HeaderXs>
    </div>
  ),
};

// States story - comprehensive showcase
export const States: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%", maxWidth: "600px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--semantic-text-primary)" }}>
          Without Icon
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
          <HeaderXs variant="default">Default Variant</HeaderXs>
          <HeaderXs variant="success">Success Variant</HeaderXs>
          <HeaderXs variant="warning">Warning Variant</HeaderXs>
          <HeaderXs variant="error">Error Variant</HeaderXs>
          <HeaderXs variant="info">Info Variant</HeaderXs>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--semantic-text-primary)" }}>
          With Icon
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
          <HeaderXs variant="default" leadingIcon={true}>Default Variant</HeaderXs>
          <HeaderXs variant="success" leadingIcon={true}>Success Variant</HeaderXs>
          <HeaderXs variant="warning" leadingIcon={true}>Warning Variant</HeaderXs>
          <HeaderXs variant="error" leadingIcon={true}>Error Variant</HeaderXs>
          <HeaderXs variant="info" leadingIcon={true}>Info Variant</HeaderXs>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--semantic-text-primary)" }}>
          Custom Icons
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
          <HeaderXs variant="default" leadingIcon={true} icon="Bell">Notification</HeaderXs>
          <HeaderXs variant="success" leadingIcon={true} icon="CheckCircle">Approved</HeaderXs>
          <HeaderXs variant="warning" leadingIcon={true} icon="AlertTriangle">Warning</HeaderXs>
          <HeaderXs variant="error" leadingIcon={true} icon="XCircle">Error</HeaderXs>
          <HeaderXs variant="info" leadingIcon={true} icon="Info">Information</HeaderXs>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--semantic-text-primary)" }}>
          Long Text Examples
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
          <HeaderXs variant="warning" leadingIcon={true}>
            Pattern Detected Across Multiple Scenes
          </HeaderXs>
          <HeaderXs variant="error" leadingIcon={false}>
            Critical System Error Requires Immediate Attention
          </HeaderXs>
          <HeaderXs variant="success" leadingIcon={true}>
            Operation Completed Successfully
          </HeaderXs>
        </div>
      </div>
    </div>
  ),
};

