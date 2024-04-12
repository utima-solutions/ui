---
"@utima/ui-informed": minor
---

- Fixed issues where invalid props were passed to underlaying child components, in most controlled components.
- Added missing exports for most prop type definitions and some additional utility types.
- All control components are now memoized.
- Added new `Devtools` component, see readme for more information.
- Added `description` prop to `Checkbox` component.
- Most custom user props on controlled components are properly parsed down, including event handlers.
- Added shorthand for `SelectItem` using dot notation under `Select` component -> you can now use `Select.Item`.
- Added `readonly` mode for textarea and text input components.
- `(optional)` label is now hidden by default, this can be enabled on form components globally using `showOptional` prop on form, or selectively on each field using `showOptional` prop.
