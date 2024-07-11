import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { GradeTitle } from "../grade/GradeTitle";
import { UserTitle } from "../user/UserTitle";
import { SkillTitle } from "../skill/SkillTitle";

export const UserSkillEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="grade.id" reference="Grade" label="grade">
          <SelectInput optionText={GradeTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="skill.id" reference="Skill" label="skill">
          <SelectInput optionText={SkillTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
