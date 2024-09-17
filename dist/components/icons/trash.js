const TrashIcon = () => {
    const trashIcon = document.createElement("img");
    trashIcon.src = './assets/trash.svg';
    trashIcon.classList.add('cursor-pointer', 'hover:text-red-500');
    return trashIcon;
};
export default TrashIcon;
