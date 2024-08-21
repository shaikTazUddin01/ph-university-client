import { useMyOfferCourseQuery } from "../../redux/features/enrollcourseApi";

const MyCourses = () => {
    const {data,isLoading}=useMyOfferCourseQuery(undefined)

    if(isLoading){
        return <p>Loading..</p>
    }
    console.log(data);
    return (
        <div>
            <h1>my courses</h1>
        </div>
    );
};

export default MyCourses;