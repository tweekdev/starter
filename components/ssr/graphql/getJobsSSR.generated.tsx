import * as Types from "../../../src/types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetJobsSsrQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetJobsSsrQuery = {
    __typename?: "Query";
    jobs: Array<{ __typename?: "Job"; id: string; title: string; postedAt: any }>;
};

export const GetJobsSsrDocument = gql`
    query getJobsSSR {
        jobs {
            id
            title
            postedAt
        }
    }
`;

/**
 * __useGetJobsSsrQuery__
 *
 * To run a query within a React component, call `useGetJobsSsrQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobsSsrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobsSsrQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetJobsSsrQuery(
    baseOptions?: Apollo.QueryHookOptions<GetJobsSsrQuery, GetJobsSsrQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetJobsSsrQuery, GetJobsSsrQueryVariables>(GetJobsSsrDocument, options);
}
export function useGetJobsSsrLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetJobsSsrQuery, GetJobsSsrQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetJobsSsrQuery, GetJobsSsrQueryVariables>(
        GetJobsSsrDocument,
        options,
    );
}
export type GetJobsSsrQueryHookResult = ReturnType<typeof useGetJobsSsrQuery>;
export type GetJobsSsrLazyQueryHookResult = ReturnType<typeof useGetJobsSsrLazyQuery>;
export type GetJobsSsrQueryResult = Apollo.QueryResult<GetJobsSsrQuery, GetJobsSsrQueryVariables>;
