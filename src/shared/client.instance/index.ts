import axios from "axios";
import {SiteInitApi, QuickFormApi, BriefFormApi} from "../client.gen";
import {VITE_BASE_API_URL} from "../env";


export const axiosInstance = axios.create();


export const ClientInstance = {
    SiteInit: new SiteInitApi(undefined, VITE_BASE_API_URL, axiosInstance),
    QuickForm: new QuickFormApi(undefined, VITE_BASE_API_URL, axiosInstance),
    BriefForm: new BriefFormApi(undefined, VITE_BASE_API_URL, axiosInstance)
} as const;