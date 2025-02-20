import { useMemo } from 'react';

import { type FormSchemaDef, createFormSchema } from './form-schema';

/**
 * Helper hook for creating a schema from a list of fields.
 */
export function useFieldsSchema(
  fieldsDef: FormSchemaDef['$fields'],
  dependencies: any[] = [],
) {
  const schema = useMemo(
    () =>
      createFormSchema({
        $fields: fieldsDef,
      }),
    dependencies,
  );

  return { schema };
}
