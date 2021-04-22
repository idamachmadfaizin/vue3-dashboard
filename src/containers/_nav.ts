export interface IParent {
    text: string
    to?: string;
    icon?: string;
    badge?: {
        text: string,
        color: string,
        class: string,
    },
    items?: IChildren[],
}

export interface IChildren {
    text: string
    to: string
}

export const navs: IParent[] = [
    {
        text: 'PROFILE'
    },
    {
        text: 'Home',
        to: '#',
        icon: 'bx bx-home',
    },
    {
        text: 'Profile',
        to: '#',
        icon: 'bx bx-user',
        items: [
            { text: 'Password', to: '#' },
            { text: 'Mail', to: '#' },
            { text: 'Accounts', to: '#' },
        ]
    },
    {
        text: 'Messages',
        to: '#',
        icon: 'bx bx-message-rounded',
    },
]

export const navFoots: IParent[] = [
    {
        text: 'Log out',
        to: '#',
        icon: 'bx bx-log-out',
    }
]