function replaceProfilePics() {

    const profilePics = document.querySelectorAll('.feed-shared-actor__avatar-image, .feed-shared-actor__avatar-img');


    profilePics.forEach(pic => {
        if (pic.tagName === 'IMG') {
            pic.src = 'https://img.icons8.com/material-rounded/48/000000/gender-neutral-user.png';  
        } else if (pic.style.backgroundImage) {
            pic.style.backgroundImage = 'url("https://img.icons8.com/material-rounded/48/000000/gender-neutral-user.png")';  
        }
    });
}


replaceProfilePics();
const feed = document.querySelector('.scaffold-finite-scroll__content');
if (feed) {
    const observer = new MutationObserver(replaceProfilePics);
    observer.observe(feed, { childList: true, subtree: true });
}
