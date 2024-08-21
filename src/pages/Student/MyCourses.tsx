import { object } from "zod";
import {
  useEnrollCourseMutation,
  useMyOfferCourseQuery,
} from "../../redux/features/enrollcourseApi";
import { Button, Col, Row } from "antd";

type TCourse = {
  [index: string]: any;
};

const MyCourses = () => {
  const { data: offeredCourse, isLoading,isFetching } = useMyOfferCourseQuery(undefined);
  const [enrollCourse] = useEnrollCourseMutation();

console.log(offeredCourse);

  if (isLoading || isFetching) {
    return <p>Loading..</p>;
  }

  const singleObject = offeredCourse?.data?.reduce(
    (acc: TCourse, item: TCourse) => {
      const key = item.course.title;

      acc[key] = acc[key] || { courseTitle: key, sections: [] };

      acc[key].sections.push({
        section: item.section,
        _id: item._id,
        startTime: item.startTime,
        endTime: item.endTime,
        days: item.days,
      });

      return acc;
    },
    {}
  );
  // console.log(offeredCourse);
  const modifiedData = Object.values(singleObject ? singleObject : {});
//   console.log(modifiedData);

  const handleEnrollCourse = async (id) => {
    // console.log(id);
    const courseData = {
        offeredCourse: id,
    };
    const res = await enrollCourse(courseData);
    console.log(res);
  };

  if (!modifiedData.length) {
    return <p>No corse available</p>;
  }

  return (
    <Row gutter={[0, 20]} >
      {modifiedData.map((item, idx) => {
        return (
          <Col key={idx} span={24} style={{ border: "1px solid #d4d4d4" }}>
            <div>
              <h1 className="text-xl font-medium text-center py-1">
                {item?.courseTitle}
              </h1>
            </div>
            <div>
              {item?.sections?.map((section) => {
                return (
                  <Row
                    key={section?._id}
                    style={{
                      borderTop: "solid #d4d4d4",
                      padding: "10px",
                      borderCollapse: "collapse",
                    }}
                    justify="space-between"
                    align={"middle"}
                  >
                    <Col span={5}>Section:{section.section}</Col>
                    <Col span={5}>Start Time:{section.startTime}</Col>
                    <Col span={5}>End Time:{section.endTime}</Col>
                    <Col span={5}>
                      Days{" : "}
                      {section.days.map((day) => {
                        return <span>{day} </span>;
                      })}
                    </Col>
                    <Button
                      type="primary"
                      size="small"
                      onClick={() => handleEnrollCourse(section?._id)}
                    >
                      Enroll
                    </Button>
                  </Row>
                );
              })}
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default MyCourses;
