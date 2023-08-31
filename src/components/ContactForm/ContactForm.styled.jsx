import styled from '@emotion/styled';
import { Form, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  margin-top: 16px;
`;

export const Label = styled.label`
  font-size: 21px;
  display: block;
  padding: 4px 0;
`;

export const FieldWrapper = styled.div`
  height: 70px;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
`;
