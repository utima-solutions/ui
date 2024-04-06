// eslint-disable-next-line @typescript-eslint/no-require-imports
import type typeFest = require('type-fest');

/**
 * Typings for the Tailwind CSS plugin options.
 */
type TailwindPluginOptions = {
  borderRadius: {
    radius: string;
  };
  colors: {
    // Base colors
    background: string;
    foreground: string;
    placeholder: string;
    border: string;
    separator: string;

    // Accent colors
    primary: {
      bg: string;
      fg: string;
    };
    secondary: {
      bg: string;
      fg: string;
    };
    muted: {
      bg: string;
      fg: string;
    };

    // State colors
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

    // Accent for item selections (popovers, select, etc.)
    accent: {
      bg: string;
      fg: string;
    };

    // Colors for popup components
    popover: {
      bg: string;
      fg: string;
      border: string;
    };

    // Component specifics
    table: {
      bg: string;
      fg: string;
      border: string;
    };
    input: {
      bg: string;
      fg: string;
      border: string;
    };
  };
};

export default function (
  options: typeFest.PartialDeep<TailwindPluginOptions>,
): void;
