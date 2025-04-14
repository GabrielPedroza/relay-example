import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment, useRefetchableFragment } from "react-relay";
import type { ContactsListFragment$key } from "./__generated__/ContactsListFragment.graphql";
import type { ContactsList_contacts$key } from "./__generated__/ContactsList_contacts.graphql";
import Card from "./Card";
import ContactRow from "./ContactRow";
import SearchInput from "./SearchInput";

export type Props = {
  viewer: ContactsListFragment$key;
};

const ContactsListFragment = graphql`
  fragment ContactsListFragment on Viewer
    @refetchable(queryName:"ContactsListRefetchQuery")
    @argumentDefinitions(
      search: {type: "String", defaultValue: null}
    )
  {
    contacts(search: $search) {
      ...ContactsList_contacts
    }
  }
`;

export default function ContactsList({ viewer }: Props) {
  const [isPending, startTransition] = React.useTransition()
  const [data, refetch] = useRefetchableFragment(ContactsListFragment, viewer)
  const ContactsList_contacts = graphql`
    fragment ContactsList_contacts on Actor
    @relay(plural: true)
    {
      id
      ...ContactRowFragment
    }
`;
  const contacts = useFragment<ContactsList_contacts$key>(ContactsList_contacts, data.contacts)

  const [searchString, setSearchString] = React.useState("")
  const onSearchStringChanged = (value: string) => {
    setSearchString(value)
    startTransition(() => {
      refetch({ search: value })
    })
  }
  return (
    <Card dim={true}>
      <h3>Contacts</h3>
      <SearchInput onChange={onSearchStringChanged} isPending={isPending} value={searchString} />
      {contacts.map((contact) => (
        <ContactRow key={contact.id} contact={contact} />
      ))}
    </Card>
  );
}
