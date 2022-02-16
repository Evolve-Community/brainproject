import { sortFiles } from "components/system/Files/FileManager/functions";
import type { Files } from "components/system/Files/FileManager/useFolder";
import { useSession } from "contexts/session";
import { useEffect, useState } from "react";

export type SortBy = "date" | "name" | "size" | "type";

export type SortByOrder = [SortBy, boolean];

export type SetSortBy = (sortBy: (current: SortByOrder) => SortByOrder) => void;

const useSortBy = (
  directory: string,
  files?: Files
): [SortByOrder, SetSortBy] => {
  const { setSortOrder, sortOrders } = useSession();
  const [currentSortBy, setCurrentSortBy] = useState<SortByOrder>([
    "name",
    true,
  ]);

  useEffect(() => {
    const { [directory]: [, sessionSortBy, sessionAscending] = [] } =
      sortOrders || {};

    if (
      typeof sessionSortBy === "string" &&
      typeof sessionAscending === "boolean"
    ) {
      setCurrentSortBy([sessionSortBy, sessionAscending]);
    }
  }, [directory, sortOrders]);

  return [
    currentSortBy,
    (sortBy: (current: SortByOrder) => SortByOrder): void => {
      const newSortBy = sortBy(currentSortBy);
      const [sortByValue, isAscending] = newSortBy;

      if (files) {
        setSortOrder(
          directory,
          Object.keys(sortFiles(directory, files, sortByValue, isAscending)),
          sortByValue,
          isAscending
        );
      }
    },
  ];
};

export default useSortBy;
