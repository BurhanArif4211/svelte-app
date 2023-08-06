import { writable } from 'svelte/store';

interface AuthUser {
  displayName:string;
  uid: string;
  profileIMG:string;
  email: string;
}

const authUser = writable<AuthUser | undefined>(undefined);

export { authUser };