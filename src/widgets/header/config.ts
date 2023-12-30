import { RouterEnum } from 'shared/model/router';
import { MenuItem } from 'shared/ui';

export const headerHeight = 64;

export const menuItems: MenuItem[] = [
  {
    label: 'Услуги',
    routeName: RouterEnum.Main,
  },
  {
    label: 'Проекты',
    routeName: RouterEnum.Projects,
  },
  {
    label: 'Контакты',
    routeName: RouterEnum.Main,
    hash: '#contacts',
  },
  {
    label: 'Бриф',
    routeName: RouterEnum.Briefing,
    asButton: true,
  },
];
