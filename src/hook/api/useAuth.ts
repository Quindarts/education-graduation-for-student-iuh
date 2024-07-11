import AuthService from '@/services/AuthService';
import useMajorStore from '@/store/majorStore';
import useUserStore from '@/store/userStore';
import { IAuth } from '@/types/auth.type';
import { setValueInLocalStorage } from '@/utils/localStorage';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

export enum QueryKeysAuth {
    getMe = 'getMe'
}

function useAuth() {
    const auth = new AuthService();
    const { enqueueSnackbar } = useSnackbar()
    const navigate = useNavigate()
    const setMe = useUserStore((s: any) => s.setMe);
    const setMajor = useMajorStore((s) => s.setMajor);
    
    const HandleLogin = () => {
        return useMutation({
            mutationFn: (send: IAuth) => auth.login(send),
            onSuccess: (data: any) => {
                enqueueSnackbar('Đăng nhập thành công', { variant: "success" });
                setValueInLocalStorage('accessTokenStudent', data.accessToken);
                setValueInLocalStorage('refreshTokenStudent', data.refreshToken);
                setMe(data.user);
                navigate('/dashboard');
            },
            onError: (error) => {
                enqueueSnackbar(error?.message, { variant: "error" });

            }
        });
    }
    const HandleGetme = () => {
        const { data, isSuccess
        } = useQuery({
            queryKey: [QueryKeysAuth.getMe],
            queryFn: () => auth.getMe(),
        });
        if (isSuccess === true) {
            setMe(data.user);
            setMajor({ id: data.user?.majorId, name: data.user?.majorName });
        }
    }
    return { HandleLogin, HandleGetme }
}

export default useAuth