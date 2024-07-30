export interface TResponseStudentData<T> {
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPage: number;
  };
  result: T;
}

export interface TStudnet {
  _id: string;
  id: string;
  user: TUser;
  name: TName;
  gender: string;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodgroup: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg: string;
  admissionSemester: TAdmissionSemester;
  academicDepartment: TAcademicDepartment;
  isDeleted: boolean;
  fullname: string;
}

export interface TUser {
  _id: string;
  id: string;
  email: string;
  newPasswordChange: boolean;
  role: string;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TName {
  firstName: string;
  middleName: string;
  lastName: string;
  _id: string;
}

export interface TGuardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  _id: string;
}

export interface TLocalGuardian {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
  _id: string;
}

export interface TAdmissionSemester {
  _id: string;
  name: string;
  code: string;
  year: string;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TAcademicDepartment {
  _id: string;
  name: string;
  academicFaculty: TAcademicFaculty;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TAcademicFaculty {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
