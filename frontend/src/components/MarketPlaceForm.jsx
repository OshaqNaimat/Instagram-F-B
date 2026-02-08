export const sellProduct = createAsyncThunk(
  "products/sell",
  async (productData) => {
    const { user_id, ...body } = productData;

    const res = await axios.post(
      `http://192.168.18.82:5000/api/products/sell/${user_id}`,
      body,
    );

    return res.data;
  },
);
