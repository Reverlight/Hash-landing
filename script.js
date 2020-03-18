
function invokeHashChangeEvent(hash) {
    window.location.hash = '';
    window.location.hash = hash;
    return true
}


window.addEventListener('load', () => {
    const infoItems = document.querySelectorAll('.info-item')
    const menuItems = document.querySelectorAll('.item');
    const localStorageHash = localStorage.getItem('hash');

    invokeHashChangeEvent(window.location.hash)


    if ((localStorageHash === null) && (window.location.hash === '')) {
        window.location.hash = 'html-item';
    }

    if (localStorageHash != null) {
        // Delete # sybmol from localStorageHash
        window.location.hash = localStorageHash.replace('#', '');

    }



    window.addEventListener('hashchange', (e) => {
        const hash = window.location.hash

        if (hash != '') {
            localStorage.setItem('hash', window.location.hash)
        }



        const currentMenuItemChoosen = document.querySelector(`a[href='${hash}']`);

        const currentInfoItemChoosen = document.querySelector(hash)


        menuItems.forEach((menuItem) => {
            menuItem.classList.remove('active');
        })

        infoItems.forEach((infoItem) => {
            infoItem.classList.remove('active');

        })


        currentInfoItemChoosen.classList.add('active')
        currentMenuItemChoosen.classList.add('active')


    })
})