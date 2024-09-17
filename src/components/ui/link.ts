const Link = (href: string, content?: string) => {
    const link = document.createElement('a');
    link.href = href;
    link.innerText = content ?? "";
    link.classList.add('text-purple-600','hover:text-purple-700','no-underline')
    return link;
}
export default Link;