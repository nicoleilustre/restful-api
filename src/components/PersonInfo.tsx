import React from "react";
import { PersonInfoInterface } from "../App";

interface PersonInfoProps {
  personInfo: PersonInfoInterface;
}

export const PersonInfo = ({ personInfo }: PersonInfoProps) => {
  return (
    <div>
      {personInfo.picture?.large && personInfo.name?.first && (
        <img src={personInfo.picture.large} alt={personInfo.name.first} />
      )}
      {personInfo.name && (
        <div>
          Name: {personInfo.name.first} {personInfo.name.last}
        </div>
      )}
      {personInfo.dob?.age && <div>Age: {personInfo.dob.age}</div>}
      {personInfo.gender && <div>Gender: {personInfo.gender}</div>}
    </div>
  );
};
