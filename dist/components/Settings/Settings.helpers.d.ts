export declare const customTheme: import("grommet").ThemeType & {
    diagram: {
        extend: string;
    };
};
export declare const connection: (fromTarget: any, toTarget: any, { ...rest }: {
    [x: string]: any;
}) => {
    fromTarget: any;
    toTarget: any;
    anchor: string;
    color: string;
    thickness: string;
    round: boolean;
    type: string;
};
