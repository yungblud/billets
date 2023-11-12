export const useBottomTabBarIconFillColor = ({
  isFocused,
}: {
  isFocused: boolean;
}) => {
  const focusedColor = '#ffffff';
  const unfocusedColor = 'rgb(188, 188, 188)';
  const iconFillColor = isFocused ? focusedColor : unfocusedColor;
  return iconFillColor;
};
