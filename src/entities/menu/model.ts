﻿export interface Item {
    label: string
    routeName: string
    hash?: string
    asButton?: boolean
}

export  interface Props {
    items: Item[]
}