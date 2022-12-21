import { useQuery } from "@tanstack/react-query";

import { queryKey } from "./queryKeys";
import { getTimeline } from "./timeline.api";

export const useTimeline = () => {
  return useQuery([queryKey], getTimeline);
};
