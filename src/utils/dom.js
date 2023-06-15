export const lockBody = () => {
    const body = document.body;

    if (body.classList.contains('locked')) {
        return;
    }

    body.classList.add('locked');
}

export const unlockBody = () => {
    const body = document.body;

    body.classList.remove('locked');
}
