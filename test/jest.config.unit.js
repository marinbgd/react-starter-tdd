module.exports = {
    rootDir: '../',
    'roots': [
        '<rootDir>'
    ],
    'collectCoverageFrom': [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts'
    ],
    'testMatch': [
        '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
        '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'
    ],
    'moduleNameMapper': {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tools/assetsTransformer.js',
        '\\.(css|scss)$': '<rootDir>/tools/assetsTransformer.js'
    },
    'setupFiles': [
        'raf/polyfill'
    ],
    'transformIgnorePatterns': [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
        '^.+\\.module\\.(css|sass|scss)$'
    ]
};
