---
"@utima/ui-informed": minor
---

BREAKING-CHANGE

- Removed `useDefaultSubmitActions` hook as it was too opinionated and not flexible enough.
- Removed bindings to `useDefaultSubmitActions` in Form component. Now it's simple wrapper around informed form providing some global configurations for underlying form controls.
