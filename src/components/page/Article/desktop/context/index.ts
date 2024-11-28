export interface ModalStatusArticleProps {
    onClose: () => void;
    open: boolean;
    name: string;
    articleId: number | string;
}

import * as Yup from 'yup';

const validateSchemaArticle = Yup.object().shape({
    name: Yup.string()
        .required('Tên bài báo không được để trống'),
    type: Yup.string()
        .required('Loại bài báo không được để trống'),
    publicDate: Yup.string()
        .required('Ngày công bố không được để trống'),
});

export default validateSchemaArticle;
