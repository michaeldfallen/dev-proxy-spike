import { Command } from 'commander';
import ora from 'ora';
import {
  createNetwork,
  doesNetworkExist,
  isContainerRunning,
  startContainer,
} from '../docker';

export async function startProxy() {
  const spinner = ora();

  spinner.start();
  if (await isContainerRunning()) {
    spinner.succeed('dev-proxy already running');
    return;
  }

  spinner.start();
  if (!(await doesNetworkExist())) {
    spinner.start('Creating dev-proxy network');
    await createNetwork();
    spinner.succeed('Created dev-proxy network');
  }

  spinner.start('Starting dev-proxy');
  await startContainer();
  spinner.succeed('Started dev-proxy');
}

export const startCommand = new Command('start')
  .description('Start the proxy')
  .action(startProxy);
