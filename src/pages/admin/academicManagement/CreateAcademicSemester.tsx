import { FieldValues, SubmitHandler } from "react-hook-form";
import UNInput from "../../../components/form/UNInput";
import UNform from "../../../components/form/UNform";
import { Button, Col, Flex } from "antd";
import UNSelect from "../../../components/form/UNSelect";

function CreateAcademicSemester() {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Flex justify="center" align="center">
        <Col span={6}>
          <UNform onSubmit={onSubmit}>
            <UNInput type="text" name="name" label="name"></UNInput>
            <UNInput type="text" name="year" label="year"></UNInput>
            <UNSelect label="name"></UNSelect>
            <Button htmlType="submit">Submit</Button>
          </UNform>
        </Col>
      </Flex>
    </div>
  );
}

export default CreateAcademicSemester;
