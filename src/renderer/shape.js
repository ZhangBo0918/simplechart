import { applyAttribute, createSVGElement, mount } from './utils';

export function shape(type, context, attributes) {
  const { group } = context;
  const el = createSVGElement(type);
  applyAttribute(el, attributes);
  mount(group, el);
  return el;
}
