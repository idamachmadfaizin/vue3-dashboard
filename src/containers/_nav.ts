export interface INavParent {
    text: string,
    to?: string,
    icon?: string,
    children?: INavChildren[]
}
export interface INavChildren {
    text: string
    to: string
    icon?: string
    badge?: {
        text: string,
        color: string,
        class: string,
    },
    items?: INavItem[],
}

export interface INavItem {
    text: string
    to: string
}

export const navs: INavParent[] = [
    {
        text: 'Dashboard',
        icon: 'bx bxs-dashboard',
        to: '/dashboard'
    },
    {
        text: 'PROFILE',
        children: [
            {
                text: 'Home',
                to: '/home',
                icon: 'bx bx-home',
            },
            {
                text: 'Profile',
                to: '/profile',
                icon: 'bx bx-user',
                items: [
                    { text: 'Password', to: '/profile/password' },
                    { text: 'Mail', to: '/profile/mail' },
                    { text: 'Accounts', to: '/profile/account' },
                ]
            },
            {
                text: 'Messages',
                to: '/message',
                icon: 'bx bx-message-rounded',
            },
        ]
    },
]

export const navFoots: INavChildren[] = [
    {
        text: 'Log out',
        to: '/logout',
        icon: 'bx bx-log-out',
    }
]