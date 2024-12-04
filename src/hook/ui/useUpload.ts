import axios, { AxiosProgressEvent } from 'axios';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { env } from '@/utils/env';
import { bytesForHuman } from '@/utils/file';
import axiosFile from '@/services/axiosFile';
import useGroupStudentStore from '@/store/groupStudentStore';
import ResponseType from '@/types/axios.type';
import { queryClient } from '@/providers/ReactQuery';
import { QueryKeysEvent } from '../api/useEvent';
import { QueryKeysArticle } from '../api/useArticle';
import useTermStore from '@/store/termStore';
const EXTENSIONS = ['zip', 'pdf'];


const useUploadFile = () => {
    const groupStudentId = useGroupStudentStore(s => s.groupId)
    const termId = useTermStore((s) => s.term).id
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [fileName, setFileName] = useState<string>('');
    const [totalSize, setTotalSize] = useState<string>('');
    const [currentFile, setCurrentFile] = useState()
    const { enqueueSnackbar } = useSnackbar();

    //axios
    const [valueLoading, setValueLoading] = useState<any>(0)
    const getExention = (file: any) => {
        const parts = file.name.split('.');
        const extension = parts[parts.length - 1];
        return EXTENSIONS.includes(extension);
    };

    //TODO  [IMPORT DATA FROM EXCEL FILE]
    const importFileToForm = async (e: any) => {
        const file = e.target.files[0];
        setFileName(file.name);
        setTotalSize(bytesForHuman(file.size));
        const reader = new FileReader();
        setSuccess(false);
        setLoading(true);
        if (!file) {
            return enqueueSnackbar('Đã có lỗi khi tải lên, vui lòng thử lại sau...', {
                variant: 'error',
            });
        }
        if (!getExention(file)) {
            return enqueueSnackbar('File tải lên không đúng định dạng ZIP, PDF file', {
                variant: 'error',
            });
        }
        setCurrentFile(file)
        reader.readAsBinaryString(file);
    };

    //saved file
    const submitEvent = async (file: any, eventId: string) => {
        const body = {
            file: file,
            groupStudentId: groupStudentId
        }
        const submitter = await axiosFile.put(`${env.API_URL}/api/v1/events/${eventId}/submit`, body, {
            onUploadProgress: (axiosLoading: AxiosProgressEvent) => {
                setValueLoading(axiosLoading.progress)
            }
        }) as ResponseType
        submitter.success === true ?
            enqueueSnackbar(submitter.message, { variant: 'success' }) :
            enqueueSnackbar('Đã có lỗi khi tải lên, vui lòng thử lại sau...', {
                variant: 'error',
            });
        queryClient.resetQueries({ queryKey: [QueryKeysEvent.EVENT] })
    }

    const submitArticle = async (file: any, data: any) => {
        const body = {
            file: file,
            termId: termId,
            ...data
        }
        const submitter = await axiosFile.post(`${env.API_URL}/api/v1/articles`, body, {
            onUploadProgress: (axiosLoading: AxiosProgressEvent) => {
                setValueLoading(axiosLoading.progress)
            }
        }) as ResponseType
        if (submitter.success === true) {
            enqueueSnackbar(submitter.message, { variant: 'success' })
            queryClient.resetQueries({ queryKey: [QueryKeysArticle.ARTICLE] })
        }
        if (submitter.status < 500 && submitter.status >= 400) {
            enqueueSnackbar(submitter.message, {
                variant: 'error',
            });
        }
        if (submitter.status >= 500) {
            enqueueSnackbar('Đã có lỗi khi tải lên, vui lòng thử lại sau...', {
                variant: 'error',
            });
        }
    }

    const submitFinalReport = async (file: any) => {
        const body = {
            file: file,
            groupStudentId: groupStudentId,
        }
        const submitter = await axiosFile.post(`${env.API_URL}/api/v1/final-reports`, body, {
            onUploadProgress: (axiosLoading: AxiosProgressEvent) => {
                setValueLoading(axiosLoading.progress)
            }
        }) as ResponseType
        if (submitter.success === true) {
            enqueueSnackbar(submitter.message, { variant: 'success' })
            queryClient.resetQueries({ queryKey: [QueryKeysArticle.ARTICLE] })
        }
        if (submitter.status < 500 && submitter.status >= 400) {
            enqueueSnackbar(submitter.message, {
                variant: 'error',
            });
        }
        if (submitter.status >= 500) {
            enqueueSnackbar('Đã có lỗi khi tải lên, vui lòng thử lại sau...', {
                variant: 'error',
            });
        }
    }
    const updateFinalReport = async (file: any, reportId: string) => {
        const body = {
            file: file,
            groupStudentId: groupStudentId,
        }
        const submitter = await axiosFile.post(`${env.API_URL}/api/v1/final-reports/${reportId}`, body, {
            onUploadProgress: (axiosLoading: AxiosProgressEvent) => {
                setValueLoading(axiosLoading.progress)
            }
        }) as ResponseType
        if (submitter.success === true) {
            enqueueSnackbar(submitter.message, { variant: 'success' })
            queryClient.resetQueries({ queryKey: [QueryKeysArticle.ARTICLE] })
        }
        if (submitter.status < 500 && submitter.status >= 400) {
            enqueueSnackbar(submitter.message, {
                variant: 'error',
            });
        }
        if (submitter.status >= 500) {
            enqueueSnackbar('Đã có lỗi khi tải lên, vui lòng thử lại sau...', {
                variant: 'error',
            });
        }
    }
    return {
        importFileToForm,
        updateFinalReport,
        setFileName,
        setTotalSize,
        setCurrentFile,
        setValueLoading,
        submitEvent,
        submitArticle,
        submitFinalReport,
        currentFile,
        success,
        loading,
        fileName,
        valueLoading,
        totalSize
    };
}
export default useUploadFile;
