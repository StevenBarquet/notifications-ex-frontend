import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { appStateActions } from 'src/redux/appState/actions';

export function useQueryTableData() {
  const dispatch = useDispatch();
  const { isLoading, data, isFetching, refetch } = useQuery({
    staleTime: Infinity,
    queryKey: ['tableData'],
    queryFn: () => axios.get('http://localhost:4000/table-ex/').then((res) => res.data),
  });
  /** Update loading spinner */
  useEffect(() => {
    dispatch(appStateActions.updateState({ isLoading: isFetching || isLoading }));
  }, [isLoading, isFetching]);

  return { data, refetch };
}
