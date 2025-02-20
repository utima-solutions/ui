import { Relevant, Scope } from 'informed';

import type { FormSchemaDef } from './form-schema';
import { useFormSchema } from './form-schema-context';

export type SchemaFieldsProps = {
  schema: FormSchemaDef;
};

// TODO pass ui props
// TODO filter out props, that should nto be passed to the component

/**
 * Renders fields based on the schema definition.
 */
export function SchemaFields({ schema }: SchemaFieldsProps) {
  const { adapter } = useFormSchema();

  if (!schema?.$fields) {
    return null;
  }

  return schema.$fields.map((field, index) => {
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

    if ('visible' in field && field.visible === false) {
      return null;
    }

    if ('name' in field && field.name) {
      // Destructure props with defaults
      const { uiProps, control, visible, fieldType, ...fieldProps } = field;

      const key = `field-${field.name}-${index.toString()}`;
      const FieldComponent = (adapter as any)[
        control ?? fieldType ?? 'text'
      ] as any;

      return (
        <FieldComponent
          key={key}
          fieldType={fieldType}
          {...fieldProps}
          {...uiProps}
        />
      );
    }

    console.error('Invalid schema field:', field);

    return null;
  });
}
