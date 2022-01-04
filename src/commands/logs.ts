import { Command } from 'commander';
import ora from 'ora';
import { isContainerRunning } from '../docker';
import { attachStdout } from '../docker/container/attachStdout';

export async function showLogs({ follow }: { follow: boolean }) {
  process.on('SIGINT', () => {
    process.stdout.write('\n');
    const spinner = ora({ text: 'Done' });
    spinner.succeed();
    process.exit(0);
  });

  const containerRunning = await isContainerRunning();
  if (!containerRunning) {
    const spinner = ora({ text: 'dev-proxy is not running' });
    spinner.fail();
    process.exit(1);
  }

  await attachStdout({ follow });
}

export const logsCommand = new Command('logs')
  .description('Output logs from the proxy')
  .option('-f, --follow', 'Tail the output logs', false)
  .action(showLogs);
