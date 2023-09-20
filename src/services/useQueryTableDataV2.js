import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export function useQueryTableDataV2() {
  const { data, refetch } = useQuery({
    refetchInterval: 1000,
    queryKey: ['tableDataV2'],
    queryFn: () => axios.get('http://localhost:4000/table-ex/').then((res) => res.data),
  });
  /** Update loading spinner */

  return { data, refetch };
}
