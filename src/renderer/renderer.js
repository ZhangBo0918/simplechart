import { createContext } from './context';

export function createRenderer(width, height) {
  console.log(createContext(width, height));
  return createContext(width, height);
}
