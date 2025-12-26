import { StorageKeys } from "@/constants/commonConstants/storageKeys";
import { queryClient } from "@/context/queryClientProvider";
import { getItem, saveItem } from "@/store/deviceStore/secureStore";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useLoginState = () => {
  const { data: isLoggedIn, isLoading } = useQuery({
    queryKey: [StorageKeys.IS_LOGGED_IN],
    queryFn: async () => (await getItem(StorageKeys.IS_LOGGED_IN)) ?? false,
  });

  console.log(
    "useLoginState - isLoggedIn:",
    isLoggedIn,
    StorageKeys.IS_LOGGED_IN
  );

  const setLoginState = useMutation({
    mutationFn: async (value: boolean) =>
      saveItem(StorageKeys.IS_LOGGED_IN, value),
    onSuccess: () => queryClient.invalidateQueries([StorageKeys.IS_LOGGED_IN]),
  });

  return { isLoggedIn, isLoading, setLoginState };
};
