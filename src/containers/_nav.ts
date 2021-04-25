export interface INavParent {
    name: string
    children: INavChildren[]
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
        name: 'PROFILE',
        children: [
            {
                text: 'Home',
                to: '#home',
                icon: 'bx bx-home',
            },
            {
                text: 'Profile',
                to: '#profile',
                icon: 'bx bx-user',
                items: [
                    { text: 'Password', to: '#password' },
                    { text: 'Mail', to: '#mail' },
                    { text: 'Accounts', to: '#account' },
                ]
            },
            {
                text: 'Messages',
                to: '#message',
                icon: 'bx bx-message-rounded',
            },
        ]
    },
]

export const navFoots: INavChildren[] = [
    {
        text: 'Log out',
        to: '#logout',
        icon: 'bx bx-log-out',
    }
]