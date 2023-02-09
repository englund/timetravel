import { useQuery } from "@tanstack/react-query";

import { Time } from "@/models/time";

import { queryKey } from "./queryKeys";
import { getTimeline } from "./timeline.api";

interface UseTimeline {
  data: Time[] | undefined;
}

export const useTimeline = (): UseTimeline => {
  return useQuery([queryKey], async () => {
    const response = await getTimeline();
    return response.data.times;
  });
};
