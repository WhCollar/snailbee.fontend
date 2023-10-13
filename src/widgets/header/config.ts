import {RouterEnum} from "shared/lib/router";
import {Item} from "entities/menu";

export const headerHeight = 64;

export const menuItems: Item[]  = [
    {
        label: 'Услуги',
        routeName: RouterEnum.Main
    },
    {
        label: 'Проекты',
        routeName: RouterEnum.Projects
    },
    {
        label: 'Контакты',
        routeName: RouterEnum.Main,
        hash: '#contacts'
    },
    {
        label: 'Бриф',
        routeName: RouterEnum.Briefing,
        asButton: true
    }
];