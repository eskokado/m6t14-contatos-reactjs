import { useContext } from "react";
import { EmptyTechnology } from "../EmptyTechnology";
import { CardTechnology } from "../CardTechnology";
import { StyledCardListTecno } from "./styles";
import { TechContext } from "../../../../contexts/TechContext";

export const CardListTechnology = () => {
  const { techs } = useContext(TechContext);
  return (
    <StyledCardListTecno>
      {techs.length > 0 ? (
        techs.map((tech) => <CardTechnology key={tech.id} tech={tech} />)
      ) : (
        <EmptyTechnology />
      )}
    </StyledCardListTecno>
  );
};
