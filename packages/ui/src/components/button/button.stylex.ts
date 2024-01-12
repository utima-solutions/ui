import * as stylex from '@stylexjs/stylex';

import { colors } from '../../tokens/colors.stylex';

export const button = stylex.defineVars({
  primaryBg: colors.primary500,
});
console.log(button);
