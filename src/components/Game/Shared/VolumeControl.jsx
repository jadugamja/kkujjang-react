import PropTypes from "prop-types";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

const VolumeControl = ({ label, currVolume, setCurrVolume }) => {
  return (
    <VolumeSliderWrapper dir="col">
      <VolumeLabel>
        {label}
        <VolumeSliderRail />
        <VolumeSliderFillTrack width={`${currVolume * 100}%`} />
        <VolumeSlider
          min="0"
          max="1"
          step="0.01"
          defaultValue={currVolume}
          onChange={(e) => setCurrVolume(parseFloat(e.target.value))}
        />
      </VolumeLabel>
    </VolumeSliderWrapper>
  );
};

VolumeControl.propTypes = {
  label: PropTypes.string,
  currVolume: PropTypes.number,
  setCurrVolume: PropTypes.func
};

const VolumeSliderWrapper = styled(FlexBox)`
  position: relative;
  width: 100%;
`;

const VolumeLabel = styled(FlexBox).attrs({ as: "label" })`
  flex-basis: 60px;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
`;

const VolumeSliderRail = styled.div`
  position: absolute;
  top: calc(50% + 4px);
  width: 100%;
  height: 14px;
  background-color: #e5e5e5;
  border: 1px solid #aaa;
  border-radius: 6px;
`;

const VolumeSliderFillTrack = styled.div`
  position: absolute;
  top: 35.8px;
  width: ${(props) => props.width};
  height: 12px;
  margin-left: 1px;
  background-color: #0075ff;
  border-radius: 5px 0 0 5px;
`;

const VolumeSlider = styled.input.attrs(() => ({ type: "range" }))`
  position: absolute;
  top: calc(50% + -5px);
  width: 100%;
  background-color: transparent;
  -webkit-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 27px;
    background-color: #0075ff;
    border: 2px solid #aaa;
    border-radius: 6px;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 27px;
    background-color: #0075ff;
    border: 2px solid #aaa;
    border-radius: 6px;
  }
`;

export default VolumeControl;
