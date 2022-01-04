#!/usr/bin/env node

import { program } from 'commander';
import {
  logsCommand,
  startCommand,
  statusCommand,
  stopCommand,
} from './commands';

program
  .name('dev-proxy')
  .description(
    'Docker dynamic proxy, proxies requests to local containers or staging.',
  )
  .version('1.0.0');

program.addCommand(startCommand);
program.addCommand(stopCommand);
program.addCommand(logsCommand);
program.addCommand(statusCommand);

program.parse();
