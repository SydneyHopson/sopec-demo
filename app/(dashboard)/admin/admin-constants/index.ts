import {
  LayoutDashboard,
  Users,
  FolderKanban,
  FilePlus2,
  UploadCloud,
  FileText,
} from "lucide-react";

export const navigationLinks = [
  {
    href: "/library",
    label: "Library",
  },
  {
    href: "/my-profile",
    label: "My Profile",
  },
];

// ✅ Admin Sidebar Links for SOPEC (Lucide icons, no books)
export const adminSideBarLinks = [
  {
    route: "/admin",
    text: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    route: "/admin/communities",
    text: "Communities",
    icon: Users,
  },
  {
    route: "/admin/programs",
    text: "Programs",
    icon: FolderKanban,
  },
  {
    route: "/admin/grants",
    text: "Grants",
    icon: FilePlus2,
  },
  {
    route: "/admin/bulk-upload",
    text: "Bulk Uploads",
    icon: UploadCloud,
  },
  {
    route: "/admin/documents",
    text: "Documents",
    icon: FileText,
  },
];

// 🎯 Field constants for forms (optional, keeping from your original setup)
export const FIELD_NAMES = {
  fullName: "Full name",
  email: "Email",
  universityId: "University ID Number",
  password: "Password",
  universityCard: "Upload University ID Card",
};

export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  universityId: "number",
  password: "password",
};
