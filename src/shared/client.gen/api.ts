/* tslint:disable */
/* eslint-disable */
/**
 * Orchard Core APIs Docs
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface AddBriefForm
 */
export interface AddBriefForm {
    /**
     * 
     * @type {string}
     * @memberof AddBriefForm
     */
    'about'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddBriefForm
     */
    'case'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddBriefForm
     */
    'budget'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddBriefForm
     */
    'commentary'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddBriefForm
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddBriefForm
     */
    'phone'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddBriefForm
     */
    'email'?: string | null;
}
/**
 * 
 * @export
 * @interface AddQuickForm
 */
export interface AddQuickForm {
    /**
     * 
     * @type {string}
     * @memberof AddQuickForm
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddQuickForm
     */
    'phone'?: string | null;
}
/**
 * 
 * @export
 * @interface ContentItem
 */
export interface ContentItem {
    /**
     * 
     * @type {any}
     * @memberof ContentItem
     */
    'content'?: any | null;
    /**
     * 
     * @type {ContentItem}
     * @memberof ContentItem
     */
    'contentItem'?: ContentItem;
    /**
     * 
     * @type {number}
     * @memberof ContentItem
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof ContentItem
     */
    'contentItemId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContentItem
     */
    'contentItemVersionId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContentItem
     */
    'contentType'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ContentItem
     */
    'published'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ContentItem
     */
    'latest'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ContentItem
     */
    'modifiedUtc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContentItem
     */
    'publishedUtc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContentItem
     */
    'createdUtc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContentItem
     */
    'owner'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContentItem
     */
    'author'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContentItem
     */
    'displayText'?: string | null;
}

/**
 * ApiApi - axios parameter creator
 * @export
 */
export const ApiApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} contentItemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiContentContentItemIdDelete: async (contentItemId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contentItemId' is not null or undefined
            assertParamExists('apiContentContentItemIdDelete', 'contentItemId', contentItemId)
            const localVarPath = `/api/content/{contentItemId}`
                .replace(`{${"contentItemId"}}`, encodeURIComponent(String(contentItemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} contentItemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiContentContentItemIdGet: async (contentItemId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contentItemId' is not null or undefined
            assertParamExists('apiContentContentItemIdGet', 'contentItemId', contentItemId)
            const localVarPath = `/api/content/{contentItemId}`
                .replace(`{${"contentItemId"}}`, encodeURIComponent(String(contentItemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {boolean} [draft] 
         * @param {ContentItem} [contentItem] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiContentPost: async (draft?: boolean, contentItem?: ContentItem, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/content`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (draft !== undefined) {
                localVarQueryParameter['draft'] = draft;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(contentItem, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ApiApi - functional programming interface
 * @export
 */
export const ApiApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ApiApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} contentItemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiContentContentItemIdDelete(contentItemId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiContentContentItemIdDelete(contentItemId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} contentItemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiContentContentItemIdGet(contentItemId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiContentContentItemIdGet(contentItemId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {boolean} [draft] 
         * @param {ContentItem} [contentItem] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiContentPost(draft?: boolean, contentItem?: ContentItem, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiContentPost(draft, contentItem, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ApiApi - factory interface
 * @export
 */
export const ApiApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ApiApiFp(configuration)
    return {
        /**
         * 
         * @param {string} contentItemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiContentContentItemIdDelete(contentItemId: string, options?: any): AxiosPromise<void> {
            return localVarFp.apiContentContentItemIdDelete(contentItemId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} contentItemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiContentContentItemIdGet(contentItemId: string, options?: any): AxiosPromise<void> {
            return localVarFp.apiContentContentItemIdGet(contentItemId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {boolean} [draft] 
         * @param {ContentItem} [contentItem] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiContentPost(draft?: boolean, contentItem?: ContentItem, options?: any): AxiosPromise<void> {
            return localVarFp.apiContentPost(draft, contentItem, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ApiApi - object-oriented interface
 * @export
 * @class ApiApi
 * @extends {BaseAPI}
 */
export class ApiApi extends BaseAPI {
    /**
     * 
     * @param {string} contentItemId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiApi
     */
    public apiContentContentItemIdDelete(contentItemId: string, options?: AxiosRequestConfig) {
        return ApiApiFp(this.configuration).apiContentContentItemIdDelete(contentItemId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} contentItemId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiApi
     */
    public apiContentContentItemIdGet(contentItemId: string, options?: AxiosRequestConfig) {
        return ApiApiFp(this.configuration).apiContentContentItemIdGet(contentItemId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {boolean} [draft] 
     * @param {ContentItem} [contentItem] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiApi
     */
    public apiContentPost(draft?: boolean, contentItem?: ContentItem, options?: AxiosRequestConfig) {
        return ApiApiFp(this.configuration).apiContentPost(draft, contentItem, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * BriefFormApi - axios parameter creator
 * @export
 */
export const BriefFormApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {AddBriefForm} [addBriefForm] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiBriefformPost: async (addBriefForm?: AddBriefForm, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/briefform`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(addBriefForm, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BriefFormApi - functional programming interface
 * @export
 */
export const BriefFormApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BriefFormApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {AddBriefForm} [addBriefForm] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiBriefformPost(addBriefForm?: AddBriefForm, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiBriefformPost(addBriefForm, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BriefFormApi - factory interface
 * @export
 */
export const BriefFormApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BriefFormApiFp(configuration)
    return {
        /**
         * 
         * @param {AddBriefForm} [addBriefForm] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiBriefformPost(addBriefForm?: AddBriefForm, options?: any): AxiosPromise<void> {
            return localVarFp.apiBriefformPost(addBriefForm, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BriefFormApi - object-oriented interface
 * @export
 * @class BriefFormApi
 * @extends {BaseAPI}
 */
export class BriefFormApi extends BaseAPI {
    /**
     * 
     * @param {AddBriefForm} [addBriefForm] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BriefFormApi
     */
    public apiBriefformPost(addBriefForm?: AddBriefForm, options?: AxiosRequestConfig) {
        return BriefFormApiFp(this.configuration).apiBriefformPost(addBriefForm, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * QuickFormApi - axios parameter creator
 * @export
 */
export const QuickFormApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {AddQuickForm} [addQuickForm] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiQuickformPost: async (addQuickForm?: AddQuickForm, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/quickform`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(addQuickForm, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * QuickFormApi - functional programming interface
 * @export
 */
export const QuickFormApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = QuickFormApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {AddQuickForm} [addQuickForm] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiQuickformPost(addQuickForm?: AddQuickForm, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiQuickformPost(addQuickForm, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * QuickFormApi - factory interface
 * @export
 */
export const QuickFormApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = QuickFormApiFp(configuration)
    return {
        /**
         * 
         * @param {AddQuickForm} [addQuickForm] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiQuickformPost(addQuickForm?: AddQuickForm, options?: any): AxiosPromise<void> {
            return localVarFp.apiQuickformPost(addQuickForm, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * QuickFormApi - object-oriented interface
 * @export
 * @class QuickFormApi
 * @extends {BaseAPI}
 */
export class QuickFormApi extends BaseAPI {
    /**
     * 
     * @param {AddQuickForm} [addQuickForm] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuickFormApi
     */
    public apiQuickformPost(addQuickForm?: AddQuickForm, options?: AxiosRequestConfig) {
        return QuickFormApiFp(this.configuration).apiQuickformPost(addQuickForm, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * SiteInitApi - axios parameter creator
 * @export
 */
export const SiteInitApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiStaticGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/static`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SiteInitApi - functional programming interface
 * @export
 */
export const SiteInitApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SiteInitApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiStaticGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiStaticGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SiteInitApi - factory interface
 * @export
 */
export const SiteInitApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SiteInitApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiStaticGet(options?: any): AxiosPromise<void> {
            return localVarFp.apiStaticGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SiteInitApi - object-oriented interface
 * @export
 * @class SiteInitApi
 * @extends {BaseAPI}
 */
export class SiteInitApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SiteInitApi
     */
    public apiStaticGet(options?: AxiosRequestConfig) {
        return SiteInitApiFp(this.configuration).apiStaticGet(options).then((request) => request(this.axios, this.basePath));
    }
}



