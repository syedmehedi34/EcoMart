import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const addressType = defineType({
  name: "address",
  title: "Addresses",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "name",
      title: "Address Name",
      type: "string",
      description: "Full name for this address",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "email",
      title: "User Email",
      type: "email",
    }),
    defineField({
      name: "address",
      title: "Street Address",
      type: "string",
      description: "The street address including apartment/unit number",
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "state",
      title: "State/Province",
      type: "string",
      description: "State, province, or region",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "zip",
      title: "ZIP/Postal Code",
      type: "string",
      description: "Postal code for this address",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "default",
      title: "Default Address",
      type: "boolean",
      description: "Is this the default shipping address?",
      initialValue: false,
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "address",
      city: "city",
      state: "state",
      isDefault: "default",
    },
    prepare({ title, subtitle, city, state, isDefault }) {
      return {
        title: `${title} ${isDefault ? "(Default)" : ""}`,
        subtitle: `${subtitle}, ${city}, ${state}`,
      };
    },
  },
});
