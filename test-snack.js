function createSlug(text, existingPosts = []) {
  let baseSlug = text.toLowerCase().replace(/\s+/g, "-");

  if (!existingPosts || existingPosts.length === 0) {
    return baseSlug;
  }
}

module.exports = {
  createSlug,
};
