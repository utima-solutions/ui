import { twOverrides } from '@/overrides';

import { globalDef } from '../global.styles';

export const toastDef = twOverrides(
  {
    toast:
      '[&>[data-icon]]:float-left [&>[data-icon]]:mr-3 [&>[data-icon]]:mt-1 group p-4 rounded-radius toast bg-background shadow-lg border-border text-primary drop-shadow w-full',
    title: 'group-[.toaster]:font-bold group-[.toaster]:text-sm',
    description: 'group-[.toaster]:text-sm',
    actionButton: `${globalDef.ring} text-xs font-medium px-2 py-1 float-right rounded-radius group-[.toast]:!ml-2 group-[.toast]:mt-2 group-[.toast]:bg-primary hover:group-[.toast]:opacity-85 active:group-[.toast]:opacity-75 group-[.toast]:text-primary-fg`,
    cancelButton: `${globalDef.ring} text-xs font-medium px-2 py-1 float-right rounded-radius group-[.toast]:!ml-2 group-[.toast]:mt-2 group-[.toast]:bg-muted hover:group-[.toast]:opacity-85 active:group-[.toast]:opacity-75 group-[.toast]:text-muted-fg`,
    closeButton: `${globalDef.ring} text-xs bg-background`,
    error:
      '[&>[data-icon]]:text-danger [&_[data-title]]:text-danger [&>[data-icon]]:mt-0.5 [&>[data-button]]:!bg-danger [&>[data-cancel]]:!bg-danger/15 [&>[data-cancel]]:!text-danger',
    success:
      '[&>[data-icon]]:text-success [&_[data-title]]:text-success [&>[data-icon]]:mt-0.5 [&>[data-button]]:!bg-success [&>[data-cancel]]:!bg-success/15 [&>[data-cancel]]:!text-success',
    warning:
      '[&>[data-icon]]:text-warning [&_[data-title]]:text-warning [&>[data-icon]]:mt-0.5 [&>[data-button]]:!bg-warning [&>[data-cancel]]:!bg-warning/15 [&>[data-cancel]]:!text-warning',
    info: '[&>[data-icon]]:text-info [&_[data-title]]:text-info [&>[data-icon]]:mt-0.5 [&>[data-button]]:!bg-info [&>[data-cancel]]:!bg-info/15 [&>[data-cancel]]:!text-info',
  },
  'toast',
);
