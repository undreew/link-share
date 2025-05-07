export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  email: string;
  create_password: string;
  password: string;
};

export type LinksPayload = {
  links: {
    link: string;
    platform: string;
  }[];
};

export type ProfilePayload = {
  profile_picture: File;
  first_name: string;
  last_name: string;
  email: string;
};
