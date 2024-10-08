import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ isOn, name, id }) {
  function handleToggle() {
    setIsOn((isOn) => !isOn);
  }

  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle();
      }}
      $isOn={isOn}
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "ON" : "OFF"}</State>
      </Text>
    </LightButton>
  );
}
