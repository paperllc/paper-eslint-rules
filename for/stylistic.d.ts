import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin';
export type PaperStylisticCustomizeOptions = Pick<StylisticCustomizeOptions, 'semi' | 'jsx' | 'arrowParens' | 'quoteProps'>;
export declare function getPaperRulesForStylistic(options: PaperStylisticCustomizeOptions): {
    '@stylistic/jsx-child-element-spacing'?: string;
    '@stylistic/jsx-curly-brace-presence'?: (string | {
        props: string;
        children: string;
        propElementValues: string;
    })[];
    '@stylistic/jsx-curly-newline'?: (string | {
        multiline: string;
        singleline: string;
    })[];
    '@stylistic/jsx-equals-spacing'?: string[];
    '@stylistic/jsx-indent-props'?: (string | number)[];
    '@stylistic/jsx-one-expression-per-line'?: (string | {
        allow: string;
    })[];
    '@stylistic/jsx-pascal-case'?: string;
    '@stylistic/jsx-self-closing-comp'?: string;
    '@stylistic/jsx-sort-props'?: (string | {
        callbacksLast: boolean;
        shorthandFirst: boolean;
        noSortAlphabetically: boolean;
        reservedFirst: boolean;
    })[];
};
export default getPaperRulesForStylistic;
