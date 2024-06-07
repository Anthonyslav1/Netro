import { FreezeRequest as TFreezeRequest } from "../api/freezeRequest/FreezeRequest";

export const FREEZEREQUEST_TITLE_FIELD = "id";

export const FreezeRequestTitle = (record: TFreezeRequest): string => {
  return record.id?.toString() || String(record.id);
};
