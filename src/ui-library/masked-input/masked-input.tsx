import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { IMaskInput } from "react-imask";

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "mask"> {
  mask?: string;
}

const TextInput: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (
  props,
  ref
) => {
  const { ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask={other.mask}
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
    />
  );
};

export const MaskedInput = forwardRef(TextInput);
