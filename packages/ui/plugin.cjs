const plugin = require('tailwindcss/plugin');

const palette = {
  bg: '#ffffff',
  fg: '#09090b',
  mutedFg: '#60637a',

  accent: '#f0f1f7',
  placeholder: '#7b7f95',
  border: '#e4e5f1',
  separator: '#e4e5f1',

  primary: '#09090b',
  secondary: '#60637a',
  muted: '#cbcdd6',
  success: '#4ade80',
  danger: '#ef4444',
  warning: '#facc15',
  info: '#60a5fa',
};

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
          colors: {
            // Base colors
            background: colors?.background ?? palette.bg,
            foreground: colors?.foreground ?? palette.fg,
            placeholder: colors?.placeholder ?? palette.placeholder,
            border: colors?.border ?? palette.border,
            separator: colors?.separator ?? palette.separator,
            ring: colors?.ring ?? palette.primary,

            // Key colors
            primary: {
              DEFAULT: colors?.primary?.bg ?? palette.fg,
              fg: colors?.primary?.fg ?? palette.bg,
            },
            secondary: {
              DEFAULT: colors?.secondary?.bg ?? palette.secondary,
              fg: colors?.secondary?.fg ?? palette.bg,
            },
            muted: {
              DEFAULT: colors?.muted?.bg ?? palette.muted,
              fg: colors?.muted?.fg ?? palette.mutedFg,
            },

            // State colors
            danger: {
              DEFAULT: colors?.danger?.bg ?? palette.danger,
              fg: colors?.danger?.fg ?? palette.fg,
            },
            success: {
              DEFAULT: colors?.success?.bg ?? palette.success,
              fg: colors?.success?.fg ?? palette.fg,
            },
            warning: {
              DEFAULT: colors?.warning?.bg ?? palette.warning,
              fg: colors?.warning?.fg ?? palette.fg,
            },
            info: {
              DEFAULT: colors?.info?.bg ?? palette.info,
              fg: colors?.info?.fg ?? palette.fg,
            },

            // Accent for item selections (popovers, select, etc.)
            accent: {
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
          },
        },
      },
    };
  },
);
