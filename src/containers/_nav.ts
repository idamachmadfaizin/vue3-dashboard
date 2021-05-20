export interface INav {
    text: string
    to?: string
    icon?: string
    children?: INavGroupChildren[]
}

export interface INavItem {
    text: string
    to: string
    icon: string
}

export interface INavGroupChildren {
    text: string
    to?: string
    icon: string
    items?: INavDropdownItem[]
    badge?: {
        text: string,
        color: string,
        class: string,
    }
}

export interface INavDropdownItem {
    text: string
    to: string
}

export const navs: INav[] = [
    {
        text: 'Dashboard',
        icon: 'bx bxs-dashboard',
        to: '/dashboard',
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

export const navFoots: INavItem[] = [
    {
        text: 'Log out',
        to: '/logout',
        icon: 'bx bx-log-out',
    }
]
