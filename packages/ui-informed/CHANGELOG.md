# @utima/ui-informed

## 0.20.0

### Minor Changes

- [`5d7a49e`](https://github.com/utima-solutions/ui/commit/5d7a49ee5e957d083493ba67632fe1cb7f4d7de1) Thanks [@jsimck](https://github.com/jsimck)! - - Fixed issues where invalid props were passed to underlaying child components, in most controlled components.
  - Added missing exports for most prop type definitions and some additional utility types.
  - All control components are now memoized.
  - Added new `Devtools` component, see readme for more information.
  - Added `description` prop to `Checkbox` component.
  - Most custom user props on controlled components are properly parsed down, including event handlers.
  - Added shorthand for `SelectItem` using dot notation under `Select` component -> you can now use `Select.Item`.
  - Added `readonly` mode for textarea and text input components.
  - `(optional)` label is now hidden by default, this can be enabled on form components globally using `showOptional` prop on form, or selectively on each field using `showOptional` prop.

### Patch Changes

- Updated dependencies [[`5d7a49e`](https://github.com/utima-solutions/ui/commit/5d7a49ee5e957d083493ba67632fe1cb7f4d7de1)]:
  - @utima/ui@0.20.0

## 0.1.3

### Patch Changes

- [#16](https://github.com/utima-solutions/ui/pull/16) [`940e47e`](https://github.com/utima-solutions/ui/commit/940e47ea1026ecb4adb9fbdf5a94a87348f32db0) Thanks [@Matushl](https://github.com/Matushl)! - Fix order of Input props to not override `type`

## 0.1.2

### Patch Changes

- [#15](https://github.com/utima-solutions/ui/pull/15) [`74ccead`](https://github.com/utima-solutions/ui/commit/74ccead133a8bda4f315ae018d5cc7123ee1bb07) Thanks [@Matushl](https://github.com/Matushl)! - - Add prop `hideOptional` to FormControl to hide 'optional' flag on labels
  - Add prop `inputType` to Input to distinguish between input type and form control type
  - Add prop `disableDefaultToast` to Form to disable default toast messages on submit
- Updated dependencies [[`b0ecc8f`](https://github.com/utima-solutions/ui/commit/b0ecc8fe4c769bc9d69921a8b7beda8408a6e25c), [`47eb558`](https://github.com/utima-solutions/ui/commit/47eb55863d058c948495c79c14c5953c9a5425cb)]:
  - @utima/ui@0.18.5

## 0.1.1

### Patch Changes

- [`f4660dc`](https://github.com/utima-solutions/ui/commit/f4660dc5b37bbba249dfe36be8f19ae84a7ac9f3) Thanks [@jsimck](https://github.com/jsimck)! - Fixed unpublished major versions

- Updated dependencies [[`f4660dc`](https://github.com/utima-solutions/ui/commit/f4660dc5b37bbba249dfe36be8f19ae84a7ac9f3)]:
  - @utima/ui@0.18.4

## 0.1.0

### Minor Changes

- [#9](https://github.com/utima-solutions/ui/pull/9) [`561015e`](https://github.com/utima-solutions/ui/commit/561015e12d9f35f6c95141b5889b0d8e10fd4fe3) Thanks [@Matushl](https://github.com/Matushl)! - Add Form component with `informed` and context
  Add multiple Controls tied with utima/ui components and stories for them
  Add Zod resolver
  Setup i18next with essential czech translations (so far without possibility to customize)
