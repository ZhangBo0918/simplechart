// export function drawRedRect(svg) {
//   const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
//   rect.setAttribute('x', 0);
//   rect.setAttribute('y', 0);
//   rect.setAttribute('fill', 'blue');
//   rect.setAttribute('width', 100);
//   rect.setAttribute('height', 100);
//   svg.appendChild(rect);
// }
// export function drawRedRect(svg) {
//   const rect = svg.querySelector('#rect') || document.createElementNS('http://www.w3.org/2000/svg', 'rect');
//   const attrs = {
//     x: 0, y: 0, fill: 'blue', width: 100, height: 100, id: 'rect',
//   };
//   Object.keys(attrs).forEach((key) => {
//     rect.setAttribute(key, attrs[key]);
//   });
//   svg.appendChild(rect);
// }
export function drawRedRect() {
  return 2;
}
