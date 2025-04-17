import {
  Button,
  cn,
  Input,
  InputAddon,
  InputAddonContent,
  InputAddonEnd,
  InputAddonStart,
  Select,
  SelectItem,
  Separator,
} from '@utima/ui';
import {
  defaultFormSchemaAdapter,
  Form,
  FormSchemaFields,
  FormSchemaProvider,
  InputField,
  SwitchField,
  useFormFieldsSchema,
} from '@utima/ui-informed';
import { Devtools } from '@utima/ui-informed/devtools';
import { UserIcon, CheckIcon } from 'lucide-react';
import { z } from 'zod';

export default function Index() {
  const { schema } = useFormFieldsSchema([
    {
      name: 'input',
      label: 'Input',
      render: ({ Component, props }) => {
        return <Component {...props} />;
      },
    },
    {
      name: 'textarea',
      label: 'Textarea',
      field: 'textarea',
      parser: (value: any) => (value ? value.toUpperCase() : null) as any,
      uiProps: {
        allowEmptyString: true,
      },
    },
    {
      name: 'number',
      label: 'Number',
      field: 'number',
    },
    {
      name: 'switch',
      label: 'Switch',
      field: 'switch',
    },
    {
      name: 'select',
      label: 'Select',
      field: 'select',
      options: {
        a: 'A',
        b: 'B',
        c: 'C',
      },
      renderOption: ({ value, label }) => (
        <SelectItem key={value} value={value}>
          <span className='flex items-center gap-2'>
            <span
              className={cn('h-4 w-4 rounded-md block', {
                'bg-red-500': value === 'a',
                'bg-blue-500': value === 'b',
                'bg-green-500': value === 'c',
              })}
            />
            {label}
          </span>
        </SelectItem>
      ),
    },
    {
      name: 'checkbox',
      label: 'Checkbox',
      field: 'checkbox',
    },
    {
      name: 'select',
      label: 'Select',
      field: 'select',
      options: {
        a: 'A',
        b: 'B',
        c: 'C',
      },
    },
    {
      name: 'volume',
      label: 'Volume',
      field: 'slider',
      defaultValue: 50,
      helperText: 'Adjust the volume level',
    },
    {
      name: 'range',
      label: 'Price Range',
      field: 'slider',
      defaultValue: [20, 80],
      helperText: 'Select min and max price',
      uiProps: {
        min: 0,
        max: 100,
        step: 1,
      },
    },
    {
      name: 'distribution',
      label: 'Resource Distribution',
      field: 'slider',
      defaultValue: [10, 30, 60],
      helperText: 'Adjust resource allocation',
      uiProps: {
        variant: 'success',
        size: 'lg',
        shape: 'square',
      },
    },
  ]);

  return (
    <FormSchemaProvider adapter={defaultFormSchemaAdapter}>
      <div className='mt-12 grid min-h-screen items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
        <Form
          onSubmit={({ values }) => alert(JSON.stringify(values))}
          initialValues={{ switch: true, input: null }}
        >
          {/* <SwitchField
          // name='switch'
          description='Description'
          helperText='Helper Text'
          label='Label'
        /> */}

          <FormSchemaFields schema={schema} />

          <div className='my-12' />
          <Separator size='lg' />
          <div className='my-12' />

          <InputField
            name='input'
            required='Custom required'
            description='Description'
            fieldType='number'
            helperText='Helper Text'
            zodSchema={z.string().nullish()}
            label='Label'
            // clean={clean}
            // mask={mask}
            // parser={parser}
            allowEmptyString
          />
          <SwitchField
            name='switch'
            required
            description='Description'
            fieldType='number'
            helperText='Helper Text'
            zodSchema={z.string().nullish()}
            label='Label'
            allowEmptyString
          />
          <Button type='submit'>Submit</Button>
          <Devtools />
          <div className='flex flex-col gap-4'>
            <InputAddon hasStart hasEnd>
              <InputAddonStart>
                <UserIcon className='size-4' />
              </InputAddonStart>
              <InputAddonContent>
                <Input />
              </InputAddonContent>
              <InputAddonEnd>
                <CheckIcon className='size-4' />
              </InputAddonEnd>
            </InputAddon>
            <InputAddon hasEnd>
              <InputAddonContent>
                <Input placeholder='Search...' />
              </InputAddonContent>
              <InputAddonEnd>
                <Button variant='secondary'>Search</Button>
              </InputAddonEnd>
            </InputAddon>

            <InputAddon hasStart hasEnd>
              <InputAddonStart>$</InputAddonStart>
              <InputAddonContent>
                <Input type='number' />
              </InputAddonContent>
              <InputAddonEnd>USD</InputAddonEnd>
            </InputAddon>

            <InputAddon size='xs' hasStart hasEnd>
              <InputAddonStart>$</InputAddonStart>
              <InputAddonContent>
                <Input size='xs' type='number' />
              </InputAddonContent>
              <InputAddonEnd>USD</InputAddonEnd>
            </InputAddon>

            <InputAddon variant='default' hasStart>
              <InputAddonStart>$</InputAddonStart>
              <InputAddonContent>
                <Input />
              </InputAddonContent>
            </InputAddon>

            <InputAddon size='lg' variant='outline' hasStart>
              <InputAddonStart>$</InputAddonStart>
              <InputAddonContent>
                <Input size='lg' />
              </InputAddonContent>
            </InputAddon>

            <InputAddon variant='absolute' hasStart hasEnd>
              <InputAddonStart>$</InputAddonStart>
              <InputAddonContent>
                <Input className='pl-8 pr-12' />
              </InputAddonContent>
              <InputAddonEnd>USD</InputAddonEnd>
            </InputAddon>
          </div>
        </Form>
      </div>
    </FormSchemaProvider>
  );
}
