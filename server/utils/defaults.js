module.exports = {
  "within": (mi = '35') => `&within=${mi}`,
  "image_sizes": (sizes = ['large', 'medium']) => `&image_sizes=${sizes.join(',')}`,
  "sort_order": (option = 'popularity') => `&sort_order=${option}`,
  "page_size": (numOfResults = 12) => `&page_size=${numOfResults}`,

};