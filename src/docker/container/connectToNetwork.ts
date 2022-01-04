import { docker } from '../constants';
import { findNetwork } from '../network/findNetwork';
import { findContainerInfo } from './findContainerInfo';

export async function connectToNetwork() {
  const [containerInfo, networkInfo] = await Promise.all([
    findContainerInfo(),
    findNetwork(),
  ]);
  if (containerInfo && networkInfo) {
    const network = docker.getNetwork(networkInfo.Id);
    network.connect({ Container: containerInfo.Id });
  }
}
