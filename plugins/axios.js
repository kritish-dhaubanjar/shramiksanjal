export default function({ $axios, redirect, store }) {
  $axios.onRequest(request => {
    // store.commit("set");
  });

  $axios.onResponse(response => {
    store.commit("reset");
  });

  $axios.onError(error => {
    store.commit("reset");
  });
}
