export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  email: string;
  create_password: string;
  password: string;
};

export type LinkItem = {
  link: string;
  platform: string;
}

export type LinksPayload = {
  links: LinkItem[];
};

export type ProfilePayload = {
  profile_picture: File;
  first_name: string;
  last_name: string;
  email: string;
};
