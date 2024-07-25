import CustomTextField from '@/components/ui/CustomTextField';
import DropDown from '@/components/ui/Dropdown';
import TitleManager from '@/components/ui/Title';
import useUserStore from '@/store/userStore';
import { Icon } from '@iconify/react';
import { Box, Button, Paper } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

export const validateSchemaStudent = Yup.object().shape({
  username: Yup.string()
    .matches(/^\d{6,}$/, 'Mã số sinh viên phải chỉ gồm chữ số và lớn hơn 6 ký tự')
    .required('Mã số sinh viên không được để trống'),
  fullName: Yup.string()
    .matches(
      /^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\s]+$/,
      'Họ và tên chỉ bao gồm chữ cái in hoa và in thường.',
    )
    .required('Họ và tên không được để trống'),
  phone: Yup.string()
    .matches(/^0\d{9}$/, 'Số điện thoại phải bắt đầu bằng số 0 và gồm 10 chữ số')
    .required('Số điện thoại không được để trống'),
  email: Yup.string().email('Email phải hợp lệ').required('Email không được để trống'),
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

function ProfilePage() {
  const me = useUserStore((s) => s.me);
  const handleSubmitEditStudent = (values: any) => {};

  return (
    <>
      <Box
        sx={{
          borderRadius: 4,
          width: '100%',
          bgcolor: 'grey.50',
          mx: 'auto',
          mt: 8,
          position: 'relative',
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '20px',
            borderRadius: '10px 10px 0 0 ',
            backgroundImage:
              'url(https://c4.wallpaperflare.com/wallpaper/798/616/951/macos-sierra-wallpaper-preview.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'absolute',
            zIndex: 1,
            opacity: 0.6,
          }}
        ></Box>

        <Box sx={{ px: 20, pt: '30px', zIndex: 10, position: 'relative' }}>
          <TitleManager textTransform={'uppercase'} icon='hugeicons:profile'>
            Thông tin cá nhân
          </TitleManager>
          <Box py={10} px={5}>
            <Formik
              onSubmit={(values) => {
                handleSubmitEditStudent(values);
              }}
              validationSchema={validateSchemaStudent}
              initialValues={{
                fullName: `${me?.fullName}`,
                username: `${me?.username}`,
                email: `${me?.email}`,
                phone: `${me?.phone}`,
                gender: `${me?.gender}`,
                clazzName: `${me?.clazzName}`,
                typeTraining: `${me?.typeTraining}`,
                majorName: `${me?.majorName}`,
              }}
            >
              {({ values, handleChange, handleBlur, handleSubmit, errors, setFieldValue }) => (
                <form onSubmit={handleSubmit}>
                  <Box display={'flex'} gap={20}>
                    <Box flex={1}>
                      <Box
                        mx={'auto'}
                        position={'relative'}
                        height={200}
                        width={200}
                        mb={3}
                        sx={{ borderRadius: '20%', bgcolor: '#f3f3f9' }}
                      >
                        {' '}
                        <img
                          style={{ borderRadius: '10%', width: '200px', height: '200px' }}
                          alt=''
                        />
                        <Box
                          sx={{
                            border: '6px solid white',
                            backgroundColor: 'primary.main',
                            cursor: 'pointer',
                          }}
                          borderRadius={'50%'}
                          height={50}
                          width={50}
                          position={'absolute'}
                          top={0}
                          right={'4px'}
                          color={'white'}
                          display={'flex'}
                          alignItems={'center'}
                          justifyContent={'center'}
                        >
                          <label style={{ cursor: 'pointer' }}>
                            <Icon icon='heroicons:camera-solid' width={16} />
                            <input
                              type='file'
                              style={{ display: 'none' }}
                              onChange={(event) => {}}
                            />
                          </label>
                        </Box>
                      </Box>
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
                      <Box display={'flex'} gap={10} mt={8}>
                        <Box width={'100%'}>
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
                        </Box>
                        <Box width={200}>
                          <DropDown
                            sx={{ mb: 8 }}
                            value={`${values.gender}`}
                            onChange={(e) => {
                              setFieldValue('gender', e.target.value);
                            }}
                            label='Giới tính'
                            options={GenderStudent}
                          />
                        </Box>
                      </Box>
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
                        <CustomTextField label='Chuyên ngành' value={values.majorName} disabled />
                      </Box>{' '}
                      <Box mt={8} width={'full'}>
                        <CustomTextField
                          value={`${values.clazzName}`}
                          disabled
                          onChange={(e) => {
                            setFieldValue('role', e.target.value);
                          }}
                          label='Lớp học phần'
                        />
                      </Box>
                      <Box mt={8} width={'full'}>
                        <CustomTextField label='Chương trình đào tạo' value={values.typeTraining} />
                      </Box>{' '}
                    </Box>
                  </Box>

                  <Box mt={10} justifyContent={'end'} gap={4} display={'flex'}>
                    <Button variant='contained' color='primary' type='submit'>
                      <Icon icon='material-symbols:save-outline' />
                      Cập nhật thông tin cá nhân
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

export default ProfilePage;
