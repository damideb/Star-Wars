import { passwordCriteria } from "./utils";
import { IoMdCheckmark } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";

export const renderPasswordStrength = (
  data: string,
  criteria: {
    label: string;
    test: (password: string, confirmPassword?: string) => boolean;
  }[] = passwordCriteria
) => (
  <>
    {criteria?.map((criterion, index) => (
      <li key={index} className="flex items-center ">
        {criterion.test(data) ? (
          <IoMdCheckmark className="text-green-500 mr-2 w-5 h-5" />
        ) : (
          <HiMiniXMark className="text-red-500 mr-2 w-5 h-5" />
        )}
        <span className="text-sm text-gray-600">{criterion.label}</span>
      </li>
    ))}
  </>
);
