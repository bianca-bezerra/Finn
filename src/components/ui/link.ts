const Link = (href: string, content?: string) => {
    const link = document.createElement('a');
    link.href = href;
    link.innerText = content ?? "";
    link.classList.add('text-amber-300','hover:text-amber-400','no-underline')
    return link;
}
export default Link;