const $cdn = (function () {
    const css = ['<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/vue.css">'];
    const js = [
        '<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>',
        '<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/external-script.min.js"></script>',
        '<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/search.min.js"></script>',
        '<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js"></script>',
        '<script src="//cdn.jsdelivr.net/npm/docsify-copy-code"></script>'
    ];

    return { css, js };
}());