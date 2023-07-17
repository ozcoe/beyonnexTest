import styled from 'styled-components';

interface TemperatureProps {
  targetTemperature: number;
  min: number;
  max: number;
}

const Wrapper = styled.div``;

const Circle = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Wrap = styled.div`
  overflow: hidden;
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  background: white;
  border: 5px solid grey;
`;

const TargetIndicator = styled.span<{ degree?: number }>`
  position: absolute;
  height: 150px;
  width: 3px;
  top: 50%;
  left: 50%;
  background: linear-gradient(to top, black 0%, black 70%, transparent 70%, transparent 100%);
  transform-origin: top center;
  transform: rotate(${(props) => props.degree}deg);
  z-index: 9999;
`;

const Min = styled.span`
  position: absolute;
  height: 190px;
  width: 3px;
  top: 50%;
  left: 50%;
  background: linear-gradient(to top, black 0%, black 19%, transparent 19%, transparent 100%);
  transform-origin: top center;
  transform: rotate(45deg);
  z-index: 1;
`;

const Max = styled.span`
  position: absolute;
  height: 190px;
  width: 3px;
  top: 50%;
  left: 50%;
  background: linear-gradient(to top, black 0%, black 19%, transparent 19%, transparent 100%);
  transform-origin: top center;
  transform: rotate(-45deg);
  z-index: 1;
`;

export default function Temperature({ targetTemperature, min, max }: TemperatureProps) {
  if (targetTemperature > max) {
    return <div>Target temperature is not allowed to be higher than max</div>;
  }
  if (targetTemperature < min) {
    return <div>Target temperature is not allowed to be smaller than min</div>;
  }
  if (max <= min) {
    return <div>Max has to be higher than min</div>;
  }

  const percentage = ((targetTemperature - min) / (max - min)) * 100;

  const displayAngle = (percentage * (315 - 45)) / 100 + 45;

  return (
    <>
      <Wrapper>
        <Circle>
          <Wrap></Wrap>
          <TargetIndicator degree={displayAngle} />
          <Min />
          <Max />
        </Circle>
      </Wrapper>
      <span>Target temperature:{targetTemperature}°</span>
    </>
  );
}
