const docsify = {
    // basePath: '/',
    auto2top: true,
    coverpage: true,
    executeScript: true,
    loadSidebar: true,
    loadNavbar: true,
    // routerMode: 'history',
    mergeNavbar: true,
    maxLevel: 4,
    subMaxLevel: 1,
    relativePath: true,
    name: 'OKMS',
    search: {
        maxAge: 86400, // 过期时间，单位毫秒，默认一天
        noData: {
            '/en-us/': 'No results!',
            '/': '没有结果!'
        },
        //paths: 'auto',
        paths: ['/', '/software', '/blog', '/english'],
        placeholder: {
            '/en-us/': 'Serach',
            '/': '搜索',
        }
    }
}

window.$docsify = docsify;