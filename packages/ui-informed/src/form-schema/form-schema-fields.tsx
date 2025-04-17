import { Relevant, Scope } from 'informed';
import { cloneElement, isValidElement, type ReactNode } from 'react';

import type { FormSchemaDef, FormSchemaFieldsDef } from './form-schema';
import { useFormSchema } from './form-schema-context';

export type FormSchemaFieldsProps = {
  schema: FormSchemaDef;
};

// TODO filter out props, that should nto be passed to the component

/**
 * Renders fields based on the schema definition.
 */
export function FormSchemaFields({ schema }: FormSchemaFieldsProps) {
  const { adapter } = useFormSchema();

  if (!schema?.$fields) {
    return null;
  }

  return schema.$fields.map((item, index) => {
    // Handle React nodes directly
    if (isValidElement(item)) {
      return cloneElement(item, { key: `node-${index}` });
    }

    // We already know it's not a React node, so we can safely cast it to FormSchemaFieldsDef
    const formField = item as Exclude<FormSchemaFieldsDef, ReactNode>;

    // Handle scope
    if ('$scope' in formField && formField.$scope) {
      return (
        <Scope
          key={`scope-${index.toString()}`}
          scope={formField.$scope.$scopeName}
        >
          <FormSchemaFields schema={formField.$scope} />
        </Scope>
      );
    }

    // Handle relevant
    if ('$relevant' in formField && formField.$relevant) {
      return (
        <Relevant
          key={`relevant-${index.toString()}`}
          when={formField.$relevant.$when}
        >
          <FormSchemaFields schema={formField.$relevant} />
        </Relevant>
      );
    }

    // Handle visible
    if ('visible' in formField && formField.visible === false) {
      return null;
    }

    if ('name' in formField && formField.name) {
      // Destructure props with defaults
      const { uiProps, field, visible, fieldType, render, ...fieldProps } =
        formField;

      const key = `field-${formField.name}-${index.toString()}`;
      const FieldComponent = (adapter as any)[
        formField.field ?? formField.fieldType ?? 'text'
      ] as any;

      // Handle custom render function
      if (render) {
        return render({
          Component: FieldComponent,
          props: { ...fieldProps, ...uiProps },
          key,
        });
      }

      return (
        <FieldComponent
          key={key}
          fieldType={fieldType}
          {...fieldProps}
          {...uiProps}
        />
      );
    }

    console.error('Invalid schema field:', item);

    return null;
  });
}
