export const scrollToElementByRef = (ref) => {
    if (!ref || !ref.current) {
        return;
    }

    ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
    });
};