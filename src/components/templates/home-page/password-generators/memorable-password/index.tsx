"use client";

import { Copy01Icon, RefreshIcon } from "hugeicons-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import copyToClipboard from "@/utils/copy-to-clipboard";
import { usePasswordStrengthMeter } from "@/hooks/usePasswordMeter";
import Text from "@/components/ui/shared/components/typography/Text";
import PasswordStrengthCriteria from "@/components/ui/shared/components/password-strength-criteria";
import Customization from "./customization";
import PasswordStrength from "../password-strength";
import { useAnalytics } from "@/hooks/useAnalytics";

const MemorablePassword = () => {
  const [wordList, setWordList] = useState<string[]>([]);
  const [customOptions, setCustomOptions] = useState([
    { text: "Use number", isTrue: false },
    { text: "Use characters", isTrue: false },
    { text: "Use Uppercase", isTrue: false },
  ]);
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(3);
  const [passwordStrength, setPasswordStrength] = useState<string>("");
  const [strengthColor, setStrengthColor] = useState<string>("");
  const { trackPasswordCopy, trackPasswordGeneration, trackPasswordStrength } = useAnalytics();

  useEffect(() => {
    fetch("/eff_large_wordlist.txt")
      .then((response) => response.text())
      .then((text) => {
        const words = text.split("\n");
        setWordList(words.filter((word) => word));
      });
  }, []);

  const transformWord = (word: string): string => {
    if (customOptions.find((option) => option.text === "Use Uppercase" && option.isTrue)) {
      const index = Math.floor(Math.random() * word.length);
      word =
        word.substring(0, index) + word.charAt(index).toUpperCase() + word.substring(index + 1);
    }
    if (customOptions.find((option) => option.text === "Use number" && option.isTrue)) {
      word += Math.floor(Math.random() * 10).toString();
    }
    if (customOptions.find((option) => option.text === "Use characters" && option.isTrue)) {
      const specialChars = "!@#$%^&*";
      word += specialChars[Math.floor(Math.random() * specialChars.length)];
    }
    return word;
  };

  const generatePassword = (): void => {
    if (wordList.length === 0) return;

    // eslint-disable-next-line prefer-const
    let newPassword: string[] = [];
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * wordList.length);
      const entry = wordList[randomIndex]?.split("\t")[1];
      if (entry) {
        const word = transformWord(entry);
        newPassword.push(word);
      }
    }
    setPassword(newPassword.join("-"));
  };

  useEffect(() => {
    generatePassword();
    if (password) {
      trackPasswordGeneration("memorable");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordList, passwordLength, customOptions]);

  const handleRefreshClick = (): void => {
    generatePassword();

    if (password) {
      trackPasswordGeneration("memorable");
    }
  };

  // show strength of passwords
  const { handleShowPasswordStrength } = usePasswordStrengthMeter();

  useEffect(() => {
    const result = handleShowPasswordStrength(password);
    setPasswordStrength(result.strengthMessage);
    setStrengthColor(result.color);

    if (password && result.strengthMessage) {
      trackPasswordStrength(result.strengthMessage);
    }
  }, [password]);

  const handlePasswordLengthChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // eslint-disable-next-line prefer-const
    let newLength = parseInt(event.target.value, 10);
    if (!isNaN(newLength) && newLength >= 1 && newLength <= 10) {
      setPasswordLength(newLength);
    }
  };

  const handleCopyToClipboard = () => {
    copyToClipboard(password);
    trackPasswordCopy("memorable");
  };

  return (
    <div>
      <div className="flex items-center border border-grey-200  rounded-[16px] h-[75px] overflow-hidden">
        <input
          readOnly
          type="text"
          className="flex-1 h-full !text-primary-300 !font-semibold  outline-none !text-[16px] !md:text-[20px]  px-4 bg-transparent "
          value={password}
        />

        <div className="flex items-center">
          <div className="h-[46px] w-fit border border-grey-200" />
          <div className=" active:scale-105  transition-all rotate-45 duration-300">
            <RefreshIcon
              onClick={handleRefreshClick}
              className="mx-5 cursor-pointer active:size-10 transition-all active:rotate-180 duration-300"
            />
          </div>
        </div>
      </div>

      <div className="flex space-x-6 justify-between mt-2 border-b border-grey-200 pb-4 pr-[22px]">
        <PasswordStrength passwordStrength={passwordStrength} strengthColor={strengthColor} />
        <div onClick={handleCopyToClipboard} className="flex items-center cursor-pointer w-fit ">
          <Text size="xl" className="text-primary-500 cursor-pointer underline">
            Copy
          </Text>
          <Copy01Icon className=" text-primary-500 size-4 ml-1" />
        </div>
      </div>

      <PasswordStrengthCriteria />

      <div>
        <Input
          className="w-[133px] h-[37px] text-[20px] text-grey-100"
          label="Number of words"
          type="number"
          defaultValue={passwordLength.toString()}
          onChange={handlePasswordLengthChange}
          min={1}
          max={10}
        />
      </div>

      <div>
        <Customization options={customOptions} setOptions={setCustomOptions} />
      </div>
    </div>
  );
};

export default MemorablePassword;
