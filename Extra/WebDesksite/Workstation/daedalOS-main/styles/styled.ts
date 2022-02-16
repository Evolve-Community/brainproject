import "styled-components";

import type colors from "styles/defaultTheme/colors";
import type formats from "styles/defaultTheme/formats";
import type sizes from "styles/defaultTheme/sizes";
import type wallpaper from "styles/defaultTheme/wallpaper";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof colors;
    formats: typeof formats;
    sizes: typeof sizes;
    wallpaper?: typeof wallpaper;
  }
}
