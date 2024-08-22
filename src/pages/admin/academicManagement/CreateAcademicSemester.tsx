import { FieldValues, SubmitHandler } from "react-hook-form";
import UNform from "../../../components/form/UNform";
import { Button, Col, Flex } from "antd";
import UNSelect from "../../../components/form/UNSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));
function CreateAcademicSemester() {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = semesterOptions[Number(data.name) - 1]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
  };
  return (
    <div>
      <Flex justify="center" align="center">
        <Col span={6}>
          <UNform onSubmit={onSubmit}>
            <UNSelect
              label="Name"
              name="name"
              options={semesterOptions}
            ></UNSelect>
            <UNSelect label="Year" name="year" options={yearOptions}></UNSelect>
            <UNSelect
              label="Start Month"
              name="startMonth"
              options={monthOptions}
            ></UNSelect>
            <Button htmlType="submit">Submit</Button>
          </UNform>
        </Col>
      </Flex>
    </div>
  );
}

export default CreateAcademicSemester;
