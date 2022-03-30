export const typography = {
  Inter700: 'Inter-Bold',
  Inter500: 'Inter-Medium',
  Inter600: 'Inter-SemiBold',
  Inter400: 'Inter-Regular',

  Montserrat700: 'Montserrat-Bold',
  Montserrat500: 'Montserrat-Medium',
  Montserrat600: 'Montserrat-SemiBold',
};

export default {
  colors: {
    primary: '#E73A5C',
    primaryOpaciy: 'rgba(231, 58, 92, 0.2)',

    success: '#0EC096',
    successOpacity: 'rgba(14, 192, 150,0.2)',

    warning: '#F2994A',
    warningOpacity: 'rgba(242, 153, 74,0.2)',

    danger: '#E73A5C',
    dangerOpacity: 'rgba(231, 58, 92, 0.2)',

    orange: '#f54014',
    orangeOpacity: 'rgba(245, 103, 131, 0.15)',

    gray100: '#F7F7F9',
    gray150: '#F2F2F2',
    gray200: 'rgba(143, 144, 151, 0.5)',
    gray250: 'rgba(143, 144, 151, 0.4)',
    gray300: 'rgba(156, 163, 175, 1)',
    gray400: '#8F9097',
    gray500: '#6B6D74',
    gray700: '#43444A',
    gray900: '#27272A',
    white: '#FFF',
    black: '#000',
    blue500: '#56CCF2',
    skeleton: '#ECEFF1',
    background: '#fff',
    pink: 'rgba(254, 232, 236, 0.7)',
  },

  font: {
    size: 16,
    family: typography.Inter400,
    color: '#27272A',
  },

  button: {
    borderRadius: '200px',
  },
  boxShadowStyles: {
    shadowColor: '#27272A',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 9.11,
    elevation: 12,
  },
};
