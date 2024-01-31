import { HttpStatusCode } from "@/api/httpStatusCodes";
import { HttpResponse } from "@/api/models";
import { Time } from "@/models/time";

import { GetTimelineResponse, PostTimeRequest } from "./models";

let timeline: Time[] = [
  // v.50
  {
    date: new Date("2022-12-12"),
    hours: 8,
  },
  {
    date: new Date("2022-12-13"),
    hours: 8,
  },
  {
    date: new Date("2022-12-14"),
    hours: 8,
  },
  {
    date: new Date("2022-12-15"),
    hours: 8.5,
  },
  {
    date: new Date("2022-12-16"),
    hours: 7.5,
  },
  // v.51
  {
    date: new Date("2022-12-19"),
    hours: 8,
  },
  {
    date: new Date("2022-12-20"),
    hours: 8,
  },
  {
    date: new Date("2022-12-21"),
    hours: 8,
  },
  {
    date: new Date("2022-12-22"),
    hours: 8.5,
  },
];

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getTimeline = async (): Promise<
  HttpResponse<GetTimelineResponse>
> => {
  await sleep(1000);
  const response: HttpResponse<GetTimelineResponse> = {
    data: { times: timeline },
    statusCode: HttpStatusCode.Ok,
  };
  return Promise.resolve(response);
};

export const postTime = async (
  request: PostTimeRequest,
): Promise<HttpResponse<Time>> => {
  timeline = [...timeline, request.time];
  await sleep(1000);

  const response: HttpResponse<Time> = {
    data: request.time,
    statusCode: HttpStatusCode.Ok,
  };

  return Promise.resolve(response);
};
