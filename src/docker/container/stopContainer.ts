import { docker } from '../constants';
import { findContainerInfo } from './findContainerInfo';

export async function stopContainer() {
  const containerInfo = await findContainerInfo();
  if (!containerInfo) {
    return;
  }
  const container = docker.getContainer(containerInfo.Id);
  await container.stop();
}
