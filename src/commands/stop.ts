import { Command } from 'commander';
import ora from 'ora';
import { isContainerRunning, stopContainer } from '../docker';
import { removeContainer } from '../docker/container/removeContainer';

export async function stopProxy() {
  const spinner = ora();
  spinner.start();

  if (!(await isContainerRunning())) {
    spinner.info('dev-proxy is not running');
    return;
  }

  spinner.text = 'Stopping dev-proxy';
  await stopContainer();

  spinner.text = 'Removing container';
  await removeContainer();

  spinner.succeed('Stopped dev-proxy');
}

export const stopCommand = new Command('stop')
  .description('Stop the proxy')
  .action(stopProxy);
