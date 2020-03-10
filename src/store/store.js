import { writable } from 'svelte/store';

export const wasViewed = () => {
  if (typeof Storage !== "undefined") {
    return localStorage.getItem("wasViewed");
  }
}

export const viewedFlag = writable(wasViewed());