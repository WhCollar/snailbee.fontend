export interface Item {
    label: string
    routeName: string
    asButton?: boolean
}

export  interface Props {
    items: Item[]
}