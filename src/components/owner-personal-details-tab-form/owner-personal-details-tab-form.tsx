import React, { useState } from "react";
import { ProfileInfoForm } from "@/components/profile-info-form/profile-info-form";

export const OwnerPersonalDetailsTabForm = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <ProfileInfoForm isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
  );
};

export default OwnerPersonalDetailsTabForm;
