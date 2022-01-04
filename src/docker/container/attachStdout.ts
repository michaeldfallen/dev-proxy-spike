import { Readable } from 'stream';
import Dockerode from 'dockerode';
import { docker } from '../constants';
import { findContainerInfo } from './findContainerInfo';

async function getLogs(
  container: Dockerode.Container,
  { follow = false }: { follow: boolean },
) {
  const streamOrBuffer = await container.logs({
    stdout: true,
    stderr: true,
    follow,
    tail: follow ? undefined : 10,
  });

  if (follow) {
    return streamOrBuffer;
  } else {
    return Readable.from(streamOrBuffer as unknown as Buffer);
  }
}

export async function attachStdout({
  follow = false,
}: { follow?: boolean } = {}) {
  const containerInfo = await findContainerInfo();
  if (containerInfo) {
    const container = docker.getContainer(containerInfo.Id);
    const logs = await getLogs(container, { follow });
    container.modem.demuxStream(logs, process.stdout, process.stderr);
  }
}
