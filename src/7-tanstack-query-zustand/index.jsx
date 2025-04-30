import LightShoppingCart from "./light-shopping-cart";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()

function Exercise() {
  return (
      <QueryClientProvider client={queryClient}>
        <LightShoppingCart />
        <ReactQueryDevtools />
      </QueryClientProvider>
  );
}

export default Exercise;
