import {Client, Work, Specialization} from "shared/global";
import {useQuery} from "@tanstack/vue-query";
import {ClientInstance} from "shared/client.instance";

export const config = {
    companyName: 'SnailBee Inc.',
    phone: '+7 922 402 39 28',
    email: 'mail@snailbee.ru',
    telegram: 'Tg',
    specializations: [
        {
            label: 'Разработка сайтов и веб-сервисов'
        },
        {
            label: 'Разработка и кастомизация внутренних цифровых сервисов'
        },
        {
            label: 'Разработка сайтов и веб-сервисов'
        },
        {
            label: 'Разработка и кастомизация внутренних цифровых сервисов'
        },
        {
            label: 'Разработка сайтов и веб-сервисов'
        }
    ] as Specialization[],
    ourWorks: [
        {
            title: '0',
            imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
            path: ''
        },
        {
            title: '1',
            imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
            path: ''
        },
        {
            title: '2',
            imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
            path: ''
        },
        {
            title: '3',
            imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
            path: ''
        },
        {
            title: '4',
            imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
            path: ''
        },
        {
            title: '5',
            imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
            path: ''
        },
        {
            title: '6',
            imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
            path: ''
        },
        {
            title: '7',
            imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
            path: ''
        },
        {
            title: '8',
            imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
            path: ''
        },
        {
            title: '9',
            imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
            path: ''
        },
        {
            title: '10',
            imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
            path: ''
        },
        {
            title: '11',
            imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
            path: ''
        }
    ] as Work[],
    clients: [
        {
            name: 'Google',
            logoUrl: 'https://cdn.svgporn.com/logos/google-bard.svg'
        },
        {
            name: 'Google',
            logoUrl: 'https://cdn.svgporn.com/logos/google-bard-icon.svg'
        },
        {
            name: 'Google',
            logoUrl: 'https://cdn.svgporn.com/logos/google-play-console-icon.svg'
        },
        {
            name: 'Google',
            logoUrl: 'https://cdn.svgporn.com/logos/google-play-console.svg'
        },
        {
            name: 'Google',
            logoUrl: 'https://cdn.svgporn.com/logos/obsidian-icon.svg'
        },
        {
            name: 'Google',
            logoUrl: 'https://cdn.svgporn.com/logos/obsidian.svg'
        }
    ] as Client[]
};

export function useStaticDataQuery() {
    return useQuery({
        queryKey: ['static'],
        queryFn: () => ClientInstance.SiteInit.apiStaticGet(),
        select: response => response.data,
        suspense: true
    });
}