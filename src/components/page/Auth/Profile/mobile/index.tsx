import CustomTextField from '@/components/ui/CustomTextField';
import DropDown from '@/components/ui/Dropdown';
import useAuth from '@/hook/api/useAuth';
import useUserStore from '@/store/userStore';
import { checkTypeTraining } from '@/utils/validations/person.validation';
import { Icon } from '@iconify/react';
import { Box, Button, Typography } from '@mui/material';
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
  phone: Yup.string().matches(/^0\d{9}$/, 'Số điện thoại phải bắt đầu bằng số 0 và gồm 10 chữ số'),
  // .required('Số điện thoại không được để trống'),
  email: Yup.string().email('Email phải hợp lệ'),
  // .required('Email không được để trống'),
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

function ProfileMobile() {
  const me = useUserStore((s) => s.me);
  const { HandleUpdateMe, HandleLogout } = useAuth();
  const { mutate: updateMe } = HandleUpdateMe();
  const { mutate: logout } = HandleLogout();
  const handleSubmitEditStudent = (values: any) => {
    updateMe(values);
  };
  return (
    <>
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Box
          height={'375px'}
          position={'absolute'}
          top={0}
          borderRadius={'0 0 50px 50px'}
          width={'100%'}
          bgcolor={'primary.dark'}
        ></Box>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            pt: 4,
          }}
        >
          <Typography
            fontSize={18}
            px={'25px'}
            fontWeight={600}
            textAlign={'left'}
            color='grey.500'
          >
            Trang cá nhân
          </Typography>
          <Button
            variant='outlined'
            color='primary'
            onClick={() => logout()}
            sx={{
              mx: 10,
              gap: 2,
              display: 'flex',
            }}
          >
            <Icon width={20} color='#bcbcbc' icon='hugeicons:logout-05' />
            <Typography fontSize={16} fontWeight={500} textAlign={'left'} color='grey.500'>
              Đăng xuất
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            mx: 12,
            mt: 30,
            zIndex: 10,
            position: 'relative',
            bgcolor: 'white',
            borderRadius: '16px',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
          }}
        >
          <Box
            top={-50}
            left={'calc(50% - 50px)'}
            zIndex={20}
            bgcolor={'grey.50'}
            position={'absolute'}
            borderRadius={50}
            width={'100px'}
            p={4}
          >
            <Icon width={'100%'} icon={'fxemoji:graduationcap'} />
          </Box>
          <Box pt={20} pb={10} px={5}>
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

                  <Box my={4}>
                    <DropDown
                      value={`${values.gender}`}
                      onChange={(e) => {
                        setFieldValue('gender', e.target.value);
                      }}
                      label='Giới tính'
                      options={GenderStudent}
                    />
                  </Box>
                  <CustomTextField label='Chuyên ngành' value={values.majorName} disabled />

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
                  <CustomTextField
                    value={`${values.clazzName}`}
                    onChange={(e) => {
                      setFieldValue('role', e.target.value);
                    }}
                    label='Lớp danh nghĩa'
                  />
                  <CustomTextField
                    label='Chương trình đào tạo'
                    value={checkTypeTraining(values.typeTraining)}
                    disabled
                  />

                  <Box
                    mt={12}
                    mb={4}
                    justifyContent={'end'}
                    width={'100%'}
                    gap={4}
                    display={'flex'}
                  >
                    <Button sx={{ flex: 1 }} variant='contained' color='primary' type='submit'>
                      Cập nhật thông tin
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

export default ProfileMobile;
