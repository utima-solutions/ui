# @utima/ui-informed

## 0.24.0

### Minor Changes

- [`4333c06`](https://github.com/utima-solutions/ui/commit/4333c060b8a1cd46de7eaa5d924ad990295a9933) Thanks [@jsimck](https://github.com/jsimck)! - Added `Checkbox` control component
  Added `group/form` and `is-read-only`, `is-disabled` to be able to style form based on it's state like `group-[.is-disabled]/form:font-bold`
  Some visual and data fixes

### Patch Changes

- Updated dependencies []:
  - @utima/ui@0.24.0

## 0.23.0

### Patch Changes

- Updated dependencies [[`ae3d57a`](https://github.com/utima-solutions/ui/commit/ae3d57aba8a5febb47cf23f23521ac42e7fcafe0)]:
  - @utima/ui@0.23.0

## 0.22.1

### Patch Changes

- [`3672a07`](https://github.com/utima-solutions/ui/commit/3672a07084bda4dca95b05d313eb77f33608a518) Thanks [@jsimck](https://github.com/jsimck)! - Minor UI fixes

## 0.22.0

### Patch Changes

- Updated dependencies [[`4009b21`](https://github.com/utima-solutions/ui/commit/4009b2192ad2aa618a18f5b799c1548b37eed3bb)]:
  - @utima/ui@0.22.0

## 0.21.4

### Patch Changes

- [`bf88667`](https://github.com/utima-solutions/ui/commit/bf88667c87641c3b43148b9676f8bf4349dbdffe) Thanks [@jsimck](https://github.com/jsimck)! - Updated devtools UI

## 0.21.3

### Patch Changes

- [`f6beb7f`](https://github.com/utima-solutions/ui/commit/f6beb7f7c02e813c6ffd33b9df38d86b1511bd6b) Thanks [@jsimck](https://github.com/jsimck)! - Added some animation to helper text in form control

## 0.21.2

### Patch Changes

- [`4e73269`](https://github.com/utima-solutions/ui/commit/4e73269c56c12fd819c95f5293804c56768e310c) Thanks [@jsimck](https://github.com/jsimck)! - Added missing export for TypedFormState type

## 0.21.1

### Patch Changes

- [`d461421`](https://github.com/utima-solutions/ui/commit/d461421981e5451a6dad4ddb6a23eb1d0cac8eed) Thanks [@jsimck](https://github.com/jsimck)! - Reintroduced async onSubmit wrapper around onSubmit informed handler

## 0.21.0

### Minor Changes

- [`25d466a`](https://github.com/utima-solutions/ui/commit/25d466a59770750bfd7737fe98338c01bdff55b8) Thanks [@jsimck](https://github.com/jsimck)! - BREAKING-CHANGE

  - Removed `useDefaultSubmitActions` hook as it was too opinionated and not flexible enough.
  - Removed bindings to `useDefaultSubmitActions` in Form component. Now it's simple wrapper around informed form providing some global configurations for underlying form controls.

### Patch Changes

- Updated dependencies []:
  - @utima/ui@0.21.0

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
