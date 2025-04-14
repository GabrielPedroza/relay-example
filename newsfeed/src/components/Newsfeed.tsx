import * as React from "react";
import { useLazyLoadQuery, usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";
import Sidebar from "./Sidebar";
import Story from "./Story";
import type { NewsfeedQuery as NewsfeedQueryType } from "./__generated__/NewsfeedQuery.graphql";
import type { NewsfeedContentsFragment$key } from "./__generated__/NewsfeedContentsFragment.graphql";
import InfiniteScrollTrigger from "./InfiniteScrollTrigger";
import { NewsfeedContentsRefetchQuery } from "./__generated__/NewsfeedContentsRefetchQuery.graphql";

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    ...NewsfeedContentsFragment
  }
`;

const NewsfeedContentsFragment = graphql`
  fragment NewsfeedContentsFragment on Query
  @refetchable(queryName: "NewsfeedContentsRefetchQuery")
  @argumentDefinitions(
    cursor: { type: "String"},
    count: { type: "Int", defaultValue: 3 }
    ){
    viewer {
      newsfeedStories(after: $cursor, first: $count)
      @connection(key: "NewsfeedContentsFragment_newsfeedStories")
      {
        edges {
          node {
            id
            ...StoryFragment
          }
        }
      }
      ...SidebarFragment
    }
  }
`;
export default function Newsfeed() {

  const queryData = useLazyLoadQuery<NewsfeedQueryType>(
    NewsfeedQuery,
    {},
  );

  const {
    data,
    loadNext,
    hasNext,
    isLoadingNext,
  } = usePaginationFragment<NewsfeedContentsRefetchQuery, NewsfeedContentsFragment$key>(NewsfeedContentsFragment, queryData);

  function onEndReached() {
    loadNext(1);
  }
  const stories = data.viewer.newsfeedStories.edges;

  return (
    <>
      <Sidebar data={data.viewer} />
      <div className="newsfeed">
        {stories.map((story) => <Story key={story.node.id} story={story.node} />)}
      </div>
      <InfiniteScrollTrigger onEndReached={onEndReached} hasNext={hasNext} isLoadingNext={isLoadingNext} />
    </>
  );
}
