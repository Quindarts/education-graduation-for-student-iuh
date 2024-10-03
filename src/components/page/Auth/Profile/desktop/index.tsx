import CustomTextField from '@/components/ui/CustomTextField';
import DropDown from '@/components/ui/Dropdown';
import TitleManager from '@/components/ui/Title';
import useAuth from '@/hook/api/useAuth';
import useUserStore from '@/store/userStore';
import { checkTypeTraining } from '@/utils/validations/person.validation';
import { Icon } from '@iconify/react';
import { Box, Button } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validateSchemaStudent = Yup.object().shape({
  username: Yup.string()
    .matches(/^\d{6,}$/, 'Mã số sinh viên phải chỉ gồm chữ số và lớn hơn 6 ký tự')
    .required('Mã số sinh viên không được để trống'),
  fullName: Yup.string()
    .matches(
      /^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\s]+$/,
      'Họ và tên chỉ bao gồm chữ cái in hoa và in thường.',
    )
    .required('Họ và tên không được để trống'),
  phone: Yup.string().matches(/^0\d{9}$/, 'Số điện thoại phải bắt đầu bằng số 0 và gồm 10 chữ số'),
  email: Yup.string().email('Email phải hợp lệ'),
});

enum EnumGender {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
}

const GenderStudent = [
  {
    _id: EnumGender.FEMALE,
    name: 'Nữ',
  },
  {
    _id: EnumGender.MALE,
    name: 'Nam',
  },
];

function ProfileDesktop() {
  const me = useUserStore((s) => s.me);
  const { HandleUpdateMe } = useAuth();
  const { mutate: updateMe } = HandleUpdateMe();
  const handleSubmitEditStudent = (values: any) => {
    updateMe(values);
  };
  return (
    <>
      <Box
        sx={{
          borderRadius: 1,
          width: '100%',
          mx: 'auto',
          mt: 8,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '10px',
            borderRadius: '4px 4px 0 0 ',
            background: '#c4d9ff',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'absolute',
            zIndex: 1,
          }}
        ></Box>

        <Box sx={{ px: 20, pt: '20px', zIndex: 10, position: 'relative' }}>
          <TitleManager variant='h4' icon='solar:user-bold-duotone'>Cập nhật thông tin</TitleManager>
          <Box py={10} px={5}>
            <Formik
              onSubmit={(values) => {
                handleSubmitEditStudent(values);
              }}
              validationSchema={validateSchemaStudent}
              initialValues={{
                fullName: `${me?.fullName ? me.fullName : ''}`,
                username: `${me?.username ? me.username : ''}`,
                email: `${me?.email ? me.email : ''}`,
                phone: `${me?.phone ? me.phone : ''}`,
                gender: `${me?.gender}`,
                clazzName: `${me?.clazzName ? me.clazzName : ''}`,
                typeTraining: `${me?.typeTraining ? me.typeTraining : ''}`,
                majorName: `${me?.majorName ? me.majorName : ''}`,
              }}
            >
              {({ values, handleChange, handleBlur, handleSubmit, errors, setFieldValue }) => (
                <form onSubmit={handleSubmit}>
                  <Box gap={20} display={'flex'}>
                    <Box flex={1}>
                      <CustomTextField
                        required
                        value={values.username}
                        name='username'
                        label='Mã Sinh viên'
                        placeholder='Mã Sinh viên'
                        disabled
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.username ? true : false}
                        helperText={errors.username}
                      />
                      <CustomTextField
                        required
                        value={values.fullName}
                        name='fullName'
                        label='Họ và tên'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Họ và tên'
                        error={errors.fullName ? true : false}
                        helperText={errors.fullName}
                      />
                      <Box my={8}>
                        <DropDown
                          value={`${values.gender}`}
                          onChange={(e) => {
                            setFieldValue('gender', e.target.value);
                          }}
                          label='Giới tính'
                          options={GenderStudent}
                        />
                      </Box>
                      <Box mt={8} width={'full'}>
                        <CustomTextField label='Chuyên ngành' value={values.majorName} disabled />
                      </Box>{' '}
                    </Box>
                    <Box flex={1}>
                      <CustomTextField
                        required
                        name='phone'
                        value={values.phone}
                        label='Số điện thoại'
                        placeholder='Nhập vào số điện thoại'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.phone ? true : false}
                        helperText={errors.phone}
                      />
                      <CustomTextField
                        required
                        value={values.email}
                        name='email'
                        label='Email'
                        placeholder='Nhập vào email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.email ? true : false}
                        helperText={errors.email}
                      />
                      <Box mt={8} width={'full'}>
                        <CustomTextField
                          value={`${values.clazzName}`}
                          onChange={(e) => {
                            setFieldValue('role', e.target.value);
                          }}
                          label='Lớp danh nghĩa'
                        />
                      </Box>
                      <Box mt={8} width={'full'}>
                        <CustomTextField
                          label='Chương trình đào tạo'
                          value={checkTypeTraining(values.typeTraining)}
                          disabled
                        />
                      </Box>{' '}
                    </Box>
                  </Box>

                  <Box mt={4} justifyContent={'end'} gap={4} display={'flex'}>
                    <Button variant='contained' color='success' type='submit'>
                      <Icon
                        style={{ marginRight: 6 }}
                        icon='material-symbols:sync-saved-locally-rounded'
                      />
                      Lưu cập nhật
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProfileDesktop;
