import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { appStateActions } from 'src/redux/appState/actions';

/**
 *
 * @returns {{
 * data: {
 * id: number;
 * node_id: string;
 * name: string;
 * full_name: string;
 * private: boolean;
 * owner: {
 *   login: string;
 *   id: number;
 *   node_id: string;
 *   avatar_url: string;
 *   gravatar_id: string;
 *   url: string;
 *   html_url: string;
 *   followers_url: string;
 *   following_url: string;
 *   gists_url: string;
 *   starred_url: string;
 *   subscriptions_url: string;
 *   organizations_url: string;
 *   repos_url: string;
 *   events_url: string;
 *   received_events_url: string;
 *   type: string;
 *   site_admin: boolean;
 * };
 * }[];
 * refetch: ()=>void,
 * }}
 */
export function useQueryGetData() {
  const dispatch = useDispatch();
  const { isLoading, data, isFetching, refetch } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => axios.get('https://api.github.com/users/octocat/repos').then((res) => res.data),
  });
  /** Update loading spinner */
  useEffect(() => {
    dispatch(appStateActions.updateState({ isLoading: isFetching || isLoading }));
  }, [isLoading, isFetching]);

  return { data, refetch };
}
