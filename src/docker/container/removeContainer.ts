import { docker } from '../constants';
import { findContainerInfo } from './findContainerInfo';

export async function removeContainer() {
  const containerInfo = await findContainerInfo();
  if (containerInfo) {
    const container = docker.getContainer(containerInfo.Id);
    container.remove();
  }
}
