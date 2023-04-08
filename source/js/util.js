export const createElement = (template) => {
  const element = document.createElement('DIV');
  element.innerHTML = template;

  return element.children[0];
};
