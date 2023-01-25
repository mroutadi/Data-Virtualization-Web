import styles from "./styles.module.scss";
import { useState, useMemo } from "react";
import { FileUploader } from "../file-uploader";
import { Histogram } from "../D3/Histogram";

export const SvgWrapper = ({
  keyColTitle = "key",
  valColTitle = "value",
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
  const memoized = useMemo(
    () => (
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
    ),
    [data],
  );
  return (
    <div className={`${styles.SvgWrapper} ${isActive ? "" : styles.SvgWrapper__hidden}`}>
      <h2 className={styles.SvgWrapper__Title}>{tabName}</h2>
      <FileUploader
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setData={setData}
        fields={fields}
      />
      {data && memoized}
    </div>
  );
};
