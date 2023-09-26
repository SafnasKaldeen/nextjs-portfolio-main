// this module for downloading fonts from web and local storage... in this way we can seperate the font from the component and make it reusable. also we can reduce the unwanted font from the bundle by using the essential font only when and where its necessary.
import { Inter, Lora, Source_Sans_3 } from "next/font/google";

// define your variable fonts
const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
// define 2 weights of a non-variable font
const sourceCodePro400 = Source_Sans_3({ weight: "400", subsets: ["latin"] });
const sourceCodePro700 = Source_Sans_3({ weight: "700", subsets: ["latin"] });

export { inter, lora, sourceCodePro400, sourceCodePro700 };
