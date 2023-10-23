import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

import { TeamManagementTableItem } from "../team-management-table-item/team-management-table-item";
import { TeamUser } from "../team-management-table-item/team-management-table-item.types";
import { Box } from "@mui/material";

const users: Array<TeamUser> = [
  {
    userFullName: "Jamie James",
    userImage: "/images/avatar.png",
    userStatus: "accepted",
    userAbilities: { value: "owner", label: "Owner" },
  },
  {
    userFullName: "Jamie John",
    userImage: "/images/avatar.png",
    userStatus: "accepted",
    userAbilities: { value: "can edit", label: "Can Edit" },
  },
  {
    userFullName: "John Doe",
    userImage: "/images/avatar.png",
    userStatus: "pending",
    userAbilities: { value: "invited", label: "Invited" },
  },
];

export const TeamManagementTable = () => {
  return (
    <TableContainer component={Box}>
      <Table aria-label="simple table">
        <TableBody>
          {users.map((user, ind) => (
            <TeamManagementTableItem key={ind} teamUser={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeamManagementTable;
