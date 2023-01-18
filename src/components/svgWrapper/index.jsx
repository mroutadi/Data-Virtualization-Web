import styles from "./styles.module.scss";
import { useState } from "react";
import { FileUploader } from "../file-uploader";
import { Histogram } from "../D3/Histogram";

export const SvgWrapper = ({
  keyColTitle = "key",
  valColTitle = "value",
  className = "",
  tabName = "",
  isActive = false,
}) => {
  const fields = [
    {
      label: keyColTitle,
      key: keyColTitle,
      fieldType: {
        type: "input",
      },
      example: "Key",
      validations: [
        {
          rule: "required",
          errorMessage: `${keyColTitle} is required`,
          level: "error",
        },
      ],
    },
    {
      label: valColTitle,
      key: valColTitle,
      fieldType: {
        type: "input",
      },
      example: "Value",
      validations: [
        {
          rule: "required",
          errorMessage: `${valColTitle} is required`,
          level: "error",
        },
      ],
    },
  ];
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState(null);
  return (
    <div className={`${className} ${isActive ? "" : styles.SvgWrapper__hidden}`}>
      <FileUploader
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setData={setData}
        fields={fields}
      />
      {data && (
        <svg className={styles.SvgWrapper__svgContainer}>
          <Histogram
            data={data?.validData}
            options={{
              value: (d) => +d?.[valColTitle],
              label: tabName,
              color: "steelblue",
            }}
          />
        </svg>
      )}
    </div>
  );
};
