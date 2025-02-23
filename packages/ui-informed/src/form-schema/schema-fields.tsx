import { Relevant, Scope } from 'informed';
import { cloneElement, isValidElement, type ReactNode } from 'react';

import type { FormSchemaDef, FormSchemaFieldsDef } from './form-schema';
import { useFormSchema } from './form-schema-context';

export type SchemaFieldsProps = {
  schema: FormSchemaDef;
};

// TODO filter out props, that should nto be passed to the component

/**
 * Renders fields based on the schema definition.
 */
export function SchemaFields({ schema }: SchemaFieldsProps) {
  const { adapter } = useFormSchema();

  if (!schema?.$fields) {
    return null;
  }

  return schema.$fields.map((formField, index) => {
    // Handle React nodes directly
    if (isValidElement(formField)) {
      return cloneElement(formField, { key: `node-${index}` });
    }

    // We already know it's not a React node, so we can safely cast it to FormSchemaFieldsDef
    const field = formField as Exclude<FormSchemaFieldsDef, ReactNode>;

    // Handle scope
    if ('$scope' in field && field.$scope) {
      return (
        <Scope
          key={`scope-${index.toString()}`}
          scope={field.$scope.$scopeName}
        >
          <SchemaFields schema={field.$scope} />
        </Scope>
      );
    }

    // Handle relevant
    if ('$relevant' in field && field.$relevant) {
      return (
        <Relevant
          key={`relevant-${index.toString()}`}
          when={field.$relevant.$when}
        >
          <SchemaFields schema={field.$relevant} />
        </Relevant>
      );
    }

    // Handle visible
    if ('visible' in field && field.visible === false) {
      return null;
    }

    if ('name' in field && field.name) {
      // Destructure props with defaults
      const { uiProps, control, visible, fieldType, render, ...fieldProps } =
        field;

      const key = `field-${field.name}-${index.toString()}`;
      const FieldComponent = (adapter as any)[
        control ?? fieldType ?? 'text'
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

    console.error('Invalid schema field:', formField);

    return null;
  });
}
