import type typeFest = require('type-fest');

/**
 * Typings for the Tailwind CSS plugin options.
 */
type TailwindPluginOptions = {
  colors: {
    // Base colors
    background: string;
    foreground: string;
    muted: {
      bg: string;
      fg: string;
    };
    primary: {
      bg: string;
      fg: string;
    };
    secondary: {
      bg: string;
      fg: string;
    };
    danger: {
      bg: string;
      fg: string;
    };
    success: {
      bg: string;
      fg: string;
    };
    warning: {
      bg: string;
      fg: string;
    };
    info: {
      bg: string;
      fg: string;
    };
    accent: {
      bg: string;
      fg: string;
    };

    // Utility colors
    border: string;
    input: string;
    placeholder: string;

    // Component-specific colors
    popover: {
      bg: string;
      fg: string;
    };
    table: {
      fg: string;
      bg: string;
      border: string;
    };
    input: {
      border: string;
    };
  };
};

export default function (
  options: typeFest.PartialDeep<TailwindPluginOptions>,
): void;
