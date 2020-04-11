import t from 'prop-types';
declare const Button: {
    ({ children, type }: any): JSX.Element;
    propTypes: {
        type: t.Requireable<string>;
    };
    defaultProps: {
        type: string;
    };
};
export default Button;
