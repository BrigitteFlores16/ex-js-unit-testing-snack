function createSlug(text, existingPosts = []) {
  let baseSlug = text.toLowerCase().replace(/\s+/g, "-");

  if (!existingPosts || existingPosts.length === 0) {
    return baseSlug;
  }
  let slug = baseSlug;
  let counter = 1;

  while (existingPosts.some((post) => post.slug === slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  return slug;
}

module.exports = {
  createSlug,
};
