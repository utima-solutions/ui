const plugin = require('tailwindcss/plugin');
const { merge } = require('ts-deepmerge');

const baseColors = {
  background: '#ffffff',
  foreground: '#09090b',
  muted: {
    bg: '#e5e7eb',
    fg: '#6b7280',
  },
  primary: {
    bg: '#09090b',
    fg: '#ffffff',
  },
  secondary: {
    bg: '#374151',
    fg: '#ffffff',
  },
  default: {
    bg: '#e5e7eb',
    fg: '#09090b',
  },
  accent: {
    bg: '#a855f7',
    fg: '#ffffff',
  },
  danger: {
    bg: '#e11d48',
    fg: '#ffffff',
  },
  success: {
    bg: '#22c55e',
    fg: '#ffffff',
  },
  info: {
    bg: '#3b82f6',
    fg: '#ffffff',
  },
  warning: {
    bg: '#facc15',
    fg: '#000000',
  },
  border: '#d1d5db',
  placeholder: '#6b7280',
  popover: {
    bg: '#ffffff',
    fg: '#1f2937',
  },
};

/** @type {import('./plugin').TailwindPluginOptions} */
const defaultOptions = {
  colors: {
    // Base colors
    background: baseColors.background,
    foreground: baseColors.foreground,
    placeholder: baseColors.placeholder,
    border: baseColors.border,

    // Variant colors
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
    default: {
      bg: baseColors.default.bg,
      fg: baseColors.default.fg,
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
    info: {
      bg: baseColors.info.bg,
      fg: baseColors.info.fg,
    },
    accent: {
      bg: baseColors.accent.bg,
      fg: baseColors.accent.fg,
    },

    // Component-specific colors
    popover: {
      bg: baseColors.popover.bg,
      fg: baseColors.popover.fg,
    },
    table: {
      bg: baseColors.background,
      fg: baseColors.foreground,
      border: baseColors.border,
    },
    input: {
      border: baseColors.border,
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
            default: {
              DEFAULT: colors.default.bg,
              fg: colors.default.fg,
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
            info: {
              DEFAULT: colors.info.bg,
              fg: colors.info.fg,
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
            table: {
              DEFAULT: colors.table.bg,
              fg: colors.table.fg,
              border: colors.table.border,
            },
            input: {
              border: colors.input.border,
            },
          },
        },
      },
    };
  },
);
