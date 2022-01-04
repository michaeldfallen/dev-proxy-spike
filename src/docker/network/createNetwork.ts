import { docker, networkName } from '../constants';

export async function createNetwork() {
  await docker.createNetwork({
    Name: networkName,
  });
}
