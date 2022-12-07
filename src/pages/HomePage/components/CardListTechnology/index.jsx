import { useContext } from "react";
import { EmptyTechnology } from "../EmptyTechnology";
import { UserContext } from "../../../../contexts/UserContext";
import { CardTechnology } from "../CardTechnology";
import { StyledCardListTecno } from "./styles";

export const CardListTechnology = () => {
  const { user } = useContext(UserContext);
  return (
    <StyledCardListTecno>
      {user.techs.length > 0 ? (
        user.techs.map((tech) => <CardTechnology tech={tech} />)
      ) : (
        <EmptyTechnology />
      )}
    </StyledCardListTecno>
  );
};
