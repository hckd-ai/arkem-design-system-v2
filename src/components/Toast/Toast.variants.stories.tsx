// src/components/Toast/Toast.variants.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Toast, type ToastVariant } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast Notifications/Variants",
  component: Toast,
  parameters: {
    layout: "padded",
    backgrounds: { default: "arkem-base" },
    docs: {
      description: {
        component: `# Toast Variants

All available visual variants for toast notifications. Each variant uses semantic colors to convey different message types and importance levels.

## Variants

- **default**: Neutral gray styling for general information
- **success**: Green styling for positive confirmations
- **warning**: Orange/yellow styling for cautionary messages
- **error**: Red styling for errors and critical alerts
- **info**: Blue styling for informational messages

Use the **States** story to see all variants in different content configurations.`,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "error", "info"],
      description: "Visual variant of the toast",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

// All variants with title and message
export const AllVariants: Story = {
  tags: ['!dev'],
  render: () => {
    const variants: ToastVariant[] = ["default", "success", "warning", "error", "info"];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxWidth: "600px" }}>
        {variants.map((variant) => (
          <Toast
            key={variant}
            title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Variant`}
            message={`This is a ${variant} toast notification with title and message content.`}
            variant={variant}
            hasTitle={true}
            hasMessage={true}
            hasData={false}
            leadingIcon={true}
          />
        ))}
      </div>
    );
  },
};

// All variants with title only
export const TitleOnly: Story = {
  tags: ['!dev'],
  render: () => {
    const variants: ToastVariant[] = ["default", "success", "warning", "error", "info"];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxWidth: "600px" }}>
        {variants.map((variant) => (
          <Toast
            key={variant}
            title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Variant`}
            variant={variant}
            hasTitle={true}
            hasMessage={false}
            hasData={false}
            leadingIcon={true}
          />
        ))}
      </div>
    );
  },
};

// States story - comprehensive variant showcase
export const States: Story = {
  render: () => {
    const variants: ToastVariant[] = ["default", "success", "warning", "error", "info"];
    const sampleData = [
      { label: "BEHAVIOUR", value: "Repetitive route transversal and synchronized dwell." },
      { label: "ROUTE OVERLAP", value: "3/4 Incidents" },
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%", maxWidth: "800px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--semantic-text-primary)" }}>
            All Variants - Title + Message + Icon
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {variants.map((variant) => (
              <Toast
                key={variant}
                title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Variant`}
                message={`This is a ${variant} toast notification`}
                variant={variant}
                hasTitle={true}
                hasMessage={true}
                hasData={false}
                leadingIcon={true}
              />
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--semantic-text-primary)" }}>
            All Variants - Title + Message + Data
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {variants.map((variant) => (
              <Toast
                key={variant}
                title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Variant`}
                message={`This is a ${variant} toast notification`}
                data={sampleData}
                variant={variant}
                hasTitle={true}
                hasMessage={true}
                hasData={true}
                leadingIcon={true}
                dataRows={2}
              />
            ))}
          </div>
        </div>
      </div>
    );
  },
};

