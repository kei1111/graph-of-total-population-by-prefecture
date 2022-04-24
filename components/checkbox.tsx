import React from "react";

interface Props {
  prefectures: {
    prefCode: number;
    prefName: string;
  }[];
  onChange: (name: string, prefName: number, isCheck: boolean) => void;
}

const Checkbox: React.FC<Props> = ({ prefectures, onChange }) => {
  return (
    <>
      <div className="flex flex-wrap">
        {prefectures.map((prefecture) => (
          <div key={prefecture.prefName}>
            <div className="flex m-2">
              <div>
                <input
                  type="checkbox"
                  name="Prefecture name"
                  onChange={(event) =>
                    onChange(
                      prefecture.prefName,
                      prefecture.prefCode,
                      event.target.checked
                    )
                  }
                  id={"checkbox" + prefecture.prefCode}
                />
              </div>
              <div>
                <label>{prefecture.prefName}</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Checkbox;
