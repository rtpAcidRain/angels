import React from 'react';
import { GatsbyBrowser, GatsbySSR } from 'gatsby';
import { PageLayout } from './src/app/ui/PageLayout/PageLayout';

export type WrapPageElement =
    | GatsbyBrowser['wrapPageElement']
    | GatsbySSR['wrapPageElement'];
const wrapPageElement: WrapPageElement = ({ element, props }: any) => <PageLayout {...props}>{element}</PageLayout>;
export default wrapPageElement;
