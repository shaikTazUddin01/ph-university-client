type TCourse = {
    _id: string;
    title: string;
    prefix: string;
    code: string;
    credits: number;
    isDeleted: boolean;
    perRequisteCourses: TPrerequisiteCourse[];
    createdAt: string;
    updatedAt: string;
  };
  
  type TPrerequisiteCourse = {
    courses: TCourse | string;
    isDeleted: boolean;
    _id: string;
  };
  
  export type TCourseData = {
    _id: string;
    title: string;
    prefix: string;
    code: string;
    credits: number;
    isDeleted: boolean;
    perRequisteCourses: TPrerequisiteCourse[];
    createdAt: string;
    updatedAt: string;
  };
  