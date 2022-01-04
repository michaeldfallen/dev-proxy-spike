import Docker from 'dockerode';

export const imageName = 'dev-proxy:dev';
export const containerName = 'dev-proxy';
export const networkName = 'dev-proxy';

export const docker = new Docker();
