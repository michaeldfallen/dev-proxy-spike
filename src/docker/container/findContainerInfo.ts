import { docker, containerName } from '../constants';

export async function findContainerInfo() {
  const containerInfos = await docker.listContainers({
    all: true,
    filters: { name: [containerName] },
  });
  return containerInfos.find((info) =>
    info.Names.some((name) => name === `/${containerName}`),
  );
}
