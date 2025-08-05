const COLORS = {
  primary: "#FFCB45",
  secondary: "#EDD69A",
  tertiary: "#FF7754",
  blue: "#3F9FD6",
  gray2: "#C1C0C8",
  white: "#F3F4F8",
  textClr: "#1F1C1C",
  lightWhite: "#FAFAFC",
};

const FONT = {
  Heading: "font-bold",
  subHeading: "font-semibold",
  Poppins: "font-normal",
  montserrat: "font-thin",
  montserratNorm: "font-medium",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  xxxLarge: 64,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS }; 