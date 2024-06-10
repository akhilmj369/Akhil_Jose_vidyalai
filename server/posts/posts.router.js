const express = require('express');
const axios = require('axios');
const { fetchPosts } = require('./posts.service');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const posts = await fetchPosts();

    // Use Promise.all to fetch all albums in parallel
    const postsWithImages = await Promise.all(
      posts.map(async post => {
        // Fetch photos for each album
        const { data: photos } = await axios.get(
          `https://jsonplaceholder.typicode.com/albums/${post.id}/photos`,
        );

        // Map the fetched photos to the desired format
        const images = photos.map(photo => ({
          url: photo.url,
          thumbnailUrl: photo.thumbnailUrl,
        }));

        return {
          ...post,
          images,
        };
      }),
    );

    res.json(postsWithImages);
  } catch (error) {
    console.error('Error fetching posts with images:', error);
    res.status(500).json({ error: 'Failed to fetch posts with images' });
  }
});

module.exports = router;