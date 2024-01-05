import PropTypes from "prop-types";
import styled from "styled-components";

const VolumeControl = ({ currVolume, setCurrVolume }) => {
  return (
    <SliderWrapper>
      <SliderRail />
      <SliderFillTrack width={`${currVolume * 100}%`} />
      <Slider
        min="0"
        max="1"
        step="0.01"
        defaultValue={currVolume}
        onChange={(e) => setCurrVolume(parseFloat(e.target.value))}
      />
    </SliderWrapper>
  );
};

VolumeControl.propTypes = {
  currVolume: PropTypes.number,
  setCurrVolume: PropTypes.func
};

const SliderWrapper = styled.div`
  position: relative;
  width: 23rem;
`;

const SliderRail = styled.div`
  position: absolute;
  top: calc(50% - 25px);
  width: 100%;
  height: 14px;
  background-color: #e5e5e5;
  border: 1px solid #aaa;
  border-radius: 6px;
`;

const SliderFillTrack = styled.div`
  position: absolute;
  top: -24.2px;
  width: ${(props) => props.width};
  height: 12px;
  margin-left: 1px;
  background-color: #0075ff;
  border-radius: 5px 0 0 5px;
`;

const Slider = styled.input.attrs(() => ({ type: "range" }))`
  position: absolute;
  top: calc(50% - 34px);
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
