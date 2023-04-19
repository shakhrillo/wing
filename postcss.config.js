import stylint from 'stylelint';
export default {
  syntax: 'postcss-scss',
  plugins: [
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
