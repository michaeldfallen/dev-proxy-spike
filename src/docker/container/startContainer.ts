import { getOrCreateContainer } from './getOrCreateContainer';

export async function startContainer() {
  const container = await getOrCreateContainer();
  await container.start();
}
