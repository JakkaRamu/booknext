import { THEME_DeFAULT } from "@/constants/commonConstants/appConstants";
import { StorageKeys } from "@/constants/commonConstants/storageKeys";
import { queryClient } from "@/context/queryClientProvider";
import { getItem, saveItem } from "@/store/deviceStore/secureStore";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useThemeStore = () => {
  const queryKey = [StorageKeys.THEME];

  const {
    data: theme,
    isLoading,
    refetch,
  } = useQuery({
    queryKey,
    queryFn: async () => {
      const result = await getItem(StorageKeys.THEME);
      console.log("🎨 Theme fetched from storage:", result);
      return result ?? THEME_DeFAULT;
    },
    staleTime: Infinity, // Prevent auto-refetch
  });

  const setTheme = useMutation({
    mutationFn: async (themeValue: string) => {
      console.log("🎨 Saving theme to storage:", themeValue);
      await saveItem(StorageKeys.THEME, themeValue);
      return themeValue;
    },
    onSuccess: (savedTheme) => {
      console.log("🎨 Mutation succeeded, updating cache with:", savedTheme);
      // Update the cache immediately
      queryClient.setQueryData(queryKey, savedTheme);
      // Then refetch to be sure
      queryClient.refetchQueries({ queryKey });
    },
    onError: (error) => {
      console.error("🎨 Error saving theme:", error);
    },
  });

  return { theme, setTheme, isLoading, refetch };
};
