export interface TeamManagementTableItemProps {
  teamUser: TeamUser;
}

export interface TeamUser {
  userImage: string;
  userFullName: string;
  userStatus: "pending" | "accepted";
  userAbilities:
    | { value: "owner"; label: "Owner" }
    | { value: "invited"; label: "Invited" }
    | { value: "can edit"; label: "Can Edit" }
    | { value: "can view"; label: "Can View" };
}
