import { Button } from "../../../../styles/buttons";
import { Typography } from "../../../../styles/typography";
import { StyledMainTop } from "./styles";
import { FaPlus } from "react-icons/fa";

export const MainTop = () => {
  return (
    <StyledMainTop>
      <Typography fontweight="semibold" fontcolor="grey0" fonttype="title2">
        Tecnologia
      </Typography>
      <Button buttonstyle="icon" buttoncolor="grey">
        <FaPlus />
      </Button>
    </StyledMainTop>
  );
};
