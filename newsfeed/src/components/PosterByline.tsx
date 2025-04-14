import * as React from "react";
import { useFragment, useQueryLoader } from "react-relay";
import { graphql } from "relay-runtime";
import Image from "./Image";
import { PosterBylineFragment$key } from "./__generated__/PosterBylineFragment.graphql";
import Hovercard from './Hovercard';
import PosterDetailsHovercardContents, { PosterDetailsHovercardContentsQuery } from './PosterDetailsHovercardContents';
import type { PosterDetailsHovercardContentsQuery as QueryType } from "./__generated__/PosterDetailsHovercardContentsQuery.graphql";

const { useRef } = React;

export type Props = {
  poster: PosterBylineFragment$key
};

const PosterBylineFragment = graphql`
  fragment PosterBylineFragment on Story {
    poster {
      id
      name
      profilePicture {
        ...ImageFragment @arguments(width: 800, height: 500)
      }
    }
  }
`

export default function PosterByline({ poster }: Props): React.ReactElement {
  const data = useFragment(
    PosterBylineFragment, poster
  )
  const hoverRef = useRef(null)

  if (poster == null) {
    return null;
  }

  const [
    queryKey,
    loadQuery
  ] = useQueryLoader<QueryType>(PosterDetailsHovercardContentsQuery)

  const onBeginHover = () => {
    loadQuery({ posterID: data.poster.id })
  }

  return (
    <div ref={hoverRef} className="byline">
      <Image
        image={data.poster.profilePicture}
        width={60}
        height={60}
        className="byline__image"
      />
      <div className="byline__name">{data.poster.name}</div>
      <Hovercard targetRef={hoverRef} onBeginHover={onBeginHover}>
        <PosterDetailsHovercardContents queryKey={queryKey} />
      </Hovercard>
    </div>
  );
}
