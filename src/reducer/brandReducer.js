const initialState = {
  brandList: [],
  text: ''
};

export const fetchBrandsAPI = () => fetch('https://core-staging.honestbee.com/api/brands?country_code=TW&serviceType=food&locale=zh-TW')
  .then(result => result.json());

// export const setBrands1 = () => async (dispatch, data) => {
//   console.log('OKOK');
//   dispatch(setBrands(data));
// };

export const setBrands = (brands) => ({
  type: 'list_brand',
  payload: {
    brands
  }
});

const listBrand = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'list_brand':
      console.log('OKOK', payload.brands);
      return ({
        ...state,
        brandList: payload.brands,
        text: 'list!'
      });
    default:
      console.log('ZZZZZ', type);
      return state;
  }
};

export default listBrand;
