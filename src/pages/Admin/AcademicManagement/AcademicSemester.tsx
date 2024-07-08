import { useAcademicSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data, isLoading } = useAcademicSemesterQuery(undefined);
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  const academicSemester = data?.data;
  console.log("academic semester",academicSemester);
  return (
    <div>
      <h1>{academicSemester?.length} : academic semester</h1>
    </div>
  );
};

export default AcademicSemester;
