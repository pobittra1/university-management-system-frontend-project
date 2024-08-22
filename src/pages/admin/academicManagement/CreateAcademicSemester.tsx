import { FieldValues, SubmitHandler } from "react-hook-form";
import UNform from "../../../components/form/UNform";
import { Button, Col, Flex } from "antd";
import UNSelect from "../../../components/form/UNSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import academicManagementApi from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";

const { useAddAcademicSemesterMutation } = academicManagementApi;

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));
function CreateAcademicSemester() {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating");
    const name = semesterOptions[Number(data.name) - 1]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    try {
      const res = (await addAcademicSemester(semesterData)) as TResponse;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Semester created", { id: toastId });
      }
    } catch (err) {
      toast.error("something went wrong", { id: toastId });
    }
  };
  return (
    <div>
      <Flex justify="center" align="center">
        <Col span={6}>
          <UNform
            onSubmit={onSubmit}
            resolver={zodResolver(academicSemesterSchema)}
          >
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
            <UNSelect
              label="End Month"
              name="endMonth"
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
