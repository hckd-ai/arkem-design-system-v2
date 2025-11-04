// src/components/Field/Field.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Field } from "./Field";

const meta: Meta<typeof Field> = {
  title: "Components/Field",
  component: Field,
  parameters: {
    layout: "centered",
    backgrounds: { default: "arkem-base" },
    docs: {
      description: {
        component: `# Field

Field components display label-value pairs in a consistent, structured format. Used within Toast notifications and other data display contexts.

## Features

- Label-value pair layout with proper spacing
- Uppercase label styling
- Right-aligned values
- Token-based styling using semantic colors
- Flexible width (adapts to container)
- Semantic typography (Semantic/xs)

## Usage

Fields are perfect for:
- Data display in notifications
- Key-value pairs in cards
- Metadata display
- Form read-only states
- Information tooltips

\`\`\`tsx
<Field label="BEHAVIOUR" value="Repetitive route transversal" />
<Field label="ROUTE OVERLAP" value="3/4 Incidents" />
\`\`\`

Use the **Playground** to customize field properties, or view the **States** story to see various label and value combinations.`,
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label text (displayed in uppercase)",
    },
    value: {
      control: "text",
      description: "Value text (right-aligned)",
    },
    className: {
      control: false,
      description: "Additional CSS class names",
    },
  },
  args: {
    label: "BEHAVIOUR",
    value: "Repetitive route transversal and synchronized dwell.",
  },
};

export default meta;
type Story = StoryObj<typeof Field>;

// Playground story - interactive with all controls
export const Playground: Story = {};

// States story - shows various label/value combinations
export const States: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxWidth: "600px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--semantic-text-primary)" }}>
          Standard Fields
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Field label="BEHAVIOUR" value="Repetitive route transversal and synchronized dwell." />
          <Field label="ROUTE OVERLAP" value="3/4 Incidents" />
          <Field label="TIME RANGE" value="11:00 PM - 3:00 AM" />
          <Field label="INCIDENTS DETECTED" value="4" />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--semantic-text-primary)" }}>
          Short Values
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Field label="STATUS" value="Active" />
          <Field label="ID" value="12345" />
          <Field label="COUNT" value="1" />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--semantic-text-primary)" }}>
          Long Values
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Field 
            label="DESCRIPTION" 
            value="This is a very long value that demonstrates how the field component handles extended text content while maintaining proper alignment and spacing." 
          />
          <Field 
            label="DETAILED ANALYSIS" 
            value="Multiple lines of text content that wrap appropriately within the field component's layout constraints." 
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--semantic-text-primary)" }}>
          Numeric Values
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Field label="PERCENTAGE" value="87.5%" />
          <Field label="SCORE" value="92/100" />
          <Field label="RATIO" value="3:4" />
        </div>
      </div>
    </div>
  ),
};

