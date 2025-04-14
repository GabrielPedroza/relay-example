/**
 * @generated SignedSource<<60a0de831d0bb9d73e3c262a8212f4df>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContactsListRefetchQuery$variables = {
  search?: string | null;
};
export type ContactsListRefetchQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"ContactsListFragment">;
  } | null;
};
export type ContactsListRefetchQuery = {
  response: ContactsListRefetchQuery$data;
  variables: ContactsListRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "search"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "search",
    "variableName": "search"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContactsListRefetchQuery",
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
            "args": (v1/*: any*/),
            "kind": "FragmentSpread",
            "name": "ContactsListFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ContactsListRefetchQuery",
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
            "args": (v1/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "contacts",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isActor"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "profilePicture",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "altText",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d7339537afd4dc53456d40e1a14acf53",
    "id": null,
    "metadata": {},
    "name": "ContactsListRefetchQuery",
    "operationKind": "query",
    "text": "query ContactsListRefetchQuery(\n  $search: String = null\n) {\n  viewer {\n    ...ContactsListFragment_40zwac\n  }\n}\n\nfragment ContactRowFragment on Actor {\n  __isActor: __typename\n  name\n  profilePicture {\n    ...ImageFragment\n  }\n}\n\nfragment ContactsListFragment_40zwac on Viewer {\n  contacts(search: $search) {\n    __typename\n    ...ContactsList_contacts\n    id\n  }\n}\n\nfragment ContactsList_contacts on Actor {\n  __isActor: __typename\n  id\n  ...ContactRowFragment\n}\n\nfragment ImageFragment on Image {\n  url\n  altText\n}\n"
  }
};
})();

(node as any).hash = "0e5fae5a9f93eab60e868067d6df35f8";

export default node;
