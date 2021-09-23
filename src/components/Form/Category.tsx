import { useContext } from "react";
import { FormContext } from "../../Contexts/Form/Form";
import { Fieldset, Label, Legend } from "../../UI";

export default function Category() {
  const { category, setCategory } = useContext(FormContext);

  return (
    <Fieldset
      value={category}
      onChange={(e) => {
        setCategory(e.target.value);
      }}
    >
      <Legend>Category</Legend>
      <Label htmlFor="Spent">
        Spent
        <input type="radio" data-cy='spent' id="Spent" name="category" value="Spent" required />
      </Label>
      <Label htmlFor="Gain">
        Gain
        <input type="radio" data-cy='gain' id="Gain" name="category" value="Gain" required />
      </Label>
      <Label htmlFor="Donation">
        Donation
        <input
          type="radio"
          data-cy='donation'
          id="Donation"
          name="category"
          value="Donation"
          required
        />
      </Label>
    </Fieldset>
  );
}
