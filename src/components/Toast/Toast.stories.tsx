// src/components/Toast/Toast.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast Notifications",
  component: Toast,
  parameters: {
    layout: "centered",
    backgrounds: { default: "arkem-base" },
    docs: {
      description: {
        component: `# Toast Notifications

Toast notifications provide non-intrusive feedback to users about actions, system status, or important information.

## Features

- Modular components: Uses HeaderXs for titles and Field for data display
- Flexible content: Title, message, and data fields can be shown/hidden independently
- Variant support: default, success, warning, error, info
- Leading icon support in HeaderXs component
- Full-width dividers that span edge to edge
- Flex layout to prevent extra blank space
- Token-based styling using semantic colors
- Responsive design

## Usage

Toast notifications are perfect for:
- Pattern detection alerts
- Data display tooltips
- System notifications
- Status updates
- Action confirmations

Use the **Playground** to customize all toast properties, or explore the modular story files for specific use cases:
- **Variants** - All visual variant options
- **Compositions** - Different content combinations
- **Features** - Interactive features like close icon`,
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Title text displayed using HeaderXs component",
    },
    message: {
      control: "text",
      description: "Main message content",
    },
    data: {
      control: "object",
      description: "Array of label/value pairs to display using Field component",
    },
    variant: {
      control: "select",
      options: ["default", "success", "warning", "error", "info"],
      description: "Visual variant of the toast",
    },
    hasTitle: {
      control: "boolean",
      description: "Show/hide title section",
    },
    hasMessage: {
      control: "boolean",
      description: "Show/hide message text",
    },
    hasData: {
      control: "boolean",
      description: "Show/hide data fields section",
    },
    leadingIcon: {
      control: "boolean",
      description: "Show/hide icon next to title",
    },
    dataRows: {
      control: { type: "number", min: 0, max: 3, step: 1 },
      description: "Number of data field rows to display (0-3)",
    },
    showCloseIcon: {
      control: "boolean",
      description: "Show/hide close icon button",
    },
    onClose: {
      action: "closed",
      description: "Callback function when close icon is clicked",
    },
  },
  args: {
    title: "Pattern Detected",
    message: "Same 2 devices appear across 3 burglary scenes within 5 hours.",
    data: [
      { label: "BEHAVIOUR", value: "Repetitive route transversal and synchronized dwell." },
      { label: "ROUTE OVERLAP", value: "3/4 Incidents" },
      { label: "TIME RANGE", value: "11:00 PM - 3:00 AM" },
    ],
    variant: "warning",
    hasTitle: true,
    hasMessage: true,
    hasData: true,
    leadingIcon: false,
    showCloseIcon: false,
    dataRows: 2,
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

// Playground story - interactive with all controls
export const Playground: Story = {};
