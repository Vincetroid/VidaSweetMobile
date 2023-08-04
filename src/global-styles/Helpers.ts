const hexColorRegex = /^#[0-9A-F]{6}$/i;
const validHexColor = (color: string) => hexColorRegex.test(color);

export const withOpacity = (color: string, opacity: number) => {
  if (!validHexColor(color) || !color) {
    return '#FFFFFF00';
  }
  if (opacity >= 1 || typeof opacity !== 'number') {
    return color + 'FF';
  }
  if (opacity <= 0) {
    return color + '00';
  }

  const hexValue = parseInt(String(opacity * 255), 10)
    .toString(16)
    .toUpperCase();
  const validHexValue = hexValue.length === 1 ? '0' + hexValue : hexValue;

  return color + validHexValue;
};
