const cleanData = (rawData) => {
  return rawData.map((item) => {
    const { fields } = item;
    return fields;
  });
};
const getCarouselSlides = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'kitchenCarousel'
    });
    const responseData = response.items;
    console.log(cleanData(responseData));
  } catch (error) {
    console.log(error);
  }
};

getCarouselSlides();
