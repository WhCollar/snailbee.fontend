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
        routeName: 'works'
    },
    {
        label: 'Контакты',
        routeName: 'main',
        hash: '#contacts'
    },
    {
        label: 'Бриф',
        routeName: 'briefing',
        asButton: true
    }
];