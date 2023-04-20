"use client";
import { Form, Input, InputNumber, Space, TimePicker } from "antd";

const Calculator = () => {
  const onFinish = (values: any) => {
    console.log("Success", values);
  };

  return (
    <Space>
      <Form
        style={{ maxWidth: 600 }}
        name="Calculator"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
        label="Hour"
          name="firstHours"
          rules={[{ required: true, type: "date" }]}
        >
          <TimePicker />
        </Form.Item>
        <Form.Item
          label="And"
          name="secondHours"
          rules={[{ required: false, type: "date" }]}
        >
          <TimePicker />
        </Form.Item>
        <Form.Item
          label="Hours Left"
          name="hoursLeft"
          rules={[{ required: false, type: "date" }]}
        >
          <TimePicker />
        </Form.Item>
        <Form.Item
          label="TOTAL"
          name="totalHours"
          rules={[{ required: false, type: "date" }]}
        >
          <TimePicker disabled/>
        </Form.Item>


      </Form>
    </Space>
  );
};

export default Calculator;
