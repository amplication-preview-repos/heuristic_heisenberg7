import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserSkillTitle } from "../userSkill/UserSkillTitle";

export const GradeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="name"
          label="name"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="requiredSkill" source="requiredSkill" />
        <ReferenceArrayInput
          source="userSkills"
          reference="UserSkill"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserSkillTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
