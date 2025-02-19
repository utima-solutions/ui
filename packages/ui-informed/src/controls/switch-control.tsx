// //-------------------
// // Test component
// //-------------------
// export interface SwitchControlProps
//   extends CommonFieldProps,
//     FormFieldProps,
//     SwitchProps {}

// // TODO make wrappers so we properly show errors? we will se how it will work in the end
// export function SwitchControl({
//   name,
//   label,
//   description,
//   helperText,
//   tooltip,
//   errorMessage,
//   defaultValue,
//   initialValue,
//   onCheckedChange,
// }: SwitchControlProps) {
//   const hasHelpers = description || helperText;

//   return (
//     <FormField
//       name={name}
//       type='checkbox'
//       defaultValue={defaultValue as unknown as boolean}
//       initialValue={initialValue as unknown as boolean}
//       render={({ id, userProps, ref, fieldApi, fieldState }) => {
//         return (
//           <FormItem.Root>
//             <FormItem.Label tooltip={tooltip} htmlFor={id}>
//               {label}
//             </FormItem.Label>
//             <FormItem.Content>
//               <Switch
//                 id={id}
//                 ref={ref}
//                 value={fieldState.value as string}
//                 checked={fieldState.value as boolean}
//                 onCheckedChange={value => {
//                   onCheckedChange?.(value);
//                   fieldApi.setTouched(true);
//                   fieldApi.setValue(value);
//                   fieldApi.setFocused(true);
//                 }}
//                 {...userProps}
//               />
//               {hasHelpers && (
//                 <FormItem.Helpers>
//                   {description && (
//                     <FormItem.Description>{description}</FormItem.Description>
//                   )}
//                   {helperText && (
//                     <FormItem.HelperText>{helperText}</FormItem.HelperText>
//                   )}
//                 </FormItem.Helpers>
//               )}
//               {fieldState.showError && errorMessage && (
//                 <FormItem.Error>{errorMessage}</FormItem.Error>
//               )}
//             </FormItem.Content>
//           </FormItem.Root>
//         );
//       }}
//     />
//   );
// }
// eslint-disable-next-line unicorn/no-empty-file
