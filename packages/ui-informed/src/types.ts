/**
 * The informed types are not up to date so we kind of need to soply our own.
 * All is based on https://github.com/teslamotors/informed/blob/master/index.d.ts
 *
 * FieldProps are for example missing mask, clean definitions and others.
 *
 * We could probably incorporate this into actual PR into informed if the guys
 * are interested when the types are completed.
 */

import type { FieldState, FormController, RelevantParams } from 'informed';

export interface FieldProps {
  id: string;
  name: string;
  type?: string;
  initialValue?: any;
  defaultValue?: any;
  validate?: (value: any, values: Record<string, any>) => any;
  relevant?: (relevantParams: RelevantParams) => boolean;
  onNativeChange?: (
    fieldState: FieldState,
    event: React.SyntheticEvent,
  ) => void;
  onChange?: (fieldState: FieldState, event: React.SyntheticEvent) => void;
  onBlur?: (fieldState: FieldState, event: React.SyntheticEvent) => void;
  onFocus?: (fieldState: FieldState, event: React.SyntheticEvent) => void;
  onValueChange?: (formState: FieldState) => void;
  gatherData?: (value: any) => Promise<any>;
  asyncValidate?: (value: any) => Promise<any>;
  validateOn?:
    | 'change'
    | 'blur'
    | 'change-blur'
    | 'change-submit'
    | 'blur-submit'
    | 'submit';
  validateWhen?: string[] | ((scope?: string) => string[]);
  validateOnMount?: boolean;
  modifyOnMount?: boolean;
  maskOnBlur?: boolean;
  validateModified?: boolean;
  keepState?: boolean;
  formatterDependencies?: any[];
  yupSchema?: any;
  keepStateIfRelevant?: boolean;
  initializeValueIfPristine?: boolean;
  remember?: boolean;
  maintainCursor?: boolean;
  formController?: FormController;
  allowEmptyString?: boolean;
  emptyValue?: any;
  inputRef?: React.RefObject<any>;
  inputRefs?: React.RefObject<any>[];
  showErrorIfError?: boolean;
  showErrorIfTouched?: boolean;
  showErrorIfDirty?: boolean;
  errorMessage?: string;
  gatherOnMount?: boolean;
  gatherOnBlur?: boolean;
  relevanceWhen?: string[];
  relevanceDeps?: any[];
  required?: string | boolean;
  validateDeps?: any[];
  initialize?: (value: any) => any;
  parser?: (value: any) => any;
  clean?: (value: any) => any;
  mask?: (value: any) => any;
  formatter?:
    | Array<string | RegExp | Function>
    | string
    | Object
    | ((value: any) => Array<string | RegExp | Function>);
}
