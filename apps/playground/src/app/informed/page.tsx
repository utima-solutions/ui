'use client';

import { Button, cn, Input, InputAddon, Select, Separator } from '@utima/ui';
import {
  defaultFormSchemaAdapter,
  Form,
  FormSchemaProvider,
  InputControl,
  FormSchemaFields,
  SwitchControl,
  useFormFieldsSchema,
} from '@utima/ui-informed';
import { Devtools } from '@utima/ui-informed/devtools';
import { UserIcon, CheckIcon } from 'lucide-react';
import { z } from 'zod';

// const clean = (value: string) => {
//   console.log('value', value);

//   if (!value) {
//     return null;
//   }

//   return value.replaceAll(/[!#$%&()*@^]/g, '');
// };

// const mask = (value: string) => value.toUpperCase();
// const parser = (value: string) => value.toLowerCase();

export default function Home() {
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
      control: 'textarea',
      parser: (value: any) => (value ? value.toUpperCase() : null) as any,
      uiProps: {
        allowEmptyString: true,
      },
    },
    {
      name: 'number',
      label: 'Number',
      control: 'number',
    },
    {
      name: 'switch',
      label: 'Switch',
      control: 'switch',
    },
    {
      name: 'select',
      label: 'Select',
      control: 'select',
      options: {
        a: 'A',
        b: 'B',
        c: 'C',
      },
      renderOption: ({ value, label }) => (
        <Select.Item key={value} value={value}>
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
        </Select.Item>
      ),
    },
    {
      name: 'checkbox',
      label: 'Checkbox',
      control: 'checkbox',
    },
    {
      name: 'select',
      label: 'Select',
      control: 'select',
      options: {
        a: 'A',
        b: 'B',
        c: 'C',
      },
    },
    {
      name: 'volume',
      label: 'Volume',
      control: 'slider',
      defaultValue: 50,
      helperText: 'Adjust the volume level',
    },
    {
      name: 'range',
      label: 'Price Range',
      control: 'slider',
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
      control: 'slider',
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
          {/* <SwitchControl
          // name='switch'
          description='Description'
          helperText='Helper Text'
          label='Label'
        /> */}

          <FormSchemaFields schema={schema} />

          <div className='my-12' />
          <Separator size='lg' />
          <div className='my-12' />

          <InputControl
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
          <SwitchControl
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
            <InputAddon.Root hasStart hasEnd>
              <InputAddon.Start>
                <UserIcon className='size-4' />
              </InputAddon.Start>
              <InputAddon.Content>
                <Input />
              </InputAddon.Content>
              <InputAddon.End>
                <CheckIcon className='size-4' />
              </InputAddon.End>
            </InputAddon.Root>
            <InputAddon.Root hasEnd>
              <InputAddon.Content>
                <Input placeholder='Search...' />
              </InputAddon.Content>
              <InputAddon.End>
                <Button variant='secondary'>Search</Button>
              </InputAddon.End>
            </InputAddon.Root>

            <InputAddon.Root hasStart hasEnd>
              <InputAddon.Start>$</InputAddon.Start>
              <InputAddon.Content>
                <Input type='number' />
              </InputAddon.Content>
              <InputAddon.End>USD</InputAddon.End>
            </InputAddon.Root>

            <InputAddon.Root size='xs' hasStart hasEnd>
              <InputAddon.Start>$</InputAddon.Start>
              <InputAddon.Content>
                <Input size='xs' type='number' />
              </InputAddon.Content>
              <InputAddon.End>USD</InputAddon.End>
            </InputAddon.Root>

            <InputAddon.Root variant='default' hasStart>
              <InputAddon.Start>$</InputAddon.Start>
              <InputAddon.Content>
                <Input />
              </InputAddon.Content>
            </InputAddon.Root>

            <InputAddon.Root size='lg' variant='outline' hasStart>
              <InputAddon.Start>$</InputAddon.Start>
              <InputAddon.Content>
                <Input size='lg' />
              </InputAddon.Content>
            </InputAddon.Root>

            <InputAddon.Root variant='absolute' hasStart hasEnd>
              <InputAddon.Start>$</InputAddon.Start>
              <InputAddon.Content>
                <Input className='pl-8 pr-12' />
              </InputAddon.Content>
              <InputAddon.End>USD</InputAddon.End>
            </InputAddon.Root>
          </div>
        </Form>
      </div>
    </FormSchemaProvider>
  );
}
