import { axiosInstance } from 'shared/model/client.instance';

interface QuickForm {
  name: string;
  phone: string;
}

export const sendForm = async (data: QuickForm) => {
  return await axiosInstance.post('quickform', data);
};
