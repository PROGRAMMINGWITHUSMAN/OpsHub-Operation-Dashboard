import { useQuery } from "@tanstack/react-query";
import  fetchAPI from "../Services/fetchAPI";

export const useCustomQuery = (querykey, url) => {
    return useQuery({
        queryKey: [querykey, url],
        queryFn: () => fetchAPI(url),
    });
};
