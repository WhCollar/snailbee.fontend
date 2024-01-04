import { axiosInstance } from '../../shared/model/client.instance';

interface BriefingForm {
  about: string;
  case: string;
  budget: string;
  commentary: string;
  name: string;
  phone: string;
  email: string;
}

export const sendForm = async (data: BriefingForm) => {
  return await axiosInstance.post('briefform', data);
};
