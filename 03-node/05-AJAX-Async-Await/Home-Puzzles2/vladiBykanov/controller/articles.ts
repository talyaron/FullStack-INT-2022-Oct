import { Article } from "../models/Article";

export const getAllArticles = async (req: any, res: any) => {
  const articles = await Article.find({});
  res.status(200).json({ articles });
};

export const createArticle = async (req: any, res: any) => {
  try {
    const article = await Article.create(req.body);
    res.status(201).json({ article });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const getArticle = async (req: any, res: any) => {
  const { id: articleID } = req.params;
  const article = await Article.findOne({ _id: articleID });
  if (!article) {
    return res
      .status(404)
      .json({ msg: `no article with the id: ${articleID}` });
  }
  res.status(200).json({ article });
};

export const updateArticle = async (req: any, res: any) => {
  const { id: articleID } = req.params;

  const article = await Article.findOneAndUpdate({ _id: articleID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!article) {
    return res
      .status(404)
      .json({ msg: `no article with the id: ${articleID}` });
  }

  res.status(200).json({ article });
};

export const deleteArticle = async (req: any, res: any) => {
  try {
    const { id: articleID } = req.params;
    const article = await Article.findOneAndDelete({ _id: articleID });
    if (!article) {
      return res
        .status(404)
        .json({ msg: `no article with the id: ${articleID}` });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
