// src/components/Toast/Toast.compositions.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Toast, type ToastDataItem } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast Notifications/Compositions",
  component: Toast,
  parameters: {
    layout: "padded",
    backgrounds: { default: "arkem-base" },
    docs: {
      description: {
        component: `# Toast Compositions

Different content combinations for toast notifications. Toast components can display title, message, and data fields independently or in various combinations.

## Content Sections

- **Title**: Header text using HeaderXs component
- **Message**: Main descriptive text content
- **Data Fields**: Key-value pairs using Field component

## Composition Patterns

- Title only
- Message only
- Data fields only
- Title + Message
- Title + Data Fields
- Message + Data Fields
- All sections combined

Use the **States** story to see all composition patterns, or explore individual stories for specific combinations.`,
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

// Title only
export const TitleOnly: Story = {
  tags: ['!dev'],
  render: () => (
    <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: "wrap" }}>
      <Toast
        title="Pattern Detected"
        variant="warning"
        hasTitle={true}
        hasMessage={false}
        hasData={false}
        leadingIcon={false}
      />
      <Toast
        title="Pattern Detected"
        variant="warning"
        hasTitle={true}
        hasMessage={false}
        hasData={false}
        leadingIcon={true}
      />
    </div>
  ),
};

// Message only
export const MessageOnly: Story = {
  tags: ['!dev'],
  render: () => (
    <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: "wrap" }}>
      <Toast
        message="Same 2 devices appear across 3 burglary scenes within 5 hours."
        variant="default"
        hasTitle={false}
        hasMessage={true}
        hasData={false}
      />
    </div>
  ),
};

// Data fields only
export const DataFieldsOnly: Story = {
  tags: ['!dev'],
  render: () => (
    <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: "wrap" }}>
      <Toast
        data={sampleData}
        variant="default"
        hasTitle={false}
        hasMessage={false}
        hasData={true}
        dataRows={2}
      />
      <Toast
        data={sampleData}
        variant="default"
        hasTitle={false}
        hasMessage={false}
        hasData={true}
        dataRows={4}
      />
    </div>
  ),
};

// Title + Message
export const TitleAndMessage: Story = {
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

// Title + Data Fields
export const TitleAndData: Story = {
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
        leadingIcon={false}
        dataRows={1}
      />
      <Toast
        title="Pattern Detected"
        data={sampleData}
        variant="warning"
        hasTitle={true}
        hasMessage={false}
        hasData={true}
        leadingIcon={false}
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
        dataRows={2}
      />
    </div>
  ),
};

// Message + Data Fields
export const MessageAndData: Story = {
  tags: ['!dev'],
  render: () => (
    <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: "wrap" }}>
      <Toast
        message="Same 2 devices appear across 3 burglary scenes within 5 hours."
        data={sampleData}
        variant="default"
        hasTitle={false}
        hasMessage={true}
        hasData={true}
        dataRows={2}
      />
    </div>
  ),
};

// All sections
export const AllSections: Story = {
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
        leadingIcon={false}
        dataRows={2}
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
        dataRows={4}
      />
    </div>
  ),
};

// States story - all compositions
export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%", maxWidth: "800px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--semantic-text-primary)" }}>
          Title Only
        </h3>
        <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: "wrap" }}>
          <Toast
            title="Pattern Detected"
            variant="warning"
            hasTitle={true}
            hasMessage={false}
            hasData={false}
            leadingIcon={false}
          />
          <Toast
            title="Pattern Detected"
            variant="warning"
            hasTitle={true}
            hasMessage={false}
            hasData={false}
            leadingIcon={true}
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--semantic-text-primary)" }}>
          Message Only
        </h3>
        <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: "wrap" }}>
          <Toast
            message="Same 2 devices appear across 3 burglary scenes within 5 hours."
            variant="default"
            hasTitle={false}
            hasMessage={true}
            hasData={false}
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--semantic-text-primary)" }}>
          Data Fields Only
        </h3>
        <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: "wrap" }}>
          <Toast
            data={sampleData}
            variant="default"
            hasTitle={false}
            hasMessage={false}
            hasData={true}
            dataRows={2}
          />
          <Toast
            data={sampleData}
            variant="default"
            hasTitle={false}
            hasMessage={false}
            hasData={true}
            dataRows={4}
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--semantic-text-primary)" }}>
          Title + Message
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
          Title + Data Fields
        </h3>
        <div style={{ display: "flex", flexDirection: "row", gap: "16px", flexWrap: "wrap" }}>
          <Toast
            title="Pattern Detected"
            data={sampleData}
            variant="warning"
            hasTitle={true}
            hasMessage={false}
            hasData={true}
            leadingIcon={false}
            dataRows={1}
          />
          <Toast
            title="Pattern Detected"
            data={sampleData}
            variant="warning"
            hasTitle={true}
            hasMessage={false}
            hasData={true}
            leadingIcon={false}
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
            dataRows={2}
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--semantic-text-primary)" }}>
          All Sections
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
            leadingIcon={false}
            dataRows={2}
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
            dataRows={4}
          />
        </div>
      </div>
    </div>
  ),
};

