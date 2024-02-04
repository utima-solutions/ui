const plugin = require('tailwindcss/plugin');
const { merge } = require('ts-deepmerge');

const baseColors = {
  background: '#FFFFFF',
  foreground: '#1f2937',
  muted: {
    bg: '#e5e7eb',
    fg: '#6b7280',
  },
  primary: {
    bg: '#2563eb',
    fg: '#FFFFFF',
  },
  secondary: {
    bg: '#374151',
    fg: '#FFFFFF',
  },
  danger: {
    bg: '#e11d48',
    fg: '#FFFFFF',
  },
  success: {
    bg: '#22c55e',
    fg: '#FFFFFF',
  },
  warning: {
    bg: '#facc15',
    fg: '#000000',
  },
  accent: {
    bg: '#a855f7',
    fg: '#a855f7',
  },
  border: '#d1d5db',
  input: '#d1d5db',
  placeholder: '#6b7280',
  popover: {
    bg: '#f3f4f6',
    fg: '#1f2937',
  },
};

/** @type {import('./plugin').TailwindPluginOptions} */
const defaultOptions = {
  colors: {
    // Base colors
    background: baseColors.background,
    foreground: baseColors.foreground,

    muted: {
      bg: baseColors.muted.bg,
      fg: baseColors.muted.fg,
    },
    primary: {
      bg: baseColors.primary.bg,
      fg: baseColors.primary.fg,
    },
    secondary: {
      bg: baseColors.secondary.bg,
      fg: baseColors.secondary.fg,
    },
    danger: {
      bg: baseColors.danger.bg,
      fg: baseColors.danger.fg,
    },
    success: {
      bg: baseColors.success.bg,
      fg: baseColors.success.fg,
    },
    warning: {
      bg: baseColors.warning.bg,
      fg: baseColors.warning.fg,
    },
    accent: {
      bg: baseColors.accent.bg,
      fg: baseColors.accent.fg,
    },

    // Utility colors
    border: baseColors.border,
    input: baseColors.input,
    placeholder: baseColors.placeholder,

    // Component-specific colors
    popover: {
      bg: baseColors.popover.bg,
      fg: baseColors.popover.fg,
    },
  },
};

/**
 * Tailwind plugin to extend tailwind CSS with custom
 * features and classes.
 */
module.exports = plugin.withOptions(
  () => {},
  /** @param {import('./plugin').TailwindPluginOptions} options */
  (options = {}) => {
    const { colors } = merge(defaultOptions, options);

    return {
      theme: {
        extend: {
          colors: {
            background: colors.background,
            foreground: colors.foreground,
            placeholder: colors.placeholder,
            muted: {
              DEFAULT: colors.muted.bg,
              fg: colors.muted.fg,
            },
            primary: {
              DEFAULT: colors.primary.bg,
              fg: colors.primary.fg,
            },
            secondary: {
              DEFAULT: colors.secondary.bg,
              fg: colors.secondary.fg,
            },
            danger: {
              DEFAULT: colors.danger.bg,
              fg: colors.danger.fg,
            },
            success: {
              DEFAULT: colors.success.bg,
              fg: colors.success.fg,
            },
            warning: {
              DEFAULT: colors.warning.bg,
              fg: colors.warning.fg,
            },
            accent: {
              DEFAULT: colors.accent.bg,
              fg: colors.accent.fg,
            },
            border: colors.border,
            popover: {
              DEFAULT: colors.popover.bg,
              fg: colors.popover.fg,
            },
          },
        },
      },
    };
  },
);
