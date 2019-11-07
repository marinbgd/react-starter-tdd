module.exports = {
    rootDir: '../',
    'roots': [
        '<rootDir>/src'
    ],
    'preset': 'jest-puppeteer',
    'collectCoverageFrom': [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts'
    ],
    'moduleNameMapper': {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tools/assetsTransformer.js',
        '\\.(css|scss)$': '<rootDir>/tools/assetsTransformer.js'
    },
    'setupFiles': [
        'raf/polyfill'
    ],
    'setupFilesAfterEnv': [
        '<rootDir>/test/jest.setupIntegrationTests.js'
    ],
    'testMatch': [
        '<rootDir>/src/**/__itests__/**/*.{js,jsx,ts,tsx}',
        '<rootDir>/src/**/*.{ispec,itest}.{js,jsx,ts,tsx}'
    ],
    'transformIgnorePatterns': [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
        '^.+\\.module\\.(css|sass|scss)$'
    ]
};
