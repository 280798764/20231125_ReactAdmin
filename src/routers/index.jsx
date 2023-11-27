

const routerLists = [
    {
        name: '首页',
        permission: 'M000',
        path: '/',
        forceRender: true,
        component: () => import('pages/home')
    }
]

export default routerLists