import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        mainbgcolor: string,
        subbgcolor: string,
        impacttextcolor: string,
        normaltextcolor: string,
        hovertextcolor: string,
        bordercolor: string,
        mainboxborder: string,
        grayborder: string,
    }
}