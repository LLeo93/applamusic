const initialState = {
  loading: false,
  newReleases: [],
  error: null,
  searchSuccess: false, // 👈 nuovo stato
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NEW_RELEASES_REQUEST':
      return { ...state, loading: true, searchSuccess: false };
    case 'FETCH_NEW_RELEASES_SUCCESS':
      return {
        ...state,
        loading: false,
        newReleases: action.payload,
        searchSuccess: true, // ✅ success
      };
    case 'FETCH_NEW_RELEASES_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
        searchSuccess: false,
      };
    default:
      return state;
  }
};
export default musicReducer;
