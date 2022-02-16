import StyledStartButton from "components/system/Taskbar/StartButton/StyledStartButton";
import WindowsIcon from "components/system/Taskbar/StartButton/WindowsIcon";

type StartButtonProps = {
  startMenuVisible: boolean;
  toggleStartMenu: (showMenu?: boolean) => void;
};

const StartButton = ({
  startMenuVisible,
  toggleStartMenu,
}: StartButtonProps): JSX.Element => (
  <StyledStartButton
    $active={startMenuVisible}
    onClick={() => toggleStartMenu()}
    title="Start"
  >
    <WindowsIcon />
  </StyledStartButton>
);

export default StartButton;
