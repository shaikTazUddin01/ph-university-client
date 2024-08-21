import { object } from "zod";
import { useMyOfferCourseQuery } from "../../redux/features/enrollcourseApi";

const MyCourses = () => {
  const { data: offeredCourse, isLoading } = useMyOfferCourseQuery(undefined);

  if (isLoading) {
    return <p>Loading..</p>;
  }

  const singleObject = offeredCourse?.data?.reduce((acc, item) => {
    const key = item.course.title;

    acc[key] =acc[key] || { courseTitle: key,sections:[]};

    acc[key].sections.push({section:item.section,_id:item._id})

    return acc;
  }, {});
console.log(offeredCourse);
  console.log(Object.values(singleObject?singleObject:{}));

  return (
    <div>
      <h1>my courses</h1>
    </div>
  );
};

export default MyCourses;
