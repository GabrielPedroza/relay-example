import * as React from "react";
import { PreloadedQuery, useFragment, usePreloadedQuery } from "react-relay";
import { graphql } from "relay-runtime";
import Image from "./Image";
import OrganizationKind from "./OrganizationKind";
import Timestamp from "./Timestamp";

import type { PosterDetailsHovercardContentsBodyFragment$key } from "./__generated__/PosterDetailsHovercardContentsBodyFragment.graphql";
import type { PosterDetailsHovercardContentsQuery as QueryType } from "./__generated__/PosterDetailsHovercardContentsQuery.graphql";

export const PosterDetailsHovercardContentsQuery = graphql`
  query PosterDetailsHovercardContentsQuery(
    $posterID: ID!
    ) {
    node(id: $posterID) {
        ...PosterDetailsHovercardContentsBodyFragment
    }
  }
`;

export default function PosterDetailsHovercardContents({ queryKey }: { queryKey: PreloadedQuery<QueryType> }): React.ReactElement {
  const data = usePreloadedQuery(PosterDetailsHovercardContentsQuery, queryKey)
  return (
    <div className="posterHovercard">
      <PosterDetailsHovercardContentsBody poster={data.node} />
    </div>
  );
}

const PosterDetailsHovercardContentsBodyFragment = graphql`
  fragment PosterDetailsHovercardContentsBodyFragment on Actor {
    id
    name
    joined
    profilePicture {
      ...ImageFragment
    }
    ... on Organization {
      organizationKind
    }
    ... on Person {
      location {
        name
      }
    }
  }
`;

function PosterDetailsHovercardContentsBody({
  poster,
}: {
  poster: PosterDetailsHovercardContentsBodyFragment$key;
}) {
  const data = useFragment(PosterDetailsHovercardContentsBodyFragment, poster);
  return (
    <>
      <Image
        image={data.profilePicture}
        width={128}
        height={128}
        className="posterHovercard__image"
      />
      <div className="posterHovercard__name">{data.name}</div>
      <ul className="posterHovercard__details">
        <li>
          Joined <Timestamp time={data.joined} />
        </li>
        {data.location && (
          <li>{data.location.name}</li>
        )}
        {data.organizationKind && (
          <li><OrganizationKind kind={data.organizationKind} /></li>
        )}
      </ul>
      <div className="posterHovercard__buttons">
        <button>Friend</button>
        <button>Message</button>
      </div>
    </>
  );
}
