import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      green: string;
      grey: string;
      brown: string;
      neonGreen: string;
      orange: string;
      yellow: string;
      beige: string;
      white: string;
      neonGreenTransparent: string;
    };
  }
}
