import RequestUtils from "../utils/api_handler";

export const GET_LIST_COIN = async (start = 1, limit = 10, customHeaders = {
    'X-CMC_PRO_API_KEY': 'e19602a3-7e3e-435f-ada1-24472522c234'
}) => {
    return await new RequestUtils({
        endpoint: `/v1/cryptocurrency/listings/latest?start=${start}&limit=${limit}`,
        customHeaders
    }).get({})
};
