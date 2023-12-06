import { Wrapper } from "./styles";
import arrow from "../../assets/icons/angle-down.svg";
import { useState } from "react";

function TimeSelect({ defaultStartTime, defaultEndTime, onTimeChange }) {
  const [isActive, setIsActive] = useState(false);

  const TimeData = [
    {
      id: "09:00",
      caption: "09:00",
    },
    {
      id: "10:00",
      caption: "10:00",
    },
    {
      id: "11:00",
      caption: "11:00",
    },
    {
      id: "12:00",
      caption: "12:00",
    },
    {
      id: "13:00",
      caption: "13:00",
    },
    {
      id: "14:00",
      caption: "14:00",
    },
    {
      id: "15:00",
      caption: "15:00",
    },
    {
      id: "16:00",
      caption: "16:00",
    },
    {
      id: "17:00",
      caption: "17:00",
    },
    {
      id: "18:00",
      caption: "18:00",
    },
    {
      id: "19:00",
      caption: "19:00",
    },
    {
      id: "20:00",
      caption: "20:00",
    },
    {
      id: "21:00",
      caption: "21:00",
    },
    {
      id: "22:00",
      caption: "22:00",
    },
    {
      id: "23:00",
      caption: "23:00",
    },
    {
      id: "24:00",
      caption: "24:00",
    },
    {
      id: "01:00",
      caption: "01:00",
    },
    {
      id: "02:00",
      caption: "02:00",
    },
    {
      id: "03:00",
      caption: "03:00",
    },
    {
      id: "04:00",
      caption: "04:00",
    },
    {
      id: "05:00",
      caption: "05:00",
    },
    {
      id: "06:00",
      caption: "06:00",
    },
    {
      id: "07:00",
      caption: "07:00",
    },
    {
      id: "08:00",
      caption: "08:00",
    },
  ];
  return (
    <Wrapper>
      <Wrapper.Header>Time</Wrapper.Header>
      <Wrapper.Wrap>
        <Wrapper.Pre>From</Wrapper.Pre>
        <Wrapper.Select
          value={defaultStartTime}
          onChange={(e) => onTimeChange("start", e.target.value)}
        >
          {TimeData.map((item) => (
            <option key={item.id} value={item.id}>
              {item.id}
            </option>
          ))}
        </Wrapper.Select>
        <Wrapper.Suf>
          <img src={arrow} alt="arrow icon" />
        </Wrapper.Suf>

        <Wrapper.Pre>To</Wrapper.Pre>
        <Wrapper.Select
          value={defaultEndTime}
          onChange={(e) => onTimeChange("end", e.target.value)}
        >
          {TimeData.map((item) => (
            <option key={item.id} value={item.id}>
              {item.id}
            </option>
          ))}
        </Wrapper.Select>
        <Wrapper.Suf>
          <img src={arrow} alt="arrow icon" />
        </Wrapper.Suf>
      </Wrapper.Wrap>
    </Wrapper>
  );
}

export default TimeSelect;
