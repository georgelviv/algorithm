import Jasmine from 'jasmine';
import JasmineConsoleReporter from 'jasmine-console-reporter';
import someSpec1 from '../src/test.spec'

const jasmine = new Jasmine();

jasmine.loadConfig({
  spec_dir: '../src/',
  spec_files: [
    './**/*spec.mjs',
  ]
});

jasmine.env.clearReporters();
jasmine.addReporter(new JasmineConsoleReporter({
    colors: true,
    cleanStack: true,
    verbosity: 4,
    listStyle: 'indent',
    activity: false
}))

someSpec1()
jasmine.execute();