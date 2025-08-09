

import express from "express";
import shortid from "shortid";
import Url from "../models/Url.js";

const router = express.Router();
 
// router.post("/shorten", async (req, res) => {
//   const { original_url } = req.body;
//   if (!original_url) return res.status(400).json({ error: "URL is required" });

//   try { 
//     let existing = await Url.findOne({ original_url });
//     if (existing) {
//       return res.json({
//         short_code: existing.short_code,
//         short_url: `${process.env.BASE_URL || `${req.protocol}://${req.get("host")}`}/${existing.short_code}`,
//         visit_count: existing.visit_count
//       });
//     }
 
//     const randomCode = shortid.generate();
//     const short_code = `r${randomCode}`;

//     await Url.create({
//       original_url,
//       short_code,
//       visit_count: 0
//     });

//     res.json({
//       short_code,
//       short_url: `${process.env.BASE_URL || `${req.protocol}://${req.get("host")}`}/${short_code}`,
//       visit_count: 0
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });
 

router.post("/shorten", async (req, res) => {
  const { original_url } = req.body;
  if (!original_url) return res.status(400).json({ error: "URL is required" });

  try {
    let existing = await Url.findOne({ original_url });
    const base = process.env.BASE_URL || `${req.protocol}://${req.get("host")}`;

    if (existing) {
      return res.json({
        short_code: existing.short_code,
        short_url: `${base}/${existing.short_code}`,
        visit_count: existing.visit_count
      });
    }

    const short_code = shortid.generate();
    await Url.create({
      original_url,
      short_code,
      visit_count: 0
    });

    res.json({
      short_code,
      short_url: `${base}/${short_code}`,
      visit_count: 0
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});


router.get("/:shortcode", async (req, res) => {
  try {
    const url = await Url.findOne({ short_code: req.params.shortcode });
    if (!url) return res.status(404).send("URL not found");

    url.visit_count += 1;
    await url.save();
    res.redirect(url.original_url);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});
 
router.get("/admin/list", async (req, res) => {
  try {
    const urls = await Url.find().sort({ createdAt: -1 });
    const total_count = await Url.countDocuments();
    res.json({ urls, total_count });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch URLs" });
  }
});

router.delete("/admin/delete/:id", async (req, res) => {
  try {
    const deleted = await Url.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "URL not found" });

    res.json({ message: "URL deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete URL" });
  }
});

export default router;
