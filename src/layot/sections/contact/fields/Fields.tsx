import styled from "styled-components";

export const Fields = () => {
  return (
    <Form>
      <Field />
      <Field />
      <FieldBig />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Field = styled.input.attrs(({ type, placeholder }) => ({
  type: type || "text",
  placeholder: placeholder || "Name"
}))`
  padding: 7px 15px;
  width: 100%;
  max-width: 540px;
  height: 32px;
  border: 1px solid #4a4a4a;
  background-color: #252527;
  &::placeholder {
    color: #4a4a4a;
  }
`;

const FieldBig = styled.input.attrs(({ type, placeholder }) => ({
  type: type || "text",
  placeholder: placeholder || "Name"
}))`
  font-size: 12px;
  padding: 15px;
  width: 100%;
  max-width: 540px;
  height: 155px;
  border: 1px solid #4a4a4a;
  background-color: #252527;
  &::placeholder {
    position: absolute;
    top: 10px;
    color: #4a4a4a;
  }
`;
