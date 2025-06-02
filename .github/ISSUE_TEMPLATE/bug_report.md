name: Bug report
description: Report a bug or issue with SeamPass
title: "[Bug]: "
labels: ["bug"]
assignees: []

body:
  - type: textarea
    id: description
    attributes:
      label: What happened?
      description: Briefly describe the bug.
      placeholder: The password doesn’t generate when clicking the button.
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: How to reproduce it?
      description: Steps someone can follow to see the bug.
      placeholder: |
        1. Go to the homepage
        2. Click "Generate password"
        3. Nothing happens
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: What did you expect?
      description: What should have happened instead?
      placeholder: A password should appear immediately.

  - type: textarea
    id: device
    attributes:
      label: Device info (optional)
      description: Mention your browser, device, or OS if you can.
      placeholder: Chrome on macOS, or Safari on iPhone
