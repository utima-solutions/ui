/* eslint-disable react/no-multi-comp */
import type { ComponentPropsWithoutRef } from 'react';

import { Label, type LabelProps } from '../label/Label';

export interface FormItemRootProps extends ComponentPropsWithoutRef<'div'> {}

export function FormItemRoot({ ...restProps }: FormItemRootProps) {
  return <div className='gap-2 flex flex-col' {...restProps} />;
}

export interface FormItemContentProps extends ComponentPropsWithoutRef<'div'> {}

export function FormItemContent({ ...restProps }: FormItemContentProps) {
  return <div className='flex items-center gap-2' {...restProps} />;
}

export interface FormItemLabelProps extends LabelProps {}

export function FormItemLabel({ ...restProps }: FormItemLabelProps) {
  return (
    <div className='gap-2 flex flex-col'>
      <Label {...restProps} />
    </div>
  );
}

export interface FormItemMessageProps extends ComponentPropsWithoutRef<'div'> {}

export function FormItemMessage({ ...restProps }: FormItemMessageProps) {
  return <div className='text-xs text-danger' {...restProps} />;
}

export interface FormItemDescriptionProps
  extends ComponentPropsWithoutRef<'div'> {}

export function FormItemDescription({
  ...restProps
}: FormItemDescriptionProps) {
  return <div className='text-xs text-muted-fg' {...restProps} />;
}
