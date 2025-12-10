import { products } from "../data/products";
import { blogs } from "../data/blogs";
import { submissions } from "../data/submissions";

export const api = {
  getProducts: async () => {
    // simulate async read
    return Promise.resolve(products);
  },
  getBlogs: async () => Promise.resolve(blogs),
  getSubmissions: async () => Promise.resolve(submissions),
};