import { docker, imageName, containerName } from '../constants';
import { findContainerInfo } from './findContainerInfo';

export async function getOrCreateContainer() {
  const containerInfo = await findContainerInfo();
  if (containerInfo) {
    return docker.getContainer(containerInfo.Id);
  }
  return await docker.createContainer({
    Image: imageName,
    name: containerName,
    ExposedPorts: {
      '80/tcp': {},
    },
    HostConfig: {
      Binds: ['/var/run/docker.sock:/tmp/docker.sock:ro'],
      PortBindings: {
        '80/tcp': [
          {
            HostPort: '80',
          },
        ],
      },
    },
  });
}
