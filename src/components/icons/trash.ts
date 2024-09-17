const TrashIcon = () => {
    const trashIcon = document.createElement("img");
    trashIcon.src = './assets/trash.svg';
    trashIcon.classList.add('cursor-pointer');

    trashIcon.addEventListener('mouseover', () => {
        trashIcon.style.filter = 'invert(32%) sepia(91%) saturate(4745%) hue-rotate(-357deg) brightness(95%) contrast(90%)';
    });
    trashIcon.addEventListener('mouseout', () => {
        trashIcon.style.filter = 'none';
    });
    return trashIcon;
}

export default TrashIcon;
