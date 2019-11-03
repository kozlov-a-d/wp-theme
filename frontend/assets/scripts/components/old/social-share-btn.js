(function initSocialShare() {
    if ($('[data-share-target]').length > 0) {
        const defaults = {
            url: window.location,
            title: document.title,
            description: document.querySelector("meta[name='description']").getAttribute('content'),
        };

        // клик по ссылке
        $('body').on('click', 'a[data-share-target]', (e) => {
            const target = $(e.target).attr('data-share-target');
            switch (target) {
            case 'facebook':
                window.open(`https://www.facebook.com/sharer.php?u=${defaults.url}`, '_blank', 'width=600,height=400');
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?url=${defaults.url}&text=${defaults.title}`, '_blank', 'width=600,height=400');
                break;
            case 'plus.google':
                window.open(`https://plus.google.com/share?url=${defaults.url}`, '_blank', 'width=410,height=480');
                break;
            case 'pinterest':
                window.open(`//pinterest.com/pin/create/link/?url=${defaults.url}&amp;description=${defaults.description}`, '_blank', 'width=920,height=700');
                break;
            case 'whatsapp':
                window.open(`whatsapp://send?text=${defaults.title} (${defaults.url})`);
                break;
            default:
                console.warn(`Соц сеть ${target} не поддерживается в function initSocialShare()`);
            }
            return false;
        });
    }
}());
