import { InputJsonValue } from "../../types";

export type ListingCreateInput = {
  description: string;
  listingCreatedBy: string;
  locationData?: InputJsonValue;
  locationType: string;
  mapData?: InputJsonValue;
  placeType: string;
  price: number;
  title: string;
};
