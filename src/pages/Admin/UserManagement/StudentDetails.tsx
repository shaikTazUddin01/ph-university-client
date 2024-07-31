import { useParams } from "react-router-dom";
import { useGetSingleStudentQuery } from "../../../redux/features/userManagement/userManagementApi";


const StudentDetails = () => {
    const {studentId}=useParams()
    console.log(studentId);
    const{data,isLoading}=useGetSingleStudentQuery(studentId)

    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <h1>name : {data?.data?.fullname}</h1>
        </div>
    );
};

export default StudentDetails;