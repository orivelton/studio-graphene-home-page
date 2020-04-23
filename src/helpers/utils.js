const getSection = (selector = 'section') => [...document.querySelectorAll(selector)];

const parallax = () => {
  const margin = document.querySelector('.our-menu').getBoundingClientRect().top;
  const setStyle = (item, index) => item.setAttribute(
    'style',
    `margin-top: ${(index === 0 || index === 2) ? margin : -margin}px`
  );

  getSection('.parallax').forEach((item, index) => setStyle(item, index));
}

export { getSection, parallax };
