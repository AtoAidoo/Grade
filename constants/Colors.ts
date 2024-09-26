/**
 * Below are the colors that are used in the app. The colors are defined for both light and dark modes.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/),
 * [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#FFA004';
const tintColorDark = '#FFA004';

// Define a type alias for the possible navBar values
type NavBarColor = 'light' | 'dark';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    navBar: 'dark' as NavBarColor, // Ensure consistent type
    inputbackground: 'rgb(237, 237, 237)',
    placeholder: 'rgb(128, 128, 128)',
    preview: '#c7c7c7',
  },
  dark: {
    text: '#ECEDEE',
    background: '#161622',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    navBar: 'light' as NavBarColor, // Ensure consistent type
    inputbackground: '#272730',
    placeholder: '#797777',
    preview: '#2e2e2e',
  },
};
