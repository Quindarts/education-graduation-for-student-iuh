import { queryClient } from '@/providers/ReactQuery';
import AuthService from '@/services/AuthService';
import useMajorStore from '@/store/majorStore';
import useUserStore from '@/store/userStore';
import { IAuth } from '@/types/auth.type';
import { removeValueInLocalStorage, setValueInLocalStorage } from '@/utils/localStorage';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { QueryKeysGroupStudent } from './useGroupStudent';

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
                queryClient.resetQueries({ queryKey: [QueryKeysAuth.getMe] })
                queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getMyGroupStudent] })
                navigate('/dashboard');
            },
            onError: (error) => {
                enqueueSnackbar(error?.message, { variant: "error" });

            }
        });
    }
    const HandleGetme = () => {
        const { data: me, isSuccess: successMe
        } = useQuery({
            queryKey: [QueryKeysAuth.getMe],
            queryFn: () => auth.getMe(),
        });
        if (successMe === true) {
            setMe(me.user);
            setMajor({ id: me.user?.majorId, name: me.user?.majorName });
        }
        return { me, successMe, majorId: me?.user?.majorId };
    }
    const HandleLogout = () => {
        return useMutation({
            mutationFn: () => auth.logout(),
            onSuccess: (data: any) => {
                enqueueSnackbar('Đăng xuất thành công', { variant: "success" });
                removeValueInLocalStorage('accessTokenStudent');
                removeValueInLocalStorage('refreshTokenStudent');
                navigate('/home');
            },
            onError: (error) => {
                enqueueSnackbar(error?.message, { variant: "error" });

            }
        });
    }
    return { HandleLogin, HandleGetme, HandleLogout }
}

export default useAuth