const plugin = require('tailwindcss/plugin');
const getPalette = require('tailwindcss-palette-generator');

const palette = {
  bg: '#ffffff',
  fg: '#09090b',
  muted: '#60637a',

  accent: '#f0f1f7',
  menuAccent: '#cbcdd6',
  placeholder: '#7b7f95',
  border: '#e4e5f1',
  separator: '#e4e5f1',

  primary: '#09090b',
  secondary: '#e2e8f0',
  success: '#22c55e',
  danger: '#ef4444',
  warning: '#eab308',
  info: '#3b82f6',
};

// FIXME? When this is removed, the dependency is not loaded for some reason...
getPalette({
  name: 'danger',
  color: palette.danger,
}).danger;

/**
 * Tailwind plugin to extend tailwind CSS with custom
 * features and classes.
 */
module.exports = plugin.withOptions(
  () => {},
  /** @param {import('./plugin').TailwindPluginOptions} options */
  (options = {}) => {
    const { colors } = options;

    return {
      theme: {
        extend: {
          screens: {
            sidebar: { raw: '(min-width: 640px)' },
            'sidebar-hidden': { raw: '(max-width: 639px)' },
          },
          borderRadius: {
            // TODO
            radius: options?.borderRadius?.radius ?? '.375rem',
          },
          colors: {
            // Base colors
            background: colors?.background ?? palette.bg, // rename to BG and FG
            foreground: colors?.foreground ?? palette.fg, // rename to BG and FG
            muted: colors?.muted ?? palette.muted,
            placeholder: colors?.placeholder ?? palette.placeholder,
            border: colors?.border ?? palette.border,
            separator: colors?.separator ?? palette.separator,
            ring: colors?.ring ?? palette.primary,

            // Key colors
            primary: {
              ...getPalette({
                name: 'primary',
                color: colors?.primary?.bg ?? palette.primary,
              }).primary,
              DEFAULT: colors?.primary?.bg ?? palette.fg,
              fg: colors?.primary?.fg ?? palette.bg,
            },
            secondary: {
              ...getPalette({
                name: 'secondary',
                color: colors?.secondary?.bg ?? palette.secondary,
              }).secondary,
              DEFAULT: colors?.secondary?.bg ?? palette.secondary,
              fg: colors?.secondary?.fg ?? palette.fg,
            },

            // State colors
            danger: {
              ...getPalette({
                name: 'danger',
                color: colors?.danger?.bg ?? palette.danger,
              }).danger,
              DEFAULT: colors?.danger?.bg ?? palette.danger,
              fg: colors?.danger?.fg ?? palette.fg,
            },
            success: {
              ...getPalette({
                name: 'success',
                color: colors?.success?.bg ?? palette.success,
              }).success,
              DEFAULT: colors?.success?.bg ?? palette.success,
              fg: colors?.success?.fg ?? palette.fg,
            },
            warning: {
              ...getPalette({
                name: 'warning',
                color: colors?.warning?.bg ?? palette.warning,
              }).warning,
              DEFAULT: colors?.warning?.bg ?? palette.warning,
              fg: colors?.warning?.fg ?? palette.fg,
            },
            info: {
              ...getPalette({
                name: 'info',
                color: colors?.info?.bg ?? palette.info,
              }).info,
              DEFAULT: colors?.info?.bg ?? palette.info,
              fg: colors?.info?.fg ?? palette.fg,
            },

            // Accent for item selections (popovers, select, etc.)
            accent: {
              ...getPalette({
                name: 'accent',
                color: colors?.accent?.bg ?? palette.accent,
              }).accent,
              DEFAULT: colors?.accent?.bg ?? palette.accent,
              fg: colors?.accent?.fg ?? palette.fg,
            },

            // Colors for popup components
            popover: {
              DEFAULT: colors?.popover?.bg ?? palette.bg,
              fg: colors?.popover?.fg ?? palette.fg,
              border: colors?.popover?.border ?? palette.separator,
            },

            // Component specifics
            // TODO hezčí tabulky
            table: {
              DEFAULT: colors?.table?.bg ?? palette.fg,
              fg: colors?.table?.fg ?? palette.bg,
              border: colors?.table?.border ?? palette.border,
            },
            input: {
              DEFAULT: colors?.input?.bg ?? palette.bg,
              fg: colors?.input?.fg ?? palette.fg,
              border: colors?.input?.border ?? palette.border,
            },
            menu: {
              DEFAULT: colors?.menu?.bg ?? palette.bg,
              fg: colors?.menu?.fg ?? palette.fg,
              border: colors?.menu?.border ?? palette.border,
              accent: {
                DEFAULT: colors?.menu?.accent?.bg ?? palette.menuAccent,
                fg: colors?.menu?.accent?.fg ?? palette.fg,
              },
              submenu: {
                DEFAULT: colors?.menu?.submenu?.bg ?? 'rgba(0, 0, 0, 0.03)',
                fg: colors?.menu?.submenu?.fg ?? palette.fg,
              },
            },
          },
        },
      },
    };
  },
);
