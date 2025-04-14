/**
 * @generated SignedSource<<2080ed0f520cbb4784bdea44b478cbd0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NewsfeedQueryFragment$data = {
  readonly viewer: {
    readonly newsfeedStories: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly " $fragmentSpreads": FragmentRefs<"StoryFragment">;
        } | null;
      } | null> | null;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"SidebarFragment">;
  } | null;
  readonly " $fragmentType": "NewsfeedQueryFragment";
};
export type NewsfeedQueryFragment$key = {
  readonly " $data"?: NewsfeedQueryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NewsfeedQueryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NewsfeedQueryFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Viewer",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "first",
              "value": 3
            }
          ],
          "concreteType": "StoriesConnection",
          "kind": "LinkedField",
          "name": "newsfeedStories",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "StoriesConnectionEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Story",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "id",
                      "storageKey": null
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "StoryFragment"
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": "newsfeedStories(first:3)"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SidebarFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "7236cc4a1d111dd589fd2fe8162115dc";

export default node;
