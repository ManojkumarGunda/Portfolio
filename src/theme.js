export const theme = {
  colors: {
    brand: {
      // Dark blues and blacks from the image
      primary: '#0a0a0f',
      secondary: '#1a1a2e',
      tertiary: '#16213e',
      // Glowing light blue accents
      accent: '#00d4ff',
      accentLight: '#4ddbff',
      // Green accents
      green: '#00ff88',
      greenLight: '#4dffaa',
      // Darker variations
      dark: '#0f0f23',
      darker: '#050508',
    },
    gray: {
      50: '#f7fafc',
      100: '#edf2f7',
      200: '#e2e8f0',
      300: '#cbd5e0',
      400: '#a0aec0',
      500: '#718096',
      600: '#4a5568',
      700: '#2d3748',
      800: '#1a202c',
      900: '#171923',
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: 'brand.primary',
        color: 'white',
        fontFamily: 'Inter, system-ui, sans-serif',
      },
    },
  },
};

export default theme;
