const shareBtn = document.querySelector('.card__content__share');

const shareAddon = document.querySelector('.card__content__socials');

shareBtn.addEventListener('click', () => {
    if(shareAddon.classList == 'card__content__socials active'){
        shareAddon.classList.remove('active');
    }else{
        shareAddon.classList.add('active');
    }
});