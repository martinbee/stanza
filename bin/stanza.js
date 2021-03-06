#! /usr/bin/env node
/* eslint-disable  no-console */

const program = require('commander');
const { version, description } = require('../package.json');

program
  .version(version)
  .description(description);

program
  .command('create <name>', 'Create a meteor project with react and redux configured.')
  .alias('c');

program
  .command('update', 'Update a meteor project with design.zip from webflow.')
  .alias('u');

program.on('--help', () => {
  console.log('  Examples:');
  console.log('');
  console.log('    $ stanza c');
  console.log('    $ stanza u');
  console.log('');
});

program.parse(process.argv);
