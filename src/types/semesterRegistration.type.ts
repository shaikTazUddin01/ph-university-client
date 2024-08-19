import { TAdmissionSemester } from "./global"

export interface TSemesterRegistration {
    _id: string
    academicSemester: TAdmissionSemester
    status: string
    startDate: string
    endDate: string
    minCredit: number
    maxCredit: number
    createdAt: string
    updatedAt: string
  }
  
