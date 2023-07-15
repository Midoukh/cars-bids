import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type CountDownType = {
  diff: number;
  day: string;
  time: string;
  ended: boolean;
  sold: boolean;
};
export const CountDown: React.FC<CountDownType> = ({
  diff,
  day,
  time,
  ended,
  sold,
}) => {
  const [remainingTime, setRemainingTime] = useState<number>(diff);

  const calculateDays = (seconds: number): number => {
    return Math.floor(seconds / (24 * 60 * 60));
  };

  // Update the remaining time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
  }, []);

  // Calculate the hours, minutes, and seconds from the remaining time
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  // Format the time as HH:MM:SS
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  const isSoldMsg = sold ? "Vendue" : "Invendue";
  return (
    <Box>
      {hours >= 24 ? (
        <Text fontSize={"20px"} fontWeight={"bold"}>
          {ended
            ? "Terminée"
            : calculateDays(diff) > 1
            ? calculateDays(diff) + " jours"
            : calculateDays(diff) + " jour"}
        </Text>
      ) : (
        <Text fontSize={"20px"} fontWeight={"bold"}>
          {formattedTime}
        </Text>
      )}
      <Text opacity={".7"}>{ended ? isSoldMsg : `${day} ${time}`}</Text>
    </Box>
  );
};
