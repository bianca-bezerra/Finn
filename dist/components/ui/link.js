const Link = (href, content) => {
    const link = document.createElement('a');
    link.href = href;
    link.innerText = content;
    link.classList.add('text-blue-700', 'hover:text-blue-800', 'hover:underline');
    return link;
};
export default Link;
