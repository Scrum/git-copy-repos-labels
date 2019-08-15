export interface options {
  from: from;
  to: to;
  token: string;
  strategy: string;
}

export interface from {
  owner: string;
  repo: string;
}

export interface to {
  owner: string;
  repo: string;
}

export interface label {
  id: string,
  name: string;
  color: string;
  description: string;
}
