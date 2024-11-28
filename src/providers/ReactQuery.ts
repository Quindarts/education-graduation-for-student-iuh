import { QueryClient } from "@tanstack/react-query";


export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            retry: 1,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    },
});
