import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import ViewerProfile from "./ViewerProfile";
import ContactsList from "./ContactsList";
import { SidebarFragment$key } from "./__generated__/SidebarFragment.graphql";

type Props = {
  data: SidebarFragment$key
}

const SidebarFragment = graphql`
  fragment SidebarFragment on Viewer {
      ...ViewerProfileFragment
      ...ContactsListFragment
  }
`;

export default function Sidebar({ data }: Props) {
  const content = useFragment(SidebarFragment, data)
  return (
    <div className="sidebar">
      <ViewerProfile viewer={content} />
      <ContactsList viewer={content} />
    </div>
  );
}
