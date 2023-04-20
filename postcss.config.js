import stylint from 'stylelint';
import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import pxtorem from 'postcss-pxtorem';
import postcssNested from 'postcss-nested';
import functions from 'postcss-functions';

export default {
  plugins: [
    functions({
      functions: {},
    }),
    postcssImport({
      path: ['src'],
    }),
    postcssNested(),
    pxtorem({
      rootValue: 16,
      unitPrecision: 5,
      propList: [
        'padding',
        'margin',
        'font',
        'font-size',
        'line-height',
        'letter-spacing',
      ],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    }),
    postcssPresetEnv({
      stage: 0,
      features: {
        'nesting-rules': true,
      },
    }),
    stylint({
      configFile: '.stylelintrc.json',
      files: ['src/**/*.css'],
      failOnError: false,
      fix: true,
      formatter: 'string',
      syntax: 'css',
      cache: true,
      cacheLocation: '.stylelintcache',
      ignoreDisables: false,
      ignorePath: null,
      reportNeedlessDisables: false,
      maxWarnings: -1,
      quiet: false,
      stdin: false,
    }),
  ],
};
