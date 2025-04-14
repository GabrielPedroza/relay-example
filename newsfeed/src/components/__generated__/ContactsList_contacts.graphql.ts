/**
 * @generated SignedSource<<75fffa2911c406132d96c8a83e4ace72>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContactsList_contacts$data = ReadonlyArray<{
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"ContactRowFragment">;
  readonly " $fragmentType": "ContactsList_contacts";
}>;
export type ContactsList_contacts$key = ReadonlyArray<{
  readonly " $data"?: ContactsList_contacts$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContactsList_contacts">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "ContactsList_contacts",
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
      "name": "ContactRowFragment"
    }
  ],
  "type": "Actor",
  "abstractKey": "__isActor"
};

(node as any).hash = "a7ae3b84be582b4bf9db15269d23ae7b";

export default node;
