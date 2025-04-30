export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  email: string;
  create_password: string;
  confirm_password: string;
};

export type LinksPayload = {
  links: {
    link: string;
    platform: string;
  }[];
};
