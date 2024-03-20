import type { GatsbyConfig } from 'gatsby';
import path from 'node:path';

const gatsbyRequiredRules = path.join(
    process.cwd(),
    'node_modules',
    'gatsby',
    'dist',
    'utils',
    'eslint-rules',
);

const config: GatsbyConfig = {
    assetPrefix: '/include/gtrybuild/',
    siteMetadata: {
        title: 'angelsSchool',
        siteUrl: 'https://angels-school.ru/',
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,

    plugins: [
        'gatsby-plugin-webpack-bundle-analyser-v2',
        'gatsby-plugin-root-import',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/shared/assets/img/icon.png',
            },
        },
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                defaults: {
                    formats: ['auto', 'webp'],
                    placeholder: 'dominantColor',
                    quality: 80,
                    breakpoints: [640, 1024],
                    backgroundColor: 'transparent',
                    tracedSVGOptions: {},
                    blurredOptions: {},
                    jpgOptions: {},
                    pngOptions: {},
                    webpOptions: {},
                    avifOptions: {},
                },
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/shared/assets/img',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                rulePaths: [gatsbyRequiredRules],
                stages: ['develop'],
                extensions: ['js', 'jsx', 'ts', 'tsx'],
                exclude: ['node_modules', 'bower_components', '.cache', 'public'],
            },
        },
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
                lang: 'ru',
            },
        },
        {
            resolve: 'gatsby-plugin-minify-classnames',
            options: {
                enable: process.env.NODE_ENV === 'production',
            },
        },
    ],
};

export default config;
