import { findContainerInfo } from './findContainerInfo';

export async function isContainerRunning() {
  const containerInfo = await findContainerInfo();
  return containerInfo && containerInfo.State === 'running';
}
