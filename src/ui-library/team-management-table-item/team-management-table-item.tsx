import * as React from "react";

import TableCell from "@mui/material/TableCell";

import TableRow from "@mui/material/TableRow";

import Image from "next/image";
import { Badge, Box, Typography } from "@mui/material";
import { FC } from "react";
import { TeamManagementTableItemProps } from "./team-management-table-item.types";
import {
  acceptedBadgeSx,
  pendingBadgeSx,
  tableCell,
} from "./team-management-table-item.styles";
import { InlineDropdown } from "../inline-dropdown";

export const TeamManagementTableItem: FC<TeamManagementTableItemProps> = ({
  teamUser,
}) => {
  const { userImage, userFullName, userStatus, userAbilities } = teamUser;
  return (
    <TableRow>
      <TableCell sx={tableCell}>
        <Box sx={{ display: "flex", alignItems: "center", padding: "8px" }}>
          <Badge
            sx={
              userStatus === "accepted"
                ? { ...acceptedBadgeSx }
                : { ...pendingBadgeSx }
            }
            overlap="circular"
            variant="dot"
          >
            <Image
              src={userImage}
              width={48}
              height={48}
              alt="Team-member-avatar"
              style={{ borderRadius: "100px" }}
            />
          </Badge>
          <Box sx={{ marginLeft: "16px" }}>
            <Typography variant="h6">{userFullName}</Typography>
          </Box>
        </Box>
        <Box>
          {userAbilities.value === "owner" ||
          userAbilities.value === "invited" ? (
            <Typography variant="body2">{userAbilities.label}</Typography>
          ) : (
            <InlineDropdown
              options={[
                { label: "Can View", value: "can view" },
                { label: "Can Edit", value: "can edit" },
                { label: "Owner", value: "owner" },
                { label: "Remove", value: "remove" },
              ]}
              dangerOption={{ label: "Remove", value: "remove" }}
              value={userAbilities.value}
              handleChange={() => null}
              label={userAbilities.label}
              icon={<></>}
            />
          )}
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default TeamManagementTableItem;
