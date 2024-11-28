import { queryClient } from '@/providers/ReactQuery';
import AuthService from '@/services/AuthService';
import useMajorStore from '@/store/majorStore';
import useUserStore from '@/store/userStore';
import { IAuth, IUser } from '@/types/auth.type';
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
                if (!data.user.isActive) {
                    enqueueSnackbar('Tài khoản của bạn đã bị khóa', { variant: "error" });
                } else {
                    enqueueSnackbar('Đăng nhập thành công', { variant: "success" });
                    setValueInLocalStorage('accessTokenStudent', data.accessToken);
                    setValueInLocalStorage('refreshTokenStudent', data.refreshToken);
                    setMe(data.user);
                    queryClient.resetQueries({ queryKey: [QueryKeysAuth.getMe] })
                    queryClient.resetQueries({ queryKey: [QueryKeysGroupStudent.getMyGroupStudent] })
                    navigate('/');
                }
            },
            onError: (error: any) => {
                if (error.status < 500) {
                    enqueueSnackbar(error.message, { variant: "error" })
                } else {
                    enqueueSnackbar("Thao tác thất bại vui lòng refresh lại trang", { variant: "warning" })
                }
            },
        });
    }
    const HandleGetme = () => {
        const { data: me, isSuccess: successMe, refetch, isLoading, isFetching
        } = useQuery({
            queryKey: [QueryKeysAuth.getMe],
            queryFn: () => auth.getMe(),
            staleTime: 1000 * (20 * 60),
        });
        if (successMe === true) {
            setMe(me.user);
            setMajor({ id: me.user?.majorId, name: me.user?.majorName });
        }
        return { me, successMe, refetch, isFetching, isLoading, majorId: me?.user?.majorId };
    }
    const HandleLogout = () => {
        return useMutation({
            mutationFn: () => auth.logout(),
            onSuccess: () => {
                enqueueSnackbar('Đăng xuất thành công', { variant: "success" });
                removeValueInLocalStorage('accessTokenStudent');
                removeValueInLocalStorage('refreshTokenStudent');
                navigate('/home');
            },
            onError: (error: any) => {
                if (error.status < 500) {
                    enqueueSnackbar(error.message, { variant: "error" })
                } else {
                    enqueueSnackbar("Thao tác thất bại vui lòng refresh lại trang", { variant: "warning" })
                }
            },
        });
    }

    const HandleUpdatePassword = () => {
        return useMutation({
            mutationFn: (data: { password: string, newPassword: string }) => auth.updatePassword(data),
            onSuccess: () => {
                enqueueSnackbar('Cập nhật mật khẩu thành công', { variant: "success" });
                navigate('/')
            },
            onError: (error: any) => {
                if (error.status < 500) {
                    enqueueSnackbar(error.message, { variant: "error" })
                } else {
                    enqueueSnackbar("Thao tác thất bại vui lòng refresh lại trang", { variant: "warning" })
                }
            },
        })
    }
    const HandleUpdateMe = () => {
        return useMutation({
            mutationFn: (data: IUser) => auth.updateMe(data),
            onSuccess: () => {
                enqueueSnackbar('Cập nhật thông tin cá nhân thành công', { variant: "success" });
                queryClient.resetQueries({ queryKey: [QueryKeysAuth.getMe] })
            },
            onError: (error: any) => {
                if (error.status < 500) {
                    enqueueSnackbar(error.message, { variant: "error" })
                } else {
                    enqueueSnackbar("Thao tác thất bại vui lòng refresh lại trang", { variant: "warning" })
                }
            },
        })
    }
    const HanldeForgotPassword = () => {
        return useMutation({
            mutationFn: (username: string) => auth.forgotPassword(username),
            onSuccess: () => {
                enqueueSnackbar('Mật khẩu mới đã được gửi về email của bạn', { variant: "success" });
                navigate('/auth/login')
            },
            onError: (error: any) => {
                if (error.status < 500) {
                    enqueueSnackbar(error.message, { variant: "error" })
                } else {
                    enqueueSnackbar("Thao tác thất bại vui lòng refresh lại trang", { variant: "warning" })
                }
            },
        })

    }

    return {
        HandleLogin,
        HanldeForgotPassword,
        HandleUpdateMe, HandleGetme, HandleLogout, HandleUpdatePassword
    }
}

export default useAuth