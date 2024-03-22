import {
  ZodError,
  type AnyZodObject,
  type ZodType,
  ZodOptional,
  ZodObject,
} from 'zod';

export function isZodError(error: unknown) {
  return error instanceof ZodError;
}

export function zodResolver(schema?: ZodType) {
  if (!schema) return;

  return (values: unknown) => {
    try {
      schema.parse(values);
    } catch (error: unknown) {
      if (isZodError(error)) {
        return (error as ZodError).errors[0].message;
      }

      throw error;
    }
  };
}

export function getFieldZodObject(name: string, zodSchema?: AnyZodObject) {
  if (!zodSchema) return;

  const path = name.split('.');
  let schema = zodSchema;
  for (const key of path) {
    if (schema instanceof ZodOptional) schema = schema.unwrap();
    if (!(schema instanceof ZodObject)) return undefined;
    schema = schema.shape[key];
  }

  return schema as ZodType;
}