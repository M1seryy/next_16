import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// i18n
const withNextIntl = createNextIntlPlugin('./src/pkg/libraries/locale/request.ts');

// next config
const nextConfig: NextConfig = {
    output: 'standalone',

    poweredByHeader: false,
    cacheMaxMemorySize: 100 * 1024 * 1024,

    logging: {},

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'covers.openlibrary.org',
                port: '',
                pathname: '/b/id/**',
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
                pathname: '/**',
            },
        ],
    },

    experimental: {
        reactCompiler: true,
        optimizeServerReact: true,
        optimizePackageImports: [
            '@tanstack/react-query',
            '@tanstack/react-query-devtools',
            'next-intl',
            'react-hook-form',
        ],
        staticGenerationRetryCount: 1,
        staticGenerationMaxConcurrency: 2,
        staticGenerationMinPagesPerWorker: 25,
    },
}

export default withNextIntl(nextConfig);
