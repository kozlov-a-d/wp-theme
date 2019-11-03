checkWhatsappLinks = () => {
    const urls = ['https://api.whatsapp.com/', 'https://wa.me/'];
    urls.forEach((element) => {
        let links = document.querySelectorAll(`a[href^="${element}"]`);
        links.forEach((link) => {
            if (link.getAttribute('target') !== '_blank') {
                link.style.setProperty('outline', '4px solid #f00', 'important');
                console.warn('Для ссылок на whatsapp нужно указывать атрибут target="_blank" для ссылки ', link);
            }
        });
    });
}

checkExternalLinks = () => {
    let links = document.querySelectorAll(`a`);
    links.forEach((link) => {
        if (  link.hostname !== location.hostname 
            && link.hostname !== 'via.placeholder.com'
            && link.hostname !== 'api.whatsapp.com' 
            && link.hostname !== 'wa.me'
            && link.hostname !== 'scontent.cdninstagram.com'
            && link.hostname !== 'yandex.ru'
            && link.hostname.length) {

            if (link.getAttribute('target') !== '_blank') {
                link.style.setProperty('outline', '4px solid #f00', 'important');
                console.warn('Похоже это внешняя ссылка. Добавьте атрибут target="_blank" для ссылки ', link);
            }

            if (link.getAttribute('rel') !== 'noreferrer noopener') {
                link.style.setProperty('outline', '4px solid #f00', 'important');
                console.warn('Похоже это внешняя ссылка. Добавьте атрибут rel="noreferrer noopener" для ссылки ', link);
            }
        }
    });
}

window.test = () => {
    checkWhatsappLinks();
    checkExternalLinks();
};