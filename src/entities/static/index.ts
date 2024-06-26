﻿import { useQuery } from '@tanstack/vue-query';
import { axiosInstance } from 'shared/model/client.instance';
import { VITE_BASE_MEDIA_URL } from 'shared/model/env';
import { GraphQlQueryResponse } from 'shared/model/types';
import { MasonryGridItem, TelegramButtonProps } from 'shared/ui';

export const config = {
  companyName: 'SnailBee Inc.',
  phone: '+7 922 402 39 28',
  email: 'mail@snailbee.ru',
  telegramButton: {
    shareUrl: 'https://t.me/OZ_SF',
    comment: 'Расскажите на о задаче',
    size: 'medium',
    text: 'notext',
  } as TelegramButtonProps,
};

interface Media {
  urls: string[];
}

interface Work {
  contentItemId: string;
  name: string;
  image: Media;
  gallery: Media;
  link: string;
}

interface WorksResponse {
  work: Work[];
}
export function useWorksQuery() {
  return useQuery({
    queryKey: ['works'],
    queryFn: () =>
      axiosInstance.get<GraphQlQueryResponse<WorksResponse>>('graphql', {
        params: {
          query: `{
                  work {
                    gallery {
                      urls
                    }
                    name
                    image {
                      urls
                    }
                    link
                  }
                }`,
        },
      }),
    select: (response) =>
      response.data.data.work.map<MasonryGridItem>((work) => ({
        title: work.name,
        imageUrl: VITE_BASE_MEDIA_URL + work.image.urls[0],
        path: work.link,
      })),
    suspense: true,
  });
}

interface Specialization {
  displayText: string;
}

interface SpecializationQueryResponse {
  specialization: Specialization[];
}

export function useSpecializationQuery() {
  return useQuery({
    queryKey: ['specializations'],
    queryFn: () =>
      axiosInstance.get<GraphQlQueryResponse<SpecializationQueryResponse>>(
        'graphql',
        {
          params: {
            query: `{
                  specialization {
                    displayText
                  }
                }`,
          },
        },
      ),
    select: (response) => response.data.data.specialization,
    suspense: true,
  });
}

interface ClientDTO {
  name: string;
  logoUrl: string;
  link: string;
}

interface Client {
  name: string;
  logo: Media;
  link: string;
}

interface ClientsQueryResponse {
  client: Client[];
}

export function useClientsQuery() {
  return useQuery({
    queryKey: ['clients'],
    queryFn: () =>
      axiosInstance.get<GraphQlQueryResponse<ClientsQueryResponse>>('graphql', {
        params: {
          query: `{
                  client {
                    name
                    logo {
                      urls
                    }
                    link
                  }
                }`,
        },
      }),
    select: (response) =>
      response.data.data.client.map<ClientDTO>((client) => ({
        name: client.name,
        logoUrl: VITE_BASE_MEDIA_URL + client.logo.urls[0],
        link: client.link,
      })),
    suspense: true,
  });
}
