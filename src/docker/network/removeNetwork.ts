import { docker } from '../constants';
import { findNetwork } from './findNetwork';

export async function removeNetwork() {
  const networkInfo = await findNetwork();
  if (networkInfo) {
    const network = docker.getNetwork(networkInfo.Id);
    network.remove();
  }
}
