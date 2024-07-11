import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GRADE_TITLE_FIELD } from "../grade/GradeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { SKILL_TITLE_FIELD } from "../skill/SkillTitle";

export const UserSkillList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserSkills"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="grade" source="grade.id" reference="Grade">
          <TextField source={GRADE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="skill" source="skill.id" reference="Skill">
          <TextField source={SKILL_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
