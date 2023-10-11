import {Item} from "entities/menu";

export const headerHeight = 64;

export const title = 'SnailBee Inc.';

export const menuItems: Item[]  = [
    {
        label: 'Услуги',
        routeName: 'main'
    },
    {
        label: 'Работы',
        routeName: 'main'
    },
    {
        label: 'Контакты',
        routeName: 'main'
    },
    {
        label: 'Бриф',
        routeName: 'main',
        asButton: true
    }
];