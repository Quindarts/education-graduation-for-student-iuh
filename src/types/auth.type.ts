export interface IAuth {
  username: string;
  password: string;
}

export interface IRegister extends IAuth {
  email: string;
  role: string;
}

export interface IUser {
  clazzName?: string;
  dateOfBirth?: string;
  email?: string | null;
  fullName?: string;
  gender?: 'MALE' | 'FEMALE' | 'OTHER';
  id?: string;
  isActive?: boolean;
  majorId?: string;
  majorName?: string;
  phone?: string;
  typeTraining?: 'UNIVERSITY' | 'COLLEGE' | 'OTHER';
  username?: string;
}