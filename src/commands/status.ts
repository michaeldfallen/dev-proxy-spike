import { Command } from 'commander';
import ora from 'ora';
import { doesNetworkExist, isContainerRunning } from '../docker';

export async function checkStatus() {
  const spinner = ora();
  spinner.start();
  const containerRunning = await isContainerRunning();
  const networkExists = await doesNetworkExist();
  if (!containerRunning) {
    spinner.info('container not running');
  }
  if (!networkExists) {
    spinner.info("network doesn't exist");
  }
  if (containerRunning && networkExists) {
    spinner.succeed('dev-proxy running');
  } else {
    spinner.fail('dev-proxy not running');
  }
}

export const statusCommand = new Command('status')
  .description('Check the proxy status')
  .action(checkStatus);
