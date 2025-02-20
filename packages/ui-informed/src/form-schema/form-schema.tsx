import { Select } from '@utima/ui';
import { type RelevantParams, Input as InformedInput } from 'informed';
import type { ComponentType } from 'react';

import { CheckboxControl } from '../controls/checkbox-control';
import { InputControl } from '../controls/input-control';
import { SelectControl } from '../controls/select-control';
import { SwitchControl } from '../controls/switch-control';
import { TextareaControl } from '../controls/textarea-control';
import type { FieldType } from '../form-field/form-field';

/**
 * Default form schema adapter, that maps field types to components.
 */
export const defaultFormSchemaAdapter: FormSchemaAdapter = {
  text: InputControl,
  number: props => <InputControl {...props} fieldType='number' />,
  textarea: TextareaControl,
  checkbox: CheckboxControl,
  switch: SwitchControl,
  hidden: props => <InformedInput {...props} type='hidden' />,
  select: props => {
    const { options, ...restProps } = props;

    return (
      <SelectControl {...restProps}>
        {Object.entries(options!).map(([value, label]) => (
          <Select.Item key={value} value={value}>
            {label}
          </Select.Item>
        ))}
      </SelectControl>
    );
  },
};

export interface FormSchemaAdapter {
  text: ComponentType<FormSchemaFieldDef>;
  switch: ComponentType<FormSchemaFieldDef>;
  hidden: ComponentType<FormSchemaFieldDef>;
  checkbox: ComponentType<FormSchemaFieldDef>;
  number: ComponentType<FormSchemaFieldDef>;
  textarea: ComponentType<FormSchemaFieldDef>;
  select: ComponentType<FormSchemaFieldDef>;
}

export interface FormSchemaFieldDef {
  // TODO typeof keyof FormSchemaAdapter ???
  /**
   * The data type of the field. It is used to map to adapter components.
   */
  fieldType?: FieldType;

  /**
   * Options for select fields.
   */
  options?: Record<string, string>;

  /**
   * You can override default control for given type, from the adapter.
   */
  control?: keyof FormSchemaAdapter;

  /**
   * Override given field UI component.
   */
  uiProps?: Record<string, any>;

  /**
   * The field name
   */
  name: string;

  /**
   * The field label
   */
  label?: string;

  /**
   * The field placeholder.
   */
  placeholder?: string;

  /**
   * The field tooltip.
   */
  tooltip?: string;

  /**
   * The field description.
   */
  description?: string;

  /**
   * The field description.
   */
  helperText?: string;

  /**
   * Whether the field is required.
   */
  required?: boolean;

  /**
   * Default value for the field.
   */
  defaultValue?: unknown;

  /**
   * Whether the field is visible.
   */
  visible?: boolean;

  /**
   * Whether the field is disabled.
   */
  disabled?: boolean;

  /**
   * You can provide a pattern for formatting dates, credit cards, etc.
   * To do this you can either provide a "Formatter String" or a "Formatter Array",
   * where regular expression are used as a placeholder for the user input.
   *
   * https://teslamotors.github.io/informed/api-reference/formatting-formatter
   *
   * Numbers:
   * #-#-# => 1-2-3
   * [/\d/, '-', /\d/, '-', /\d/] => 1-2-3
   *
   * Strings:
   * *-*-* => b-a-n
   * [/\w/, '-', /\w/, '-', /\w/] => b-a-n
   */
  formatter?: string | [RegExp];

  /**
   * Optional initial value.
   */
  initialValue?: unknown;

  /**
   * This function is called only once when the field is initialized.
   * You can use it to format the initial value. It is usually used along
   * with the "parser".
   */
  initializer?: (value: unknown) => unknown;

  /**
   * Use to parse the value before it is set in the form state.
   */
  parser?: (value: unknown) => unknown;

  /**
   * Use to mask the value. This means that the input value, is
   * stored internally as user typed it, but you can visually apply
   * mask to show different representation.
   *
   * For example, you can mask the text to be uppercase, but store
   * it as lowercase. Or use it alongside with the "parser" to
   * always make sure the value is in the correct format.
   */
  mask?: (value: unknown) => unknown;

  /**
   * If true, the mask will be applied only when the input is blurred.
   */
  maskOnBlur?: boolean;

  /**
   * Use to clean your values. For example remove all non-numeric
   * characters from a phone number. This essentially combines the
   * parse, mask, and initialize value into one function.
   */
  clean?: (value: unknown) => unknown;

  /**
   * Use to validate the value.
   */
  validate?: (value: unknown) => boolean;

  /**
   * Use for async validation. The promise should either resolve
   * with error message string, reject with Error instance or resolve
   * with void, when the value is valid.
   */
  asyncValidate?: (value: unknown) => Promise<void | string>;

  /**
   * Customize when the validation should be triggered.
   *
   * See https://teslamotors.github.io/informed/api-reference/validation-control for more info.
   */
  validateOn?:
    | 'change'
    | 'blur'
    | 'change-blur'
    | 'change-submit'
    | 'blur-submit'
    | 'submit';

  /**
   * Set to true to validate the field right away when the form is mounted.
   */
  validateOnMount?: boolean;

  /**
   * Set to true to show the error message right away when the form is mounted.
   */
  showErrorIfError?: boolean;

  /**
   * Set to true to show the error message right away when the field is touched.
   */
  showErrorIfTouched?: boolean;

  /**
   * Set to true to show the error message right away when the field is dirty.
   */
  showErrorIfDirty?: boolean;

  /**
   * Whether to show if the field is optional
   */
  showOptional?: boolean;

  /**
   * Use to define when the field is relevant. This function is applied directly
   * on the input itself, not wrapped in `Relevant` component.
   */
  relevant?: (params: RelevantParams) => boolean;

  /**
   * List external dependencies that should trigger the relevance re-check.
   */
  relevanceDeps?: unknown[];

  /**
   * Use to define name of the fields that should trigger
   * the relevance check.
   */
  relevanceWhen?: string[];
}

type FormSchemaFieldsDef =
  | FormSchemaFieldDef
  | {
      $relevant?: {
        $when: (params: RelevantParams) => boolean;
        $fields: FormSchemaFieldsDef[];
      };
    }
  | {
      $scope?: {
        $scopeName: string;
        $fields: FormSchemaFieldsDef[];
      };
    };

// TODO option to define schema defaults
// TODO option to define adapters? Like for translation
export interface FormSchemaDef {
  $fields: FormSchemaFieldsDef[];
}

/**
 * Typed helper for creating form schemas.
 */
export function createFormSchema(def: FormSchemaDef) {
  return def;
}
