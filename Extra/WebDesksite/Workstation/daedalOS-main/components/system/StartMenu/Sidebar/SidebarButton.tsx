import StyledSidebarButton from "components/system/StartMenu/Sidebar/StyledSidebarButton";
import { useRef } from "react";
import { spotlightEffect } from "utils/spotlightEffect";

type SidebarButton = {
  action?: () => void;
  active?: boolean;
  heading?: boolean;
  icon: JSX.Element;
  name: string;
  tooltip?: string;
};

export type SidebarButtons = SidebarButton[];

const SidebarButtonComponent = ({
  action,
  active,
  heading,
  icon,
  name,
  tooltip,
}: SidebarButton): JSX.Element => {
  const buttonRef = useRef<HTMLLIElement | null>(null);

  return (
    <StyledSidebarButton
      ref={buttonRef}
      $active={active}
      onClick={action}
      title={tooltip}
      {...spotlightEffect(buttonRef.current, true)}
    >
      <figure>
        {icon}
        <figcaption>{heading ? <strong>{name}</strong> : name}</figcaption>
      </figure>
    </StyledSidebarButton>
  );
};

export default SidebarButtonComponent;
