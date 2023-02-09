import { Time } from "@/models/time";

export interface GetTimelineResponse {
  times: Time[];
}

export interface PostTimeRequest {
  time: Time;
}
