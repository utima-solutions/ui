'use client';

import { Button } from '@utima/ui';
import { Form, InputControl } from '@utima/ui-informed';
import { Devtools } from '@utima/ui-informed/devtools';
import { z } from 'zod';

const clean = (value: string) => {
  console.log('value', value);

  return value.replaceAll(/[!#$%&()*@^]/g, '');
};

const mask = (value: string) => value.toUpperCase();
const parser = (value: string) => value.toLowerCase();

export default function Home() {
  return (
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
        <InputControl
          name='input'
          required='Custom required'
          description='Description'
          fieldType='number'
          helperText='Helper Text'
          zodSchema={z.number().nullish()}
          label='Label'
          helperText='Helper Text'
          // clean={clean}
          // mask={mask}
          // parser={parser}
          allowEmptyString
        />

        <Button type='submit'>Submit</Button>
        <Devtools />
      </Form>
    </div>
  );
}
