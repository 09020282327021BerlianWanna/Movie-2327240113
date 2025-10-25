import movieModels from "../models/movieModels.js";


export const createMovie = async (req, res) => {
  try {
    const movie = await movieModels.create(req.body);
    res.status(201).json({ message: "Film berhasil ditambahkan", data: movie });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const getMovies = async (req, res) => {
  try {
    const movies = await movieModels.find();
    res.status(200).json({ message: "Data film berhasil diambil", data: movies });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const movie = await movieModels.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Film tidak ditemukan" });
    res.status(200).json({ message: "Data film ditemukan", data: movie });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateMovie = async (req, res) => {
  try {
    const movie = await movieModels.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!movie) return res.status(404).json({ message: "Film tidak ditemukan" });
    res.status(200).json({ message: "Film berhasil diupdate", data: movie });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const deleteMovie = async (req, res) => {
  try {
    const movie = await movieModels.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).json({ message: "Film tidak ditemukan" });
    res.status(200).json({ message: "Film berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
