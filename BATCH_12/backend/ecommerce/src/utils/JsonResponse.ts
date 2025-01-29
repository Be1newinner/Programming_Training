type JSONResponseType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: any;
  status_code: number;
  application_code?: number;
  message?: string;
};

export default function JSONResponse({
  data,
  meta,
  status_code,
  application_code,
  message,
}: JSONResponseType) {
  return {
    data: data || null,
    meta: meta || {},
    status_code: status_code || 200, // HTTP STATUS CODES https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    application_code: application_code || status_code,
    message: message || "",
  };
}
