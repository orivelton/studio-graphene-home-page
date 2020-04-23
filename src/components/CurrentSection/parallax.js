import { getSection } from "../../helpers";

const parallax = () => {
  const position = -getSection()[1].getBoundingClientRect().top;
  const style = `
    margin-top: ${position}px;
    transition: margin 0.8s ease-in-out
  `;
    
  getSection('.list-menu__type').forEach((item, index) => {
    if(index === 1 || index === 3) item.setAttribute('style', style);
  });
}

export { parallax };