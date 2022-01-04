import { docker, networkName } from '../constants';

export async function findNetwork() {
  const networks = await docker.listNetworks({
    filters: { name: [networkName] },
  });
  return networks.find((net) => net.Name === networkName);
}
