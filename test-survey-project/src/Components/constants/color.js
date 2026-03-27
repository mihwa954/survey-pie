//변하지 않는, 고정적인 값들을 모아놓는 곳
//현재는 버튼들의 상태에 따라서 색상만 바뀌는 형식이기 때문에
//디자인으로 치면 컬러칩들을 모아놓는 것 같은????

export const PRIMARY = {
  BUTTON: {
    DEFAULT: {
      COLOR: '#FFFFFF',
      BACKGROUND: '#6542F1',
    },
    HOVER: {
      COLOR: '#FFFFFF',
      BACKGROUND: '#9982F4',
    },

    PRESSED: {
      COLOR: '#FFFFFF',
      BACKGROUND: '#4B31B0',
    },

    DISABLED: {
      COLOR: '#FFFFFF',
      BACKGROUND: '#EDEDED',
    },
  },
};
export const SECONDARY = {
  BUTTON: {
    DEFAULT: {
      COLOR: '#3A3A3A',
      BACKGROUND: '#DEDEDE',
    },
    HOVER: {
      COLOR: '#3A3A3A',
      BACKGROUND: '#F3F3F3',
    },

    PRESSED: {
      COLOR: '#3A3A3A',
      BACKGROUND: '#B8B7B9',
    },

    DISABLED: {
      COLOR: '#3A3A3A',
      BACKGROUND: '#EDEDED',
    },
  },
};
export const TERTIARY = {
  BUTTON: {
    DEFAULT: {
      COLOR: '#6542F1',
      BACKGROUND: '#6542F1',
      BORDER: '#6542F1',
    },
    HOVER: {
      COLOR: '#9982F4',
      BACKGROUND: '#9982F4',
      BORDER: '#9982F4',
    },

    PRESSED: {
      COLOR: '#4B31B0',
      BACKGROUND: '#4B31B0',
      BORDER: '#4B31B0',
    },

    DISABLED: {
      COLOR: '#D0CDCD',
      BACKGROUND: '#F6F6F6',
      BORDER: '#EDEDED',
    },
  },
};
