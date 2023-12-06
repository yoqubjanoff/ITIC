import { Wrapper } from "./styles";
import AdminInput from "../../../../components/Reusable/AdminInput";
import Button from "../../../../components/Reusable/ButtonComb/Button";
import RegularButton from "../../../../components/Reusable/RegularButton";
import { useNavigate } from "react-router-dom";
import SelectInput from "../../../../components/Reusable/SelectInput";
import { useState } from "react";
import Toggle from "../../../../components/ToggleButton";
import TimeSelect from "../../../../components/TimeSelect";
import { useVacanciesContext } from "../../../../context/VacanciesContext";
import Toast from "../../../../components/Reusable/Toast";
import request from "../../../../services";
import Swal from "sweetalert2";
import Switch from "../../../../components/Reusable/Switch";
import Input from "../../../../components/InputComponent/Input";

function AddTeam() {
  const [selecteds1, setSelecteds1] = useState("Choose Level ");
  const [selecteds2, setSelecteds2] = useState("Choose Location");
  const [{ selected }, dispatch] = useVacanciesContext();
  const [state, setState] = useState({
    title: selected?.title || "",
    positionLevel: selected?.positionLevel || "",
    location: selected?.location || "",
    employmentType: selected?.employmentType || "ONLINE",
    salary: selected?.salary || "",
    fromTime: selected?.fromTime || "19:00",
    toTime: selected?.toTime || "10:00",
    isActive: selected?.isActive || false,
  });

  const navigate = useNavigate();
  
  //! FOR SELECT DATA
  const options = [
    { id: 0, value: "SENIOR" },
    { id: 1, value: "MIDDLE" },
    { id: 2, value: "JUNIOR" },
  ];
  const regions = [
    { id: 0, value: "TOSHKENT" },
    { id: 1, value: "SAMARQAND" },
    { id: 2, value: "ANDIJON" },
    { id: 3, value: "FARGONA" },
    { id: 4, value: "NAMANGAN" },
    { id: 5, value: "SIRDARYO" },
    { id: 6, value: "JIZZAX" },
    { id: 7, value: "XORAZM" },
    { id: 8, value: "NAVOIY" },
    { id: 9, value: "QASHQADARYO" },
    { id: 10, value: "SURXANDARYO" },
    { id: 11, value: "BUXORO" },
    { id: 12, value: "QORAQOLPOQ" },
  ];
  //! GET SELECT DATA
  const handleTimeChange = (type, value) => {
    setState((prevState) => ({
      ...prevState,
      [type === "start" ? "fromTime" : "toTime"]: value,
    }));
  };
  //! SEND DATA TO SERVER FUNCTION
  const saveDataToServer = async () => {
    if (!selected?.id) {
      if (
        state?.employmentType &&
        state?.toTime &&
        state?.location &&
        state?.positionLevel &&
        state?.title &&
        state?.salary &&
        state?.positionLevel
      ) {
        try {
          const res = await request.post(
            "admin/vacancy",
            {
              data: {
                title: state?.title || "",
                positionLevel: state?.positionLevel || "",
                location: state?.location || "",
                employmentType: state?.employmentType || "",
                fromTime: state?.fromTime || "19:00",
                toTime: state?.toTime || "10:00",
                salary: state?.salary || "",
                isActive: state?.isActive || false,
              },
            },
            Toast({
              type: "success",
              message: "Saved",
            })
          );
          navigate("/admin/vacancies");
        } catch (error) {
          Swal.fire(error.message, );
          console.error("Saqlashda xatolik yuz berdi:", error);
        }
      } else {
        Swal.fire("Avval to'ldirish maydonchalarini to'ldiring, iltimos!");
      }
    } else {
      if (state?.title && state?.positionLevel) {
        try {
          const res = await request.put("admin/vacancy", {
            data: {
              id: selected?.id,
              title: state?.title || "",
              positionLevel: state?.positionLevel || "",
              location: state?.location || "",
              salary: state?.salary || "",
              fromTime: state?.fromTime || "19:00",
              toTime: state?.toTime || "10:00",
              isActive: state?.isActive || false,
            },
          });
          navigate("/admin/vacancies");
          Toast({
            type: "success",
            message: "Saved",
          });
          dispatch({
            type: "setSelectedVacansi",
            payload: {},
          });
        } catch (error) {
          console.error("Saqlashda xatolik yuz berdi:", error);
        }
      } else {
        Swal.fire("Avval rasmni kiriting, iltimos!");
      }
    }
  };

 
  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.Title>Add Vacancy</Wrapper.Title>
        <Wrapper.Nav>
          <div onClick={() => navigate("/admin/vacancies")}>
            <RegularButton title={"Cancel"} />
          </div>
          <Button
            btnheight="42px"
            btnwidth="135px"
            title="Save changes"
            fontSize="14px"
            aHeight="42px"
            aWidth="42px"
            iconSize="24px"
            onClick={saveDataToServer}
          />
        </Wrapper.Nav>
        <Wrapper.InputTable>
          <Wrapper.WrapTable>
            <Wrapper.Flex>
              <AdminInput
                label={"Vacancy title"}
                placeholder={"Vacancy title"}
                onChange={(e) => {
                  setState({ ...state, title: e.target.value });
                }}
                value={state?.title}
              />
              <SelectInput
                selectedValue={state?.positionLevel || selecteds1}
                setSelected={(selectedValue) => {
                  setSelecteds1(selectedValue);
                  setState((prevState) => ({
                    ...prevState,
                    positionLevel: selectedValue,
                  }));
                }}
                options={options}
              />
            </Wrapper.Flex>
            <Wrapper.Flex>
              <SelectInput
                selectedValue={state?.location || selecteds2}
                setSelected={(seletedValue) => {
                  setSelecteds2(seletedValue);
                  setState((prevState) => ({
                    ...prevState,
                    location: seletedValue,
                  }));
                }}
                options={regions}
              />
              <Toggle
                active={state.employmentType}
                onClick={(isActive) => {
                  setState({
                    ...state,
                    employmentType: isActive,
                  });
                }}
              />
            </Wrapper.Flex>
            <Wrapper.Flex>
              <TimeSelect
                onTimeChange={handleTimeChange}
                defaultEndTime={handleTimeChange}
                defaultStartTime={state?.fromTime}
              />
              <AdminInput
                prefix={"USD |"}
                label={"Salary"}
                placeholder={"Enter Salary"}
                onChange={(e) => {
                  setState({ ...state, salary: e.target.value });
                }}
                value={state?.salary}
                type={"number"}
              />
              <Switch
                onClick={(v) => setState({ ...state, isActive: v })}
                checked={state?.isActive ? true : false}
              />{" "}
              Active
            </Wrapper.Flex>
          </Wrapper.WrapTable>
        </Wrapper.InputTable>
      </Wrapper.Wrap>
    </Wrapper>
  );
}

export default AddTeam;
