const Select = (id) => {
    const select = document.createElement("select");
    select.classList.add('h-10', 'rounded-lg', 'p-2');
    if (id) {
        select.id = id;
    }
    return select;
};
export default Select;
