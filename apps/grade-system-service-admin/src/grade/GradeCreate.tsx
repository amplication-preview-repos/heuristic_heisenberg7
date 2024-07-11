import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserSkillTitle } from "../userSkill/UserSkillTitle";

export const GradeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
