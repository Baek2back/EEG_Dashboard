import React from "react";
import styled from "styled-components";
import { Card, Form, Radio, Slider, Upload, Icon, Button } from "antd";

const PageContainer = styled("div")`
  background-color: #f0f3f7;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  height: 900px;
`;

const Container = styled(Card)`
  width: 800px;
  height: 500px;
`;

const Title = styled("span")`
  font-size: 18px;
`;

const UploadPage = props => {
  const { getFieldDecorator } = props.form;
  const normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 }
  };
  return (
    <PageContainer>
      <Container title={<Title>UPLOAD</Title>} hoverable bordered={true}>
        <Form {...formItemLayout}>
          <Form.Item label="성별">
            {getFieldDecorator("radio-button")(
              <Radio.Group>
                <Radio.Button value="a">남성</Radio.Button>
                <Radio.Button value="b">여성</Radio.Button>
              </Radio.Group>
            )}
          </Form.Item>
          <Form.Item label="연령">
            {getFieldDecorator("slider")(
              <Slider
                marks={{
                  0: "0",
                  20: "20",
                  40: "40",
                  60: "60",
                  80: "80",
                  100: "100"
                }}
              />
            )}
          </Form.Item>
          <Form.Item label="EEG">
            {getFieldDecorator("dragger", {
              valuePropName: "fileList",
              getValueFromEvent: normFile
            })(
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </Upload.Dragger>
            )}
          </Form.Item>
          <Form.Item wrapperCol={{ span: 6, offset: 9 }}>
            <Button type="primary" htmlType="submit" size="large" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </PageContainer>
  );
};

export default Form.create()(UploadPage);
