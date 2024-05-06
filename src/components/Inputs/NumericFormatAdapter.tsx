import React from "react";
import {NumericFormat, NumericFormatProps} from "react-number-format";

interface Props {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export function NumericFormatAdapter(decimalScale?: number) {
  return React.forwardRef<NumericFormatProps, Props>(
    function NumericFormatAdapter(props, ref) {
      const { onChange, ...other } = props;

      return (
        <NumericFormat
          {...other}
          getInputRef={ref}
          onValueChange={(values) => {
            onChange({
              target: {
                name: props.name,
                value: values.value,
              },
            });
          }}
          thousandSeparator
          valueIsNumericString
          decimalScale={decimalScale}
        />
      );
    },
  );
}
