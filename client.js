const client = contentful.createClient({
  space: 'arw5tmqsoy9e',
  accessToken: '8rJFvhxfbfqsNT6H48NKSjq64AcBd5tnopzvSNsSNcE'
});
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
const cleanData = (rawData) => {
  return rawData.map((item) => {
    const { fields } = item;
    return fields;
  });
};

getCarouselSlides();
