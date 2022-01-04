import { findNetwork } from './findNetwork';

export async function doesNetworkExist() {
  const networkInfo = await findNetwork();
  return !!networkInfo;
}
