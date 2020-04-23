const getSection = (selector = 'section') => [...document.querySelectorAll(selector)];

const parallax = () => {
  const position = document.querySelector('.our-menu').getBoundingClientRect().top;
  const setStyle = (item, index) => item.setAttribute(
    'style',
    `margin-top: ${(index === 0 || index === 2) ? position : -position}px`
  );

  getSection('.parallax').forEach((item, index) => setStyle(item, index));
}

export { getSection, parallax };
