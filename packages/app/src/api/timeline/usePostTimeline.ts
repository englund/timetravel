import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PostTimeRequest } from "./models";
import { queryKey } from "./queryKeys";
import { postTime } from "./timeline.api";

export const usePostTimeline = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isError, isLoading, error } = useMutation(
    async (request: PostTimeRequest) => await postTime(request),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKey]);
      },
    }
  );
  return {
    post: (request: PostTimeRequest) => mutateAsync(request),
    isError,
    isLoading,
    error,
  };
};
