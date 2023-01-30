import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Time } from "@/models/time";

import { PostTimeRequest } from "./models";
import { queryKey } from "./queryKeys";
import { postTime } from "./timeline.api";

interface UsePostTimeline {
  post: (time: Time) => Promise<Time>;
}

export const usePostTimeline = (): UsePostTimeline => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    async (request: PostTimeRequest) => await postTime(request),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey]);
      },
    }
  );
  return {
    post: (time) => mutateAsync({ time }),
  };
};
