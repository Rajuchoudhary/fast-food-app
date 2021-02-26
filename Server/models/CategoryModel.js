import mongoose from 'mongoose';

const CategorySchema = mongoose.Schema({
  category: { type: String, default: 'all' },
});

const Category = mongoose.model('Category', CategorySchema);

export default Category;
