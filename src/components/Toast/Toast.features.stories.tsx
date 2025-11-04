// src/components/Toast/Toast.features.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Toast, type ToastDataItem } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast Notifications/Features",
  component: Toast,
  parameters: {
    layout: "padded",
    backgrounds: { default: "arkem-base" },
    docs: {
      description: {
        component: `# Toast Features

Interactive features and optional elements for toast notifications.

## Features

- **Leading Icon**: Icon displayed next to the title (uses HeaderXs component)
- **Close Icon**: Dismissible button in the top-right corner
- **Data Rows**: Control how many data field rows to display

Use the **States** story to see all feature combinations, or explore individual stories for specific features.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

const sampleData: ToastDataItem[] = [
  { label: "BEHAVIOUR", value: "Repetitive route transversal and synchronized dwell." },
  { label: "ROUTE OVERLAP", value: "3/4 Incidents" },
  { label: "TIME RANGE", value: "11:00 PM - 3:00 AM" },
  { label: "INCIDENTS DETECTED", value: "4" },
];

// Leading icon
export const LeadingIcon: Story = {
  tags: ['!dev'],
  render: () => (
    <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: "wrap" }}>
      <Toast
        title="Pattern Detected"
        message="Same 2 devices appear across 3 burglary scenes within 5 hours."
        variant="warning"
        hasTitle={true}
        hasMessage={true}
        hasData={false}
        leadingIcon={false}
      />
      <Toast
        title="Pattern Detected"
        message="Same 2 devices appear across 3 burglary scenes within 5 hours."
        variant="warning"
        hasTitle={true}
        hasMessage={true}
        hasData={false}
        leadingIcon={true}
      />
    </div>
  ),
};

// Close icon
export const CloseIcon: Story = {
  tags: ['!dev'],
  render: () => (
    <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: "wrap" }}>
      <Toast
        title="Pattern Detected"
        message="Same 2 devices appear across 3 burglary scenes within 5 hours."
        variant="warning"
        hasTitle={true}
        hasMessage={true}
        hasData={false}
        leadingIcon={true}
        showCloseIcon={false}
      />
      <Toast
        title="Pattern Detected"
        message="Same 2 devices appear across 3 burglary scenes within 5 hours."
        variant="warning"
        hasTitle={true}
        hasMessage={true}
        hasData={false}
        leadingIcon={true}
        showCloseIcon={true}
      />
    </div>
  ),
};

// Data rows
export const DataRows: Story = {
  tags: ['!dev'],
  render: () => (
    <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: "wrap" }}>
      <Toast
        title="Pattern Detected"
        data={sampleData}
        variant="warning"
        hasTitle={true}
        hasMessage={false}
        hasData={true}
        leadingIcon={true}
        dataRows={1}
      />
      <Toast
        title="Pattern Detected"
        data={sampleData}
        variant="warning"
        hasTitle={true}
        hasMessage={false}
        hasData={true}
        leadingIcon={true}
        dataRows={2}
      />
      <Toast
        title="Pattern Detected"
        data={sampleData}
        variant="warning"
        hasTitle={true}
        hasMessage={false}
        hasData={true}
        leadingIcon={true}
        dataRows={4}
      />
    </div>
  ),
};

// All features combined
export const AllFeatures: Story = {
  tags: ['!dev'],
  render: () => (
    <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: "wrap" }}>
      <Toast
        title="Pattern Detected"
        message="Same 2 devices appear across 3 burglary scenes within 5 hours."
        data={sampleData}
        variant="warning"
        hasTitle={true}
        hasMessage={true}
        hasData={true}
        leadingIcon={true}
        dataRows={2}
        showCloseIcon={true}
      />
    </div>
  ),
};

// States story - all features
export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%", maxWidth: "800px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--semantic-text-primary)" }}>
          Leading Icon
        </h3>
        <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: "wrap" }}>
          <Toast
            title="Pattern Detected"
            message="Same 2 devices appear across 3 burglary scenes within 5 hours."
            variant="warning"
            hasTitle={true}
            hasMessage={true}
            hasData={false}
            leadingIcon={false}
          />
          <Toast
            title="Pattern Detected"
            message="Same 2 devices appear across 3 burglary scenes within 5 hours."
            variant="warning"
            hasTitle={true}
            hasMessage={true}
            hasData={false}
            leadingIcon={true}
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--semantic-text-primary)" }}>
          Close Icon
        </h3>
        <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: "wrap" }}>
          <Toast
            title="Pattern Detected"
            message="Same 2 devices appear across 3 burglary scenes within 5 hours."
            variant="warning"
            hasTitle={true}
            hasMessage={true}
            hasData={false}
            leadingIcon={true}
            showCloseIcon={false}
          />
          <Toast
            title="Pattern Detected"
            message="Same 2 devices appear across 3 burglary scenes within 5 hours."
            variant="warning"
            hasTitle={true}
            hasMessage={true}
            hasData={false}
            leadingIcon={true}
            showCloseIcon={true}
          />
          <Toast
            title="Pattern Detected"
            data={sampleData}
            variant="warning"
            hasTitle={true}
            hasMessage={false}
            hasData={true}
            leadingIcon={true}
            dataRows={2}
            showCloseIcon={true}
          />
          <Toast
            title="Pattern Detected"
            message="Same 2 devices appear across 3 burglary scenes within 5 hours."
            data={sampleData}
            variant="warning"
            hasTitle={true}
            hasMessage={true}
            hasData={true}
            leadingIcon={true}
            dataRows={2}
            showCloseIcon={true}
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--semantic-text-primary)" }}>
          Data Rows
        </h3>
        <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: "wrap" }}>
          <Toast
            title="Pattern Detected"
            data={sampleData}
            variant="warning"
            hasTitle={true}
            hasMessage={false}
            hasData={true}
            leadingIcon={true}
            dataRows={1}
          />
          <Toast
            title="Pattern Detected"
            data={sampleData}
            variant="warning"
            hasTitle={true}
            hasMessage={false}
            hasData={true}
            leadingIcon={true}
            dataRows={2}
          />
          <Toast
            title="Pattern Detected"
            data={sampleData}
            variant="warning"
            hasTitle={true}
            hasMessage={false}
            hasData={true}
            leadingIcon={true}
            dataRows={4}
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--semantic-text-primary)" }}>
          All Features Combined
        </h3>
        <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: "wrap" }}>
          <Toast
            title="Pattern Detected"
            message="Same 2 devices appear across 3 burglary scenes within 5 hours."
            data={sampleData}
            variant="warning"
            hasTitle={true}
            hasMessage={true}
            hasData={true}
            leadingIcon={true}
            dataRows={2}
            showCloseIcon={true}
          />
        </div>
      </div>
    </div>
  ),
};

